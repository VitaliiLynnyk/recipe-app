import { Controller, Get, ParseIntPipe, Param, Post, UsePipes, Body, ValidationPipe, Delete, Query, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CreateRecipeDto } from './dto/create.recipe.dto';
import { GetFilterRecipeDto } from './dto/get.filter.recipe.dto';

import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';
import { UpdateRecipeDto } from './dto/update.recipe.dto';

@Controller('recipe')
@UseGuards(AuthGuard())
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

  @Put('/:id')
  @UsePipes(ValidationPipe)
  updateRecipe(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRecipeDto: UpdateRecipeDto
  ): Promise<Recipe> {
    return this.recipeService.updateRecipe(id, updateRecipeDto);
  }

  @Delete('/:id')
  deleteRecipe(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.recipeService.deleteRecipe(id);
  }
}
