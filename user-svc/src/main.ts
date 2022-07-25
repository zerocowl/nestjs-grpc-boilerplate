import { INestMicroservice, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { protobufPackage } from './user/user.pb';
import { join } from 'path';

async function bootstrap() {
  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50052',
        package: protobufPackage,
        protoPath: join(__dirname, '../../protos/user.proto'),
      },
    },
  );

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen();
}

bootstrap();
