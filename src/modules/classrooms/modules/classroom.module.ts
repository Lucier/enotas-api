import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ClassroomResolver } from '../resolvers/classroom.resolver';
import { ClassroomService } from '../services/classroom.service';

@Module({
  providers: [ClassroomResolver, ClassroomService, PrismaService],
})
export class ClassroomsModule {}
