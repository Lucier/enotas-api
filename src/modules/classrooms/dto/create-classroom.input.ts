import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClassroomInput {
  @Field()
  name: string;
}
