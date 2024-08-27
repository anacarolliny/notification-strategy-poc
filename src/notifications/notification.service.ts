import { Injectable } from '@nestjs/common';
import { DiscordStrategy } from './strategies/discord.strategy';
import { EmailStrategy } from './strategies/email.strategy';
import { InstagramStrategy } from './strategies/instagram.strategy';
import { TwitterStrategy } from './strategies/twitter.strategy';
import { WhatsAppStrategy } from './strategies/whatsapp.strategy';
import { NotificationStrategy } from './notification.interface';

@Injectable()
export class NotificationService {
  private strategies: { [key: string]: NotificationStrategy };

  constructor(
    private readonly discordStrategy: DiscordStrategy,
    private readonly emailStrategy: EmailStrategy,
    private readonly instagramStrategy: InstagramStrategy,
    private readonly twitterStrategy: TwitterStrategy,
    private readonly whatsappStrategy: WhatsAppStrategy,
  ) {
    this.strategies = {
      discord: this.discordStrategy,
      email: this.emailStrategy,
      instagram: this.instagramStrategy,
      twitter: this.twitterStrategy,
      whatsapp: this.whatsappStrategy,
    };
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
