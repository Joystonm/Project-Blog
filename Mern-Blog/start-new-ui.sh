#!/bin/bash

echo "Starting BlogVerse application with new UI..."

# Navigate to client directory
cd client

# Clear any cached files
echo "Clearing React cache..."
rm -rf node_modules/.cache

# Start the React development server
echo "Starting React development server..."
npm start
