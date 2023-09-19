import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply the CORS middleware before app.listen() http://localhost:3001/
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Replace with your React app's domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
