import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from '../dto/create-student.input';
import { UpdateStudentInput } from '../dto/update-student.input';
import { Student } from '../entity/student.entity';
import { StudentService } from '../services/student.service';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => Student)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.create(createStudentInput);
  }

  @Query(() => [Student], { name: 'students' })
  findAll() {
    return this.studentService.findAll();
  }

  @Query(() => Student, { name: 'student' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.studentService.findOne(id);
  }

  @Mutation(() => Student)
  updateStudent(
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
  ) {
    return this.studentService.update(
      updateStudentInput.id,
      updateStudentInput,
    );
  }

  @Mutation(() => Student)
  removeStudent(@Args('id', { type: () => String }) id: string) {
    return this.studentService.remove(id);
  }
}
