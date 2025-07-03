const notesService = require('../services/notes');

// PUBLIC_INTERFACE
class NotesController {
  /**
   * List all notes
   */
  async list(req, res, next) {
    try {
      const notes = await notesService.listNotes();
      res.status(200).json(notes);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Create a new note
   */
  async create(req, res, next) {
    try {
      const { title, content } = req.body;
      if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required.' });
      }
      const note = await notesService.createNote({ title, content });
      res.status(201).json(note);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Get a note by ID
   */
  async get(req, res, next) {
    try {
      const { id } = req.params;
      const note = await notesService.getNoteById(id);
      if (!note) return res.status(404).json({ message: 'Note not found.' });
      res.status(200).json(note);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Update a note by ID
   */
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required.' });
      }
      const note = await notesService.updateNote(id, { title, content });
      if (!note) return res.status(404).json({ message: 'Note not found.' });
      res.status(200).json(note);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Delete a note by ID
   */
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await notesService.deleteNote(id);
      if (!deleted) return res.status(404).json({ message: 'Note not found.' });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new NotesController();
