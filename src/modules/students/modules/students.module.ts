import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { StudentsResolver } from '../resolvers/student.resolver';
import { StudentService } from '../services/student.service';

@Module({
  providers: [StudentsResolver, StudentService, PrismaService],
})
export class StudentsModule {}
