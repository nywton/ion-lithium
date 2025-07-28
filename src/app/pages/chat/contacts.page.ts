import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class ContactsPage {
  contacts = [
    { id: '1', name: 'Alice', lastMessage: 'Hey!', time: '10:45' },
    { id: '2', name: 'Bob', lastMessage: 'See you later!', time: '10:30' },
  ];
}
