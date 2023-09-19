import { PartialType } from '@nestjs/mapped-types';
import { CreateSousEnsembleDto } from './create-sous-ensemble.dto';

export class UpdateSousEnsembleDto extends PartialType(CreateSousEnsembleDto) {}
