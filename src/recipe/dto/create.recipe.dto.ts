import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, ValidateNested, IsString, IsArray, IsIn } from 'class-validator';

import { Difficulty } from 'ingredient/enums/dificulty.enum';
import { RecipeCategory } from 'ingredient/enums/category.enum';

export class CreateRecipeNestedComponentDto {
  @IsNotEmpty()
  @IsString()
  quantity: string;

  @IsNotEmpty()
  @IsNumber()
  id: number;
}

export class CreateRecipeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  imgUrl: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  instruction: string[];

  @IsNotEmpty()
  @IsString()
  prepTime: string;

  @IsNotEmpty()
  @IsIn([
    Difficulty.EASY,
    Difficulty.MEDIUM,
    Difficulty.HARD
  ])
  difficulty: Difficulty;

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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecipeNestedComponentDto)
  recipeIngredientsArr: CreateRecipeNestedComponentDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecipeNestedComponentDto)
  recipeNutritionsArr: CreateRecipeNestedComponentDto[];
}
