import { Component } from '@angular/core';

import { ContactService } from '../../services/contact.service';
import { guid } from '../../shared/guid';
import { Contact } from '../../shared/contact';

@Component({
  moduleId: module.id,
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['contact-form.component.css']
})

export class ContactFormComponent {
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  adress: string = '';

  constructor(private contactService: ContactService) { }

  apply() {
    this.contactService.add(this.firstName, this.lastName, this.phoneNumber, this.adress);
  }
}
