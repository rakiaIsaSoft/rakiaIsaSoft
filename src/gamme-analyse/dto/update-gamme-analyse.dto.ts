import { PartialType } from '@nestjs/mapped-types';
import { CreateGammeAnalyseDto } from './create-gamme-analyse.dto';

export class UpdateGammeAnalyseDto extends PartialType(CreateGammeAnalyseDto) {}
