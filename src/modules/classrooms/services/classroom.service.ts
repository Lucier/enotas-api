import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CreateClassroomInput } from '../dto/create-classroom.input';
import { UpdateClassroomInput } from '../dto/update-classroom.input';
import { Classroom } from '../entity/classroom.entity';

@Injectable()
export class ClassroomService {
  constructor(private prisma: PrismaService) {}

  create(createClassroomInput: CreateClassroomInput): Promise<Classroom> {
    return this.prisma.classroom.create({
      data: createClassroomInput,
    });
  }

  findAll(): Promise<Classroom[]> {
    return this.prisma.classroom.findMany();
  }

  findOne(id: string): Promise<Classroom> {
    return this.prisma.classroom.findUnique({
      where: {
        id,
      },
    });
  }

  update(
    id: string,
    updateClassroomInput: UpdateClassroomInput,
  ): Promise<Classroom> {
    const { name } = updateClassroomInput;

    return this.prisma.classroom.update({
      where: {
        id,
      },
      data: {
        ...(name && { name }),
      },
    });
  }

  remove(id: string): Promise<Classroom> {
    return this.prisma.classroom.delete({
      where: {
        id,
      },
    });
  }
}
