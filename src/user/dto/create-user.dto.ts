import { Role } from "src/role/entities/role.entity";

export class CreateUserDto {

    username: string;
    roles: Role[]; // Tableau d'identifiants de rôles à associer à l'utilisateur.
  }

