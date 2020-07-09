import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(80);
  console.log("App listen in : " + `http://0.0.0.0:80/graphql`)
}
bootstrap();
