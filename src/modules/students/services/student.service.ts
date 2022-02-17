import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CreateStudentInput } from '../dto/create-student.input';
import { UpdateStudentInput } from '../dto/update-student.input';
import { Student } from '../entity/student.entity';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  create(createStudentInput: CreateStudentInput): Promise<Student> {
    return this.prisma.student.create({
      data: createStudentInput,
    });
  }

  findAll(): Promise<Student[]> {
    return this.prisma.student.findMany();
  }

  findOne(id: string): Promise<Student> {
    return this.prisma.student.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateStudentInput: UpdateStudentInput): Promise<Student> {
    const { name, registration } = updateStudentInput;

    return this.prisma.student.update({
      where: {
        id,
      },
      data: {
        ...(name && { name }),
        ...(registration && { registration }),
      },
    });
  }

  remove(id: string): Promise<Student> {
    return this.prisma.student.delete({
      where: {
        id,
      },
    });
  }
}
