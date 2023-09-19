import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalyseElemntDto } from './create-analyse-elemnt.dto';

export class UpdateAnalyseElemntDto extends PartialType(CreateAnalyseElemntDto) {}
