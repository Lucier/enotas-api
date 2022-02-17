import { Module } from '@nestjs/common';
import { SubjectResolver } from '../resolvers/subject.resolver';
import { SubjectService } from '../service/subject.service';
import { PrismaService } from '../../../../prisma/prisma.service';

@Module({
  providers: [SubjectResolver, SubjectService, PrismaService],
})
export class SubjectModule {}
