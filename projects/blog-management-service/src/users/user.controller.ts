import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ConflictException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @Post('register')
  async create(@Body() body: CreateUserDto): Promise<User> {
    const { username } = body;
    const usernameExists = await this.userService.findOneByUsername(username);
    if (usernameExists) {
      throw new ConflictException('Username already exists');
    }
    const user = await this.userService.create(body);

    return user;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
