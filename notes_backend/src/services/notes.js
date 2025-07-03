const db = require('./db');

/**
 * Data access and business logic for Notes
 */
class NotesService {
  // PUBLIC_INTERFACE
  async listNotes() {
    /**
     * Fetch list of all notes, ordered by updated_at desc
     * @returns {Promise<Array>}
     */
    const result = await db.query('SELECT * FROM notes ORDER BY updated_at DESC');
    return result.rows;
  }

  // PUBLIC_INTERFACE
  async createNote({ title, content }) {
    /**
     * Create a new note and return the created note.
     * @param {Object} note - { title, content }
     * @returns {Promise<Object>}
     */
    const result = await db.query(
      'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    return result.rows[0];
  }

  // PUBLIC_INTERFACE
  async getNoteById(id) {
    /**
     * Get note by ID
     * @param {number|string} id
     * @returns {Promise<Object|null>}
     */
    const result = await db.query('SELECT * FROM notes WHERE id = $1', [id]);
    return result.rows[0] || null;
  }

  // PUBLIC_INTERFACE
  async updateNote(id, { title, content }) {
    /**
     * Update note by ID.
     * @param {number|string} id
     * @param {Object} data - { title, content }
     * @returns {Promise<Object|null>}
     */
    const result = await db.query(
      `UPDATE notes SET title = $1, content = $2, updated_at = NOW()
       WHERE id = $3 RETURNING *`,
      [title, content, id]
    );
    return result.rows[0] || null;
  }

  // PUBLIC_INTERFACE
  async deleteNote(id) {
    /**
     * Delete note by ID.
     * @param {number|string} id
     * @returns {Promise<boolean>} - true if deleted, false if not found
     */
    const result = await db.query('DELETE FROM notes WHERE id = $1', [id]);
    return result.rowCount > 0;
  }
}

module.exports = new NotesService();
