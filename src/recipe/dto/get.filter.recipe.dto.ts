import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetFilterRecipeDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;
}