#!/bin/bash

# Start SQL Server in the background
/opt/mssql/bin/sqlservr &

# Wait for SQL Server to start (adjust timing if needed)
echo "Waiting for SQL Server to start..."
sleep 20

# Run your SQL initialization script
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "$SA_PASSWORD" -i /init.sql

# Keep container alive
wait
