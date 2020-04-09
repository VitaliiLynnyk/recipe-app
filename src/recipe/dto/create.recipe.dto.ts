import { IsNotEmpty, IsNumber, ValidateNested, IsString, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRecipeIngredients {
  @IsNotEmpty()
  @IsString()
  quantity: string;

  @IsNotEmpty()
  @IsNumber()
  recipeId: number;
}

export class CreateRecipeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  imgUrl: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecipeIngredients)
  recipeIngrArr: CreateRecipeIngredients[];
}
