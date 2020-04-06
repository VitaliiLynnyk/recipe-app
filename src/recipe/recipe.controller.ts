import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';

import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) { }

  @Get('/:id')
  getRecipeById(@Param('id', ParseIntPipe) id: number): Promise<Recipe> {
    return this.recipeService.getRecipeById(id);
  }
}
