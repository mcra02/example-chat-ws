import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class Chat extends Document {
  @Prop()
  @Field({nullable:false})
  from: string;

  @Prop()
  @Field({nullable:false})
  to: string;

  @Prop()
  @Field({nullable:false})
  message: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);