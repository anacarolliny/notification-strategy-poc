import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from '../notification.interface';

@Injectable()
export class WhatsAppStrategy implements NotificationStrategy {
  send(destination: string, message: string): void {
    console.log(`Mensagem enviada para Whatsapp (${destination}): ${message}`);
  }
}
