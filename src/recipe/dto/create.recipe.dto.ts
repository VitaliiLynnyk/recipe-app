import { IsNotEmpty, IsNumber, IsArray, ValidateNested, IsString } from 'class-validator';

export class CreateRecipeIngredients {
  quantity: string;
  recipe_id: number;
}

export class CreateRecipeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  imgUrl: string;

  recipeIngrArr: CreateRecipeIngredients[];
}
