import { Component, OnInit } from '@angular/core';
import { Note } from '../models/Note';
import { NoteService } from './note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes = [];
  newNote = {
    note: ''
  }
  noteToEdit = {
    editNote: '',
    id: 0
  }
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this.notes = this._noteService.notes;
  }

  submitNote(note) {
    console.log(note);
    this._noteService.addNote(note.viewModel);
    this.newNote = {
      note:''
    }
  }

  deleteNote(i) {
    this._noteService.removeNote(i);
  }

  chooseEdit(i) {
    this.noteToEdit.editNote = this.notes[i].note;
    this.noteToEdit.id = i;
    console.log(this.noteToEdit);
  }

  updateNote(note, i) {
    console.log(note);
    this._noteService.editNote(i.viewModel, note.viewModel);
    this.noteToEdit = {
      editNote: '',
      id: 0
    }
  }

  cancelEdit() {
    this.noteToEdit = {
      editNote: '',
      id: 0
    }
  }

}
