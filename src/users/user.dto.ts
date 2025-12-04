import { IsEmail, IsIn, IsNotEmpty } from 'class-validator';
import { RoleType } from 'src/users/roles/role';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsIn(['USER', 'ADMIN'])
  role: 'USER' | 'ADMIN';
  avatar?: string;
}

export class UpdateUserDto {
  name?: string;
  @IsEmail()
  email?: string;
  @IsIn(['USER', 'ADMIN'])
  role?: 'USER' | 'ADMIN';
  avatar?: string;
}

export class UserByEmailResponseDto {
  userId: string;
  email: string;
  roles: RoleType[];
}
