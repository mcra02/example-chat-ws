import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';
import {Chat, ChatSchema} from './chat.schema'
import { PubSub } from 'graphql-subscriptions';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }])
  ],
  providers: [
    ChatService,
    ChatResolver,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    }
  ]
})
export class ChatModule {}
