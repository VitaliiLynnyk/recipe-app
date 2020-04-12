import { IsNotEmpty, IsString, IsArray, IsOptional } from 'class-validator';

export class UpdateRecipeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  imgUrl: string;

  @IsOptional()
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  instruction: string[];
}
