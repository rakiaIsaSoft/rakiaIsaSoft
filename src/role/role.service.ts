import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';



@Injectable()
export class RoleService {

  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find({ relations: ['users'] });
  }

  /* async findById(id: number): Promise<Role | undefined> {
    return this.roleRepository.findOne(id, { relations: ['users'] });
  }
 */
  create(createRoleDto: CreateRoleDto): Promise<Role> {
   
    const role:Role = new Role();
    role.name = createRoleDto.name;
    role.users =createRoleDto.users;

    return this.roleRepository.save(role);
  }

/*   findAll() {
    return `This action returns all role`;
  } */

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
