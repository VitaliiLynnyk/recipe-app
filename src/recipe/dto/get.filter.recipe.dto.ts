import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetFilterRecipeDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}