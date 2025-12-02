import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
