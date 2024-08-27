export interface NotificationStrategy {
  send(destination: string, message: string): void;
}
