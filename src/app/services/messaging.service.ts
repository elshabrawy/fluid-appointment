import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Messaging, getToken, onMessage } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private messaging: Messaging) {
    onMessage(this.messaging, (payload:any) => {
      console.log('Message received: ', payload);
      this.currentMessage.next(payload);
    });
  }

  requestPermission() {
    getToken(this.messaging, { vapidKey: 'BAV8-r3HKGt-e7-3kJhJRyAD_zb5HnQlfxY-CxiUSw4tgwUUPnvDRSE8ps-m_6Mbt0E-na1uZ7p-ESlq9Z6_klw' })
      .then((token) => {
        console.log('Permission granted! Token:', token);
        // Store or send this token to your server
      })
      .catch((error) => {
        console.error('Permission denied:', error);
      });
  }
}
