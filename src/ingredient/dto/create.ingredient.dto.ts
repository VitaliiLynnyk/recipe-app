import { IsNotEmpty, IsIn } from 'class-validator';

import { Category } from '../enums/category.enum';

export class CreateIngredientDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  imgUrl: string;

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
