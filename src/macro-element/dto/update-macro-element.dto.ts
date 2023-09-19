import { PartialType } from '@nestjs/mapped-types';
import { CreateMacroElementDto } from './create-macro-element.dto';

export class UpdateMacroElementDto extends PartialType(CreateMacroElementDto) {}
