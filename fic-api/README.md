# FIC API

Lightweight Go backend for French Innovation Club Croatia website.

## Quick Start

1. **Start PostgreSQL:**
   ```bash
   docker-compose up -d
   ```

2. **Install dependencies:**
   ```bash
   go mod download
   ```

3. **Run the API:**
   ```bash
   go run main.go
   ```

API will be available at `http://localhost:8080`

## Endpoints

- `POST /api/join` - Submit community join form
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /health` - Health check

## Database

PostgreSQL runs on `localhost:5432`
- Database: `fic_db`
- User: `fic_user`
- Password: `fic_password`

## Environment Variables

See `.env` file for configuration.
