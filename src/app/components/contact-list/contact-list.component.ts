import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';

import { Contact } from '../../shared/contact';

@Component({
  moduleId: module.id,
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  del(contact: Contact) {
    this.contactService.delete(contact);
  }

  change(contact: Contact) {
    this.contactService.edit(contact);
  }
}
