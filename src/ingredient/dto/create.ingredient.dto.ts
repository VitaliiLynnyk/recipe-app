import { IsNotEmpty, IsIn } from 'class-validator';

import { IngredientCategory } from '../enums/category.enum';

export class CreateIngredientDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  imgUrl: string;

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
