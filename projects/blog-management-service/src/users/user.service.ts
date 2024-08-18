import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  findOneByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(user);

    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User | null> {
    const existingUser = await this.usersRepository.findOne({
      where: { id },
    });
    if (!existingUser) {
      return null;
    }
    const updatedUser = { ...existingUser, ...data };
    return this.usersRepository.save(updatedUser);
  }
}
