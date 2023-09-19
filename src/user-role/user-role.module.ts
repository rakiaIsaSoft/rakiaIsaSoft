import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleController } from './user-role.controller';
import { UserRole } from './entities/user-role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module'; // Import UserModule
import { RoleModule } from 'src/role/role.module'; // Import RoleModule
import { User } from 'src/user/entities/user.entity';
import { Role } from 'src/role/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRole]), // Register the UserRole entity
    TypeOrmModule.forFeature([User]), // Import and use UserModule
    TypeOrmModule.forFeature([Role]), // Import and use RoleModule
  ],
  controllers: [UserRoleController], // Include the controller
  providers: [UserRoleService], // Include the service
})
export class UserRoleModule {}
