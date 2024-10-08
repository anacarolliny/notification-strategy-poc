import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { DiscordStrategy } from './strategies/discord.strategy';
import { EmailStrategy } from './strategies/email.strategy';
import { InstagramStrategy } from './strategies/instagram.strategy';
import { TwitterStrategy } from './strategies/twitter.strategy';
import { WhatsAppStrategy } from './strategies/whatsapp.strategy';
import { NotificationsInitService } from './notification-init.service';

@Module({
  controllers: [NotificationController],
  providers: [
    NotificationService,
    DiscordStrategy,
    EmailStrategy,
    InstagramStrategy,
    TwitterStrategy,
    WhatsAppStrategy,
    NotificationsInitService,
  ],
})
export class NotificationsModule {}
