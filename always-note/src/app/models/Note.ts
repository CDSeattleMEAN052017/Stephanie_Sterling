import { Injectable } from '@angular/core';

@Injectable()
export class Note {
  note: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(note) {
    this.note = note;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

}
