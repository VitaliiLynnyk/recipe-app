import { IsOptional, IsNotEmpty, IsIn } from 'class-validator';

import { Difficulty } from 'ingredient/enums/dificulty.enum';

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
}
