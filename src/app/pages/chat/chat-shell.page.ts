import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-chat-shell',
  templateUrl: './chat-shell.page.html',
  styleUrls: ['./chat-shell.page.scss'],
  imports: [IonicModule, CommonModule, RouterOutlet],
})
export class ChatShellPage {
  constructor(private router: Router) { }

  get isChatOpen(): boolean {
    return this.router.url.includes('/chat/');
  }
}
