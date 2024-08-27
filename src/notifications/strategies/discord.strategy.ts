import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from '../notification.interface';

@Injectable()
export class DiscordStrategy implements NotificationStrategy {
  public readonly identifier = 'discord';

  send(destination: string, message: string): void {
    console.log(`Mensagem enviada para Discord (${destination}): ${message}`);
  }
}
