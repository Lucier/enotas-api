import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  registration: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
