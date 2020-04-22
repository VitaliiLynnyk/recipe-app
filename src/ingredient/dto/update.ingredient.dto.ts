import { IsNotEmpty, IsIn, IsOptional } from 'class-validator';

import { IngredientCategory } from '../enums/category.enum';

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
    IngredientCategory.DAIRY,
    IngredientCategory.FRUITS,
    IngredientCategory.GRAINS,
    IngredientCategory.PROTEIN,
    IngredientCategory.VEGETABLES
  ])
  category: IngredientCategory;
}
