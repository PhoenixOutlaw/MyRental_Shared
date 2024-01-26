import { DynamicModule, Module } from "@nestjs/common";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";

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
}

interface Iservice {
  provider: string;
  queue: string;
}
