import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  registration: string;
}
