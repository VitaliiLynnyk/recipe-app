import { IsNotEmpty, IsIn, IsOptional } from 'class-validator';

import { Category } from '../enums/category.enum';

export class UpdateIngredientDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  imgUrl: string;

  @IsOptional()
  @IsNotEmpty()
  @IsIn([
    Category.DAIRY,
    Category.FRUITS,
    Category.GRAINS,
    Category.PROTEIN,
    Category.VEGETABLES
  ])
  category: Category;
}
