import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRole } from './entities/user-role.entity';
import { User } from 'src/user/entities/user.entity';
import { Role } from 'src/role/entities/role.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async saveUserRole(userId: number, roleId: number): Promise<UserRole> {
    // Find the user and role by their IDs
    console.log(userId);
    
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :userId', { userId })
      .getOne();
      const role = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.id = :roleId', { roleId })
      .getOne();

    if (!user || !role) {
      throw new Error('User or role not found');
    }

    // Create a new UserRole instance and associate it with the user and role
    const userRole = new UserRole();
    userRole.user = user;
    userRole.role = role;

    return this.userRoleRepository.save(userRole);
  }
}
