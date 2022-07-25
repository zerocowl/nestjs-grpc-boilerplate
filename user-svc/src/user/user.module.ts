import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DynamooseModule } from 'nestjs-dynamoose';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'User-Table',
        schema: UserSchema,
        options: { throughput: { read: 2, write: 2 } },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
