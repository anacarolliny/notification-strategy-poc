import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  sendNotification(
    @Body('channel') channel: string,
    @Body('destination') destination: string,
    @Body('message') message: string,
  ): void {
    this.notificationService.sendNotification(channel, destination, message);
  }
}
