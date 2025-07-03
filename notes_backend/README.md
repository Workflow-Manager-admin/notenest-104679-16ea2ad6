# Notes Backend

RESTful API server for creating, reading, updating, and deleting notes.  
Built with Express.js and PostgreSQL.

## Features

- List all notes
- Create new note
- Edit existing note
- Delete note
- OpenAPI docs at `/docs`

## Prerequisites

- Node.js (>=16)
- PostgreSQL database (see [../notes_database/README.md](../notes_database/README.md))

## Setup & Usage

1. Install dependencies:

   ```sh
   npm install
   ```

2. **Environment Variables:**

   Copy `.env.example` to `.env` and update as needed for your environment.

   ```
   cp .env.example .env
   ```

   - `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USER`, `DB_PASSWORD` - Configure to match your Postgres instance.
   - `PORT` - (optional) Defaults to `3001`.

3. **Run (development mode):**
   ```sh
   npm run dev
   ```

4. **Run (production):**
   ```sh
   npm start
   ```

5. **OpenAPI/Swagger Docs:**

   Once running, visit [http://localhost:3001/docs](http://localhost:3001/docs)

## API Endpoints

All endpoints accept/return `application/json`.  
See `/docs` for the full OpenAPI spec.

| Method | Endpoint        | Description                |
|--------|----------------|----------------------------|
| GET    | /api/notes     | List all notes             |
| POST   | /api/notes     | Create a new note          |
| GET    | /api/notes/:id | Get a note by ID           |
| PUT    | /api/notes/:id | Update note by ID          |
| DELETE | /api/notes/:id | Delete note by ID          |

## Notes Table Structure

| Column     | Type           | Description             |
|------------|----------------|------------------------|
| id         | SERIAL (int)   | Primary key            |
| title      | VARCHAR(255)   | Note title             |
| content    | TEXT           | Note content           |
| created_at | TIMESTAMP      | Creation timestamp     |
| updated_at | TIMESTAMP      | Last modified timestamp|

## Development

- Lint: `npm run lint`
- Test: `npm test`

## Environment Variables

See `.env.example`.

## License

MIT
