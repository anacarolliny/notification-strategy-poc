export interface NotificationStrategy {
  readonly identifier: string;
  send(destination: string, message: string): void;
}
