import { Contact } from '../shared/contact';
import { contacts } from '../shared/contacts';
import { guid } from '../shared/guid';

export class ContactService {
  contacts: Contact[] = contacts;

  private save() {
    try {
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    } catch (err) {
      console.error(err);
    }
  }

  private load() {
    try {
      this.contacts = JSON.parse(localStorage.getItem('contacts')) || contacts;
    } catch (err) {
      console.error(err);
    }
  }

  getContacts(): Contact[] {
    this.load();
    this.save();
    return this.contacts;
  }

  add(firstName: string, lastName: string, phoneNumber: string, adress: string) {
    let contact = new Contact(firstName, lastName, phoneNumber, adress, guid());
    this.contacts.push(contact);
    this.save();
  }

  delete(contact: Contact) {
    let index = this.contacts.findIndex((e: Contact) => e.id === contact.id);
    this.contacts.splice(index, 1);
    this.save();
  }

  edit(contact: Contact) {
    // let index = this.contacts.map(function(e) { return e.id; }).indexOf(contact.id);
    let index = this.contacts.findIndex((e: Contact) => e.id === contact.id);
    if (index !== -1) {
      this.contacts.splice(index, 1, contact);
    }
    this.save();
  }
}
