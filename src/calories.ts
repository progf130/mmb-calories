import {NestFactory} from '@nestjs/core';
import {CaloriesModule} from './calories.module';
import {GrpcOptions, Transport} from '@nestjs/microservices';
import {join} from 'path';


async function bootstrap() {
  const app = await NestFactory.createMicroservice(CaloriesModule, {
    transport: Transport.GRPC,
    options: {
      package: 'calories',
      protoPath: join(__dirname, './interface/calories.proto'),
    },
  } as GrpcOptions);
  await app.listen();
}

bootstrap().then();