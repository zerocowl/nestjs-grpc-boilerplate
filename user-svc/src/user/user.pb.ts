/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'user';

/** Declare the types used above */
export interface Empty {}

export interface UserById {
  id: number;
}

export interface User {
  id: number;
  fullName: string;
  email: string;
  adress: string;
}

export interface UsersArray {
  users: User[];
}

export const USER_PACKAGE_NAME = 'user';

export interface UserMicroserviceClient {
  getOne(request: UserById): Observable<User>;

  getAll(request: Empty): Observable<UsersArray>;
}

export interface UserMicroserviceController {
  getOne(request: UserById): Promise<User> | Observable<User> | User;

  getAll(
    request: Empty,
  ): Promise<UsersArray> | Observable<UsersArray> | UsersArray;
}

export function UserMicroserviceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getOne', 'getAll'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('UserMicroservice', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('UserMicroservice', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const USER_MICROSERVICE_NAME = 'UserMicroservice';
