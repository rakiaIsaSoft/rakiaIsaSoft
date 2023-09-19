
import {IsNotEmpty,IsString, MinLength, } from 'class-validator';


export class CreateTailleDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'Le code doit avoir au moins  caractères.' })
    code: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'libelle doit comporter au moins 3 caractères.' })
    libelle: string;
  

    
}
