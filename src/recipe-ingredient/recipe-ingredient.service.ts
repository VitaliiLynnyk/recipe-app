import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RecipeIngredientRepository } from './recipe-ingredient.repository';

@Injectable()
export class RecipeIngredientService {
  constructor(
    @InjectRepository(RecipeIngredientRepository)
    private recipeIR: RecipeIngredientRepository
  ) { }
}
