import { Component } from '@angular/core';
import { NotificationService } from './notification.service';
import { NotificationListComponent } from './notification-list/notification-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NotificationListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private notificationService: NotificationService) {}

  addRandomNotification(): void {
    const randomMessages = ['Hello!', 'New Notification', 'You have a message!', 'Check this out!'];
    const message = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    this.notificationService.addNotification(message);
  }
}