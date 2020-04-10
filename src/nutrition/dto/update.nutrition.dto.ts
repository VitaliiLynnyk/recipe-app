import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateNutritionDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  description: string;
}
