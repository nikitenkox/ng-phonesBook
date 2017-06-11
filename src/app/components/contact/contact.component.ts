import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Contact } from '../../shared/contact';

@Component({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  @Input() contact: Contact;
  @Output() delete = new EventEmitter();
  @Output() change = new EventEmitter();
  changing: boolean = false;

  onDelete() {
    this.delete.emit(this.contact);
  }

  onChange() {
    this.changing = true;
    window.scrollBy(0, 50);
  }

  applyChange() {
    let newContact = new Contact(this.contact.firstName,
      this.contact.lastName, this.contact.phoneNumber, this.contact.adress, this.contact.id);
    this.change.emit(newContact);
    this.changing = false;
  }
}
