import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from '../notification.interface';

@Injectable()
export class DiscordStrategy implements NotificationStrategy {
  send(destination: string, message: string): void {
    console.log(`Mensagem enviada para Discord (${destination}): ${message}`);
  }
}
