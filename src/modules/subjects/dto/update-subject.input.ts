import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateSubjectInput } from './create-subject.input';

@InputType()
export class UpdateSubjectInput extends PartialType(CreateSubjectInput) {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;
}
