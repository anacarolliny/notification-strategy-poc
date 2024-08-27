import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from '../notification.interface';

@Injectable()
export class InstagramStrategy implements NotificationStrategy {
  public readonly identifier = 'instagram';

  send(destination: string, message: string): void {
    console.log(`Mensagem enviada para Instagram (${destination}): ${message}`);
  }
}
