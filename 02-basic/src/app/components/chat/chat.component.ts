import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  text = '';
  messageSubcription: Subscription;
  messages: any[] = [];
  element: HTMLElement;

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit() {

    this.element = document.getElementById('chat-messages');

    this.messageSubcription = this.chatService.getMessages()
      .subscribe( msg => {
        this.messages.push(msg);

        // move the scroll to end page.
        setTimeout(() =>  {
          this.element.scrollTop = this.element.scrollHeight;
        }, 50);

      });
  }

  ngOnDestroy() {
    this.messageSubcription.unsubscribe();
  }

  send() {
    if ( this.text.trim().length === 0) {
      return;
    }

    this.chatService.sendMessage(this.text);
    this.text = '';
  }

}
