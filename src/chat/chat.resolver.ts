import {
    Resolver,
    Mutation,
    Args,
    Query,
    Subscription,
    Context,
} from '@nestjs/graphql';
import { Chat } from './chat.schema';
import { ChatInput } from './chat.input';
import { ChatService } from './chat.service';
import { PubSubEngine } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';

@Resolver('Chat')
export class ChatResolver {
    constructor(
      private readonly _chatService: ChatService,
      @Inject('PUB_SUB') private pubsub: PubSubEngine
      ) {}

  @Query(() => [Chat])
  async allChats() {
    return await this._chatService.findAll();
  }

  @Mutation(() => Chat)
  async createChat(
    @Args('data') data: ChatInput,
  ): Promise<Chat> {
    const chat = await this._chatService.create(data);
    this.pubsub.publish('chat', {
      chatSubs: {
        from: chat.from,
        to: chat.to,
        message: chat.message,
      },
    });
    return chat;
  }

  @Subscription(() => Chat)
  chatSubs() {
    return this.pubsub.asyncIterator('chat');
  }
}
