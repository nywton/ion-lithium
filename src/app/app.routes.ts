import { Routes } from '@angular/router';
import { ChatPage } from './pages/chat/chat.page';
import { ContactsPage } from './pages/chat/contacts.page';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ContactsPage },
      { path: 'chat', component: ChatPage },
    ],
  },
];
