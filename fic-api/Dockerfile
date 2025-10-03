# Backend Dockerfile for Go API

FROM golang:1.23-alpine AS builder

# Install build dependencies
RUN apk add --no-cache git

WORKDIR /app

# Copy go mod files
COPY go.mod go.sum ./
RUN go mod download

# Copy source code
COPY . .

# Tidy modules and build
RUN go mod tidy
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Production image
FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /root/

# Copy the binary from builder
COPY --from=builder /app/main .
COPY --from=builder /app/init.sql .

EXPOSE 8080

CMD ["./main"]
