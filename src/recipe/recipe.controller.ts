import { Controller, Get, ParseIntPipe, Param, Post, UsePipes, Body, ValidationPipe, Delete } from '@nestjs/common';

import { CreateRecipeDto } from './dto/create.recipe.dto';

import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) { }

  @Get('/:id')
  getRecipeById(@Param('id', ParseIntPipe) id: number): Promise<Recipe> {
    return this.recipeService.getRecipeById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createRecipe(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return this.recipeService.createRecipe(createRecipeDto);
  }

  @Delete('/:id')
  deleteRecipe(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.recipeService.deleteRecipe(id);
  }
}
