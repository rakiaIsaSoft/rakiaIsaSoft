import { PartialType } from '@nestjs/mapped-types';
import { CreateElemntDto } from './create-elemnt.dto';

export class UpdateElemntDto extends PartialType(CreateElemntDto) {}
