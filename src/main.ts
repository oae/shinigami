import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Shinigami API')
    .setDescription('Provides manga information from various sources')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    // add multiple origins here
    origin: ['http://localhost:3000/'],
  });

  await app.listen(port);
}
bootstrap().then(() => console.log(`Shinigami API is running on port ${port}`));
