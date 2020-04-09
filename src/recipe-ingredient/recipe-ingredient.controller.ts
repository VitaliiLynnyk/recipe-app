import { Controller } from '@nestjs/common';

import { RecipeIngredientService } from './recipe-ingredient.service';

@Controller('recipe-ingredient')
export class RecipeIngredientController {
  constructor(private recipeIngrService: RecipeIngredientService) { }
}
