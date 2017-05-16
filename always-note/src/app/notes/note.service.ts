import { Injectable } from '@angular/core';
import { Note } from '../models/Note';

@Injectable()
export class NoteService {
  notes = [];
  constructor() { }

  addNote(content) {
    const newNote = new Note(content);
    this.notes.push(newNote);
  }

  editNote(index, content) {
    this.notes[index].note = content;
    this.notes[index].updatedAt = new Date();
  }

  removeNote(index) {
    this.notes.splice(index.index, 1);
  }
}
