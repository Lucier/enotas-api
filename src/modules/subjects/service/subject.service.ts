import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CreateSubjectInput } from '../dto/create-subject.input';
import { UpdateSubjectInput } from '../dto/update-subject.input';
import { Subject } from '../entity/subject.entity';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  create(createSubjectInput: CreateSubjectInput): Promise<Subject> {
    return this.prisma.subject.create({
      data: createSubjectInput,
    });
  }

  findAll(): Promise<Subject[]> {
    return this.prisma.subject.findMany();
  }

  findOne(id: string): Promise<Subject> {
    return this.prisma.subject.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateSubjectInput: UpdateSubjectInput): Promise<Subject> {
    const { name } = updateSubjectInput;

    return this.prisma.subject.update({
      where: {
        id,
      },
      data: {
        ...(name && { name }),
      },
    });
  }

  remove(id: string): Promise<Subject> {
    return this.prisma.subject.delete({
      where: {
        id,
      },
    });
  }
}
