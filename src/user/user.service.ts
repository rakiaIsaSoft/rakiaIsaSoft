import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {

//exemple
constructor(
  @InjectRepository(User)
  private readonly userRepository: Repository<User>,
) {}


addRoleToUser(createUserDto: CreateUserDto, userId: number, roleId: number)  {
  
  const user: User = new User();

  user.username = createUserDto.username; 
  user.roles= createUserDto.roles;

  return this.userRepository.save(user);
}


async findAll(): Promise<User[]> {
  return this.userRepository.find({ relations: ['roles'] });
}

/* async findById(id: number): Promise<User | undefined> {
  return this.userRepository.findOne(id, { relations: ['roles'] });
}
 */




//



  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
/* 
  findAll() {
    return `This action returns all user`;
  } */

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
