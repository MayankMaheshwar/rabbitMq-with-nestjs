import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './src/orders.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  await app.listen(3000);
}
bootstrap();
