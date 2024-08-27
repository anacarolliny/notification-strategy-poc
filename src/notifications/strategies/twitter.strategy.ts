import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from '../notification.interface';

@Injectable()
export class TwitterStrategy implements NotificationStrategy {
  public readonly identifier = 'twitter';

  send(destination: string, message: string): void {
    console.log(`Mensagem enviada para Twitter (${destination}): ${message}`);
  }
}
