import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ClassroomsModule } from './modules/classrooms/modules/classroom.module';
import { SubjectModule } from './modules/subjects/modules/subject.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    SubjectModule,
    ClassroomsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
