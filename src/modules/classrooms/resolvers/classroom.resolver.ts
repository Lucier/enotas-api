import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateClassroomInput } from '../dto/create-classroom.input';
import { UpdateClassroomInput } from '../dto/update-classroom.input';
import { Classroom } from '../entity/classroom.entity';
import { ClassroomService } from '../services/classroom.service';

@Resolver(() => Classroom)
export class ClassroomResolver {
  constructor(private readonly classroomService: ClassroomService) {}

  @Mutation(() => Classroom)
  createClassroom(
    @Args('createClassroomInput') createClassroomInput: CreateClassroomInput,
  ) {
    return this.classroomService.create(createClassroomInput);
  }

  @Query(() => [Classroom], { name: 'classrooms' })
  findAll() {
    return this.classroomService.findAll();
  }

  @Query(() => Classroom, { name: 'classroom' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.classroomService.findOne(id);
  }

  @Mutation(() => Classroom)
  updateClassroom(
    @Args('updateClassroomInput') updateClassroomInput: UpdateClassroomInput,
  ) {
    return this.classroomService.update(
      updateClassroomInput.id,
      updateClassroomInput,
    );
  }

  @Mutation(() => Classroom)
  removeClasroom(@Args('id', { type: () => String }) id: string) {
    return this.classroomService.remove(id);
  }
}
