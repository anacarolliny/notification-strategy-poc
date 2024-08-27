import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from './notification.interface';

@Injectable()
export class NotificationService {
  private strategies: { [key: string]: NotificationStrategy } = {};

  registerStrategy(strategy: NotificationStrategy): void {
    this.strategies[strategy.identifier] = strategy;
  }

  sendNotification(
    channel: string,
    destination: string,
    message: string,
  ): void {
    const strategy = this.strategies[channel];
    if (!strategy) {
      throw new Error(`Canal de notificação não suportado: ${channel}`);
    }
    strategy.send(destination, message);
  }
}
