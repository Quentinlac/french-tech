#!/bin/bash

# Database initialization script
# Run this to create tables in your PostgreSQL database

echo "Initializing FIC Croatia Database..."

# Full PostgreSQL connection URI
DATABASE_URL="postgresql://postgres:OtFBWueOVtduWhLjB-q7r9J4iHH5Jj8I@za0500a92-postgresql.z216d71b1.prm.sh:5432/postgres"

psql "$DATABASE_URL" -f fic-api/init.sql

if [ $? -eq 0 ]; then
    echo "✅ Database initialized successfully!"
else
    echo "❌ Failed to initialize database. Check your connection."
fi
