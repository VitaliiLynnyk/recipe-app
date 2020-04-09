import { IsOptional, IsNotEmpty } from 'class-validator';

import { Category } from 'ingredient/enums/category.enum';

export class GetFilterIngredientsDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsNotEmpty()
  category: Category;
}