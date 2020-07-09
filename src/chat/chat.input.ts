import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ChatInput {
  @Field({ nullable: false })
  from: string;

  @Field({ nullable: false })
  to: string;

  @Field({ nullable: false })
  message: string;
}
