
import {
    IsAlphanumeric,
    IsDate,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
  } from 'class-validator';
import { Analyse } from 'src/analyse/entities/analyse.entity';
  
  /* const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/; */
  
export class CreateGammeDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'Le code doit avoir au moins  caractères.' })
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


    @IsDate()
    @IsNotEmpty()
    dateC: Date; 
  
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'commentaire doit comporter au moins 3 caractères.' })
    cmt: string;


    @IsNotEmpty()
    analyses: Analyse[];
    //analyseId: number[]; 

    //@IsNotEmpty()
    //@IsEmail(null, { message: 'Please provide valid Email.' })
    //email: string;
  
   // @IsInt()
    //age: number;
  
   /// @IsString()
    //@IsEnum(['f', 'm', 'u'])
   // gender: string;
  
   // @IsNotEmpty()
   // @Matches(passwordRegEx, {
     // message: `Password must contain Minimum 8 and maximum 20 characters, 
     // at least one uppercase letter, 
     /// one lowercase letter, 
     // one number and 
     // one special character`,
   // })
    //password: string;




  }





