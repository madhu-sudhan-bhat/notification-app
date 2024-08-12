import { Injectable } from '@angular/core';

export interface Notification {
  id: number;
  message: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notification[] = [];
  private nextId = 1;

  getNotifications(): Notification[] {
    return this.notifications;
  }

  addNotification(message: string): void {
    const newNotification: Notification = {
      id: this.nextId++,
      message,
      timestamp: new Date()
    };
    this.notifications.push(newNotification);
  }

  deleteNotification(id: number): void {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
  }
}