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
    { name: 'Alice Green', lastMessage: 'Hey!', time: '10:15', image: null },
    { name: 'Bob Smith', lastMessage: 'See you soon.', time: '09:45', image: null },
    { name: 'Chloe Yang', lastMessage: 'Good night', time: 'Yesterday', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTiuB0TEIvT4-tfSczpgVraj7n44bQdaxgDhRckf6TBGSl7XdU8DdsrcpU-LekERdrjg&usqp=CAU' },
  ];

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  stringToColor(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${hash % 360}, 60%, 60%)`;
  }
}
