
import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
  } from 'class-validator';
import { Elemnt } from 'src/elemnt/entities/elemnt.entity';

import { Gamme } from 'src/gamme/entities/gamme.entity';
  
 

export class CreateAnalyseDto {


 @IsString()

    @IsNotEmpty()
    @MinLength(2, { message: 'Le code doit avoir au moins 2 caractères.' })
    code: string;
  
    @IsString()

    @IsNotEmpty()
    @MinLength(3, { message: 'libelle doit comporter au moins 3 caractères.' })
    //@IsAlphanumeric(null, {
     // message: 'libelle n autorise pas d autres caractères que des caractères alphanumériques.',
    //})
    libelle: string;


    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'Le code doit avoir au moins  caractères.' })
    theme: string;


    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'client doit comporter au moins 3 caractères.' })
    clt: string;


    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'quantité doit avoir au moins  caractères.' })
    qt: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: '' })
    nbr: string;


    @IsNotEmpty()
    //@MinLength(2, { message: 'Le code doit avoir au moins  caractères.' })
    dateC: Date; 
  
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'commentaire doit comporter au moins 3 caractères.' })
    cmt: string;

    @IsNotEmpty()
    gammes: Gamme[];

    @IsNotEmpty()
    elements: Elemnt[];

}
