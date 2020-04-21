import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, ValidateNested, IsString, IsArray, IsIn } from 'class-validator';

import { Difficulty } from 'ingredient/enums/dificulty.enum';

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
  @IsIn([
    Difficulty.EASY,
    Difficulty.MEDIUM,
    Difficulty.HARD
  ])
  difficulty: Difficulty;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecipeNestedComponentDto)
  recipeIngredientsArr: CreateRecipeNestedComponentDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecipeNestedComponentDto)
  recipeNutritionsArr: CreateRecipeNestedComponentDto[];
}
