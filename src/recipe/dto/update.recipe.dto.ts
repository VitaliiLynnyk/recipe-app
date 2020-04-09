import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateRecipeDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsNotEmpty()
  imgUrl: string;
}
