export interface CreateUserDto {
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
  avatar?: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  role?: 'USER' | 'ADMIN';
  avatar?: string;
}
