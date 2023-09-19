import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GammeModule } from './gamme/gamme.module';
import { AnalyseModule } from './analyse/analyse.module';
//import { AuthModule } from './auth/auth.module';
import { Gamme } from './gamme/entities/gamme.entity';
import { Analyse } from './analyse/entities/analyse.entity';

import { MachineModule } from './machine/machine.module';

import { SousEnsembleModule } from './sous-ensemble/sous-ensemble.module';
import { MacroElementModule } from './macro-element/macro-element.module';
import { SousEnsemble } from './sous-ensemble/entities/sous-ensemble.entity';
import { MacroElement } from './macro-element/entities/macro-element.entity';
import { Machine } from './machine/entities/machine.entity';

import { TailleModule } from './taille/taille.module';
import { Taille } from './taille/entities/taille.entity';

import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { Role } from './role/entities/role.entity';
import { User } from './user/entities/user.entity';

import { UserRoleModule } from './user-role/user-role.module';
import { UserRole } from './user-role/entities/user-role.entity';
import { GammeAnalyseModule } from './gamme-analyse/gamme-analyse.module';
import { GammeAnalyse } from './gamme-analyse/entities/gamme-analyse.entity';
import { AnalyseElemntModule } from './analyse-elemnt/analyse-elemnt.module';
import { AnalyseElemnt } from './analyse-elemnt/entities/analyse-elemnt.entity';
import { ElemntModule } from './elemnt/elemnt.module';
import { Elemnt } from './elemnt/entities/elemnt.entity';

@Module({

  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    entities: [Gamme, Analyse,GammeAnalyse, SousEnsemble, MacroElement, Machine, Elemnt, Taille,User,Role,UserRole,AnalyseElemnt,], // ici nous ont ajouté l'entité  dans 
    database: 'textival',
    synchronize: true,
    logging: true,
  }),


  
    GammeModule,
    AnalyseModule,
    MachineModule,
    SousEnsembleModule,
    MacroElementModule,
    TailleModule,
    UserModule,
    RoleModule,
    UserRoleModule,
    GammeAnalyseModule,
    AnalyseElemntModule,
    ElemntModule,
    //AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
