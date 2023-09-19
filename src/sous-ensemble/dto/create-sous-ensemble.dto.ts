
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
  

export class CreateSousEnsembleDto {

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
  
   
  }











