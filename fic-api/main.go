package main

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

type Server struct {
	db *pgxpool.Pool
}

type CommunityMember struct {
	Name        string   `json:"name"`
	Email       string   `json:"email"`
	Company     string   `json:"company"`
	Role        string   `json:"role"`
	LinkedIn    string   `json:"linkedin"`
	Phone       string   `json:"phone"`
	Involvement []string `json:"involvement"`
	Interests   []string `json:"interests"`
	Message     string   `json:"message"`
	Newsletter  bool     `json:"newsletter"`
}

type ContactMessage struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

type NewsletterSubscriber struct {
	Email string `json:"email"`
}

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using system environment variables")
	}

	// Connect to database
	dbURL := os.Getenv("DATABASE_URL")
	pool, err := pgxpool.New(context.Background(), dbURL)
	if err != nil {
		log.Fatal("Unable to connect to database:", err)
	}
	defer pool.Close()

	// Test connection
	if err := pool.Ping(context.Background()); err != nil {
		log.Fatal("Unable to ping database:", err)
	}
	log.Println("Connected to database successfully")

	server := &Server{db: pool}

	// Setup router
	r := chi.NewRouter()

	// Middleware
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{os.Getenv("FRONTEND_URL"), "http://localhost:3008"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type"},
		AllowCredentials: false,
		MaxAge:           300,
	}))

	// Routes
	r.Post("/api/join", server.handleJoinCommunity)
	r.Post("/api/contact", server.handleContactMessage)
	r.Post("/api/newsletter", server.handleNewsletterSubscribe)

	// Health check
	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	if err := http.ListenAndServe(":"+port, r); err != nil {
		log.Fatal(err)
	}
}

func (s *Server) handleJoinCommunity(w http.ResponseWriter, r *http.Request) {
	var member CommunityMember
	if err := json.NewDecoder(r.Body).Decode(&member); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	query := `
		INSERT INTO community_members (name, email, company, role, linkedin, phone, involvement, interests, message, newsletter)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
		RETURNING id
	`

	var id int
	err := s.db.QueryRow(context.Background(), query,
		member.Name,
		member.Email,
		member.Company,
		member.Role,
		member.LinkedIn,
		member.Phone,
		member.Involvement,
		member.Interests,
		member.Message,
		member.Newsletter,
	).Scan(&id)

	if err != nil {
		log.Printf("Error inserting community member: %v", err)
		http.Error(w, "Failed to save member", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"message": "Successfully joined the community!",
		"id":      id,
	})
}

func (s *Server) handleContactMessage(w http.ResponseWriter, r *http.Request) {
	var contact ContactMessage
	if err := json.NewDecoder(r.Body).Decode(&contact); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	query := `
		INSERT INTO contact_messages (name, email, subject, message)
		VALUES ($1, $2, $3, $4)
		RETURNING id
	`

	var id int
	err := s.db.QueryRow(context.Background(), query,
		contact.Name,
		contact.Email,
		contact.Subject,
		contact.Message,
	).Scan(&id)

	if err != nil {
		log.Printf("Error inserting contact message: %v", err)
		http.Error(w, "Failed to save message", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"message": "Message sent successfully!",
		"id":      id,
	})
}

func (s *Server) handleNewsletterSubscribe(w http.ResponseWriter, r *http.Request) {
	var subscriber NewsletterSubscriber
	if err := json.NewDecoder(r.Body).Decode(&subscriber); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	query := `
		INSERT INTO newsletter_subscribers (email)
		VALUES ($1)
		ON CONFLICT (email) DO NOTHING
		RETURNING id
	`

	var id int
	err := s.db.QueryRow(context.Background(), query, subscriber.Email).Scan(&id)

	if err != nil {
		// Email already exists, that's ok
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{
			"message": "Already subscribed!",
		})
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"message": "Successfully subscribed!",
		"id":      id,
	})
}
