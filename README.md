# Notification Strategy POC

This project is a Proof of Concept (POC) for implementing the Strategy Design Pattern using NestJS and TypeScript. The example demonstrates how to send notifications to different channels (Discord, Email, Instagram, Twitter, WhatsApp) using the Strategy pattern.

## Project Structure

```
📂 src/
├── 📂 notifications/          # Main module for handling notifications
│   ├── 📂 strategies/         # Contains specific strategies for sending notifications
│   │   ├── discord.strategy.ts
│   │   ├── email.strategy.ts
│   │   ├── instagram.strategy.ts
│   │   ├── twitter.strategy.ts
│   │   ├── whatsapp.strategy.ts
│   ├── notification.controller.ts # Controller to handle notification requests
│   ├── notification.service.ts    # Service to choose the appropriate strategy
│   └── notification.interface.ts  # Interface defining the contract for strategies
├── app.module.ts               # Root module for NestJS
└── main.ts                     # Entry point of the application
```

## How It Works

1. **Controller (`notification.controller.ts`)**: Receives requests containing the `channel`, `destination`, and `message`. It passes this data to the `NotificationService`.
2. **Service (`notification.service.ts`)**: The service contains a map of strategies for each supported channel. It selects the appropriate strategy based on the `channel` provided and invokes the `send` method on that strategy.

3. **Strategies (`strategies/*.strategy.ts`)**: Each strategy implements the `NotificationStrategy` interface and defines a `send` method that logs the notification as being sent to the specific channel.

## Getting Started

To run this project:

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm run start
   ```

## Example Usage

You can send a POST request to `http://localhost:3000/notifications` with a JSON body like:

```json
{
  "channel": "discord",
  "destination": "some-destination-id",
  "message": "Hello, Discord!"
}
```

The server will log: `Mensagem enviada para Discord (some-destination-id): Hello, Discord!`.

## License

This project is licensed under the MIT License.
