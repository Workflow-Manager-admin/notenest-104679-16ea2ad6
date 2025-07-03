# notes_database

This directory contains the database container setup for the Notes application using PostgreSQL.

## Usage

1. **Build and run the database container (from this directory)**

```
docker build -t notes_database .
docker run -d -p 5432:5432 --name notes_database \
  -e POSTGRES_DB=notesdb \
  -e POSTGRES_USER=notesuser \
  -e POSTGRES_PASSWORD=notessecret \
  notes_database
```

2. **Database Credentials**

- Host: `localhost` (or `notes_database` if running in Docker Compose)
- Port: `5432`
- Database: `notesdb`
- Username: `notesuser`
- Password: `notessecret`

3. **Initialization**

The `init.sql` script will automatically be run on first launch and creates the `notes` table with the following fields:
- `id` (SERIAL, PRIMARY KEY)
- `title` (VARCHAR 255, NOT NULL)
- `content` (TEXT, NOT NULL)
- `created_at` (TIMESTAMP WITH TIME ZONE, defaults to now)
- `updated_at` (TIMESTAMP WITH TIME ZONE, auto updates on modification)

4. **Connect from backend**

Use these environment variables for your Express backend (`notes_backend`):

```
DB_HOST=notes_database
DB_PORT=5432
DB_DATABASE=notesdb
DB_USER=notesuser
DB_PASSWORD=notessecret
```

Adjust as needed if using a different setup or Docker Compose.

## Resetting data

To drop and recreate tables, you may rebuild the container or manually psql into the database and run schema scripts.

## Notes

- This setup is for local development. For production, use secure passwords and non-default credentials.
