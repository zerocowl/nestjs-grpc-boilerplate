import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IUser, IUserById } from './user.interface';

@Controller('user')
export class UserController {
  usersList: IUser[] = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      adress: 'Street 321 Bethelem Pensyllvenia',
    },
    {
      id: 2,
      fullName: 'John Smith',
      email: 'john.Smith@example.com',
      adress: 'Street 565 Houston Texas',
    },
  ];

  @GrpcMethod('UserMicroservice', 'GetAll')
  getAll(metadata: any): { users: IUser[] } {
    console.log('Running');
    return { users: this.usersList };
  }

  @GrpcMethod('UserMicroservice', 'GetOne')
  getOne(param: IUserById, metadata: any): IUser {
    const user = this.usersList.find((x) => x.id === param.id);
    return user ? user : null;
  }
}
