import { Injectable, OnModuleInit } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { DiscordStrategy } from './strategies/discord.strategy';
import { EmailStrategy } from './strategies/email.strategy';
import { TwitterStrategy } from './strategies/twitter.strategy';
import { WhatsAppStrategy } from './strategies/whatsapp.strategy';
import { InstagramStrategy } from './strategies/instagram.strategy';

@Injectable()
export class NotificationsInitService implements OnModuleInit {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly discordStrategy: DiscordStrategy,
    private readonly emailStrategy: EmailStrategy,
    private readonly twitterStrategy: TwitterStrategy,
    private readonly whatsappStrategy: WhatsAppStrategy,
    private readonly instagramStrategy: InstagramStrategy,
  ) {}

  onModuleInit() {
    this.notificationService.registerStrategy(this.discordStrategy);
    this.notificationService.registerStrategy(this.emailStrategy);
    this.notificationService.registerStrategy(this.twitterStrategy);
    this.notificationService.registerStrategy(this.whatsappStrategy);
    this.notificationService.registerStrategy(this.instagramStrategy);
  }
}
