import { PartialType } from '@nestjs/mapped-types';
import { CreateTailleDto } from './create-taille.dto';

export class UpdateTailleDto extends PartialType(CreateTailleDto) {}
