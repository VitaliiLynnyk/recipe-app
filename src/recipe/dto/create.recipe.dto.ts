import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, ValidateNested, IsString, IsArray } from 'class-validator';

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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecipeNestedComponentDto)
  recipeIngredientsArr: CreateRecipeNestedComponentDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecipeNestedComponentDto)
  recipeNutritionsArr: CreateRecipeNestedComponentDto[];
}
