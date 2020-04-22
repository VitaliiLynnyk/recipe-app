import { IsOptional, IsNotEmpty, IsIn } from 'class-validator';

import { Difficulty } from 'ingredient/enums/dificulty.enum';
import { RecipeCategory } from 'ingredient/enums/category.enum';

export class GetFilterRecipeDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsNotEmpty()
  @IsIn([
    Difficulty.EASY,
    Difficulty.MEDIUM,
    Difficulty.HARD
  ])
  difficulty: Difficulty;

  @IsOptional()
  @IsNotEmpty()
  @IsIn([
    RecipeCategory.APPETIZERS,
    RecipeCategory.BEVERAGES,
    RecipeCategory.BREADS,
    RecipeCategory.BREAKFAST,
    RecipeCategory.DESSERTS,
    RecipeCategory.MAINDISHES,
    RecipeCategory.SALADS,
    RecipeCategory.SANDWICHES,
    RecipeCategory.SNACKS,
    RecipeCategory.SOUPS,
  ])
  category: RecipeCategory;
}
