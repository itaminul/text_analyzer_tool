import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const APP_PORT = process.env.APP_PORT || 9007;
  app.setGlobalPrefix('api');
    app.enableCors();
    await app.listen(APP_PORT, () => {
      console.info(`Server is listening on port ${APP_PORT}`);
    });
}
bootstrap();
