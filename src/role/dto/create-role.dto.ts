import { User } from "src/user/entities/user.entity";

export class CreateRoleDto {

    name: string;
    users: User[];
}
