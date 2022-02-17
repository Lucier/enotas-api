import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateClassroomInput } from './create-classroom.input';

@InputType()
export class UpdateClassroomInput extends PartialType(CreateClassroomInput) {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;
}
