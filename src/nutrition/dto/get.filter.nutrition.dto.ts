import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetFilterNutritionDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}