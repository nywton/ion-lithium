import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonContent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ChatPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content!: IonContent;
  contactName = 'User';
  input = '';
  messages: { content: string; fromSelf: boolean; time: string }[] = [];

  constructor() { }

  ngOnInit() {
    this.contactName = `João Guilherme`;
  }

  sendMessage() {
    const now = new Date();
    this.messages.push({
      content: this.input,
      fromSelf: true,
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    this.input = '';
    setTimeout(() => this.content.scrollToBottom(300), 100);
  }

  ngOnDestroy() {
    // clean up if needed
  }
}
