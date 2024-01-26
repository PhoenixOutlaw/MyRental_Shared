import { DynamicModule, Module } from "@nestjs/common";
import {
  ClientProxyFactory,
  MicroserviceOptions,
  Transport,
} from "@nestjs/microservices";

@Module({})
export class MicroServices {
  static registerRMQ(service: Iservice): DynamicModule {
    const providers = {
      provide: service.provider,
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [process.env.RABBITMQ_URLS],
            queue: service.queue,
            queueOptions: {
              durable: false,
            },
          },
        });
      },
    };
    return {
      module: MicroServices,
      global: true,
      providers: [providers],
      exports: [providers],
    };
  }
  static createMicroservice(queue: string): MicroserviceOptions {
    const REDIS_URL = process.env.RABBITMQ_URLS;
    return {
      transport: Transport.RMQ,
      options: {
        urls: [REDIS_URL],
        queue,
        queueOptions: {
          durable: false,
        },
      },
    };
  }
}

interface Iservice {
  provider: string;
  queue: string;
}
