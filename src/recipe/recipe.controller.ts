import { Controller, Get, ParseIntPipe, Param, Post, UsePipes, Body, ValidationPipe, Delete, Query } from '@nestjs/common';

import { CreateRecipeDto } from './dto/create.recipe.dto';
import { GetFilterRecipeDto } from './dto/get.filter.recipe.dto';

import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) { }

  @Get()
  getRecipes(@Query(ValidationPipe) getFilterRecipeDto: GetFilterRecipeDto): Promise<Recipe[]> {
    return this.recipeService.getRecipes(getFilterRecipeDto);
  }

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
