import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from './chat.schema';
import { ChatInput } from './chat.input';

@Injectable()
export class ChatService {
    constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>) {}

  async create(data: ChatInput): Promise<Chat> {
    const createdChat = new this.chatModel(data);
    return await createdChat.save();
  }

  async findAll(): Promise<Chat[]> {
    return await this.chatModel.find().exec();
  }
}
