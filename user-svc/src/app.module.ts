import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
  imports: [DynamooseModule.forRoot(), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
