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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecipeIngredients)
  recipeIngrArr: CreateRecipeIngredients[];
}
