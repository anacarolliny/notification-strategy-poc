import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from '../notification.interface';

@Injectable()
export class EmailStrategy implements NotificationStrategy {
  public readonly identifier = 'email';

  send(destination: string, message: string): void {
    console.log(`Mensagem enviada para Email (${destination}): ${message}`);
  }
}
