import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/user.entity';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    const users: User[] = [];
    fakeUsersService = {
      find: (email: string) => {
        const user = users.filter((user) => user.email === email);
        return Promise.resolve(user);
      },
      create: (name: string, email: string, password: string) => {
        const user = {
          id: users.length + 1,
          name,
          email,
          password,
        } as User;

        users.push(user);
        return Promise.resolve(user);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: fakeUsersService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user with a salted and hashed password', async () => {
    const user = await service.register(
      'John Doe',
      'john.doe@example.com',
      'password',
    );
    expect(user.password).not.toEqual('password');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('should fail to create a user with existing email', async () => {
    await service.register('John Doe', 'john.doe@example.com', 'password');
    await expect(
      service.register('John Doe', 'john.doe@example.com', 'password'),
    ).rejects.toThrow('Email already registered');
  });

  it('should fail if user login with invalid email', async () => {
    await service.register('John Doe', 'john.doe@example.com', 'password');
    await expect(
      service.login('john.doe@example.com', 'password123'),
    ).rejects.toThrow('Invalid email or password');
  });

  it('should fail if user is login with invalid password', async () => {
    await service.register('John Doe', 'john.doe@example.com', 'password');
    await expect(
      service.login('john.doe@example.com', 'wrongpassword'),
    ).rejects.toThrow('Invalid email or password');
  });

  it('should sucessfully login with the correct email and password', async () => {
    await service.register('John Doe', 'john.doe@example.com', 'password');
    const user = await service.login('john.doe@example.com', 'password');
    expect(user).toBeDefined();
  });
});
