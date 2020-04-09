import { Controller, Post, UsePipes, ValidationPipe, Body, Get, Query, Put, ParseIntPipe, Param, Delete } from '@nestjs/common';

import { Ingredient } from './ingredient.entity';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create.ingredient.dto';

import { UpdateIngredientDto } from './dto/update.ingredient.dto';
import { GetFilterIngredientsDto } from './dto/get.filter.ingredient.dto';

@Controller('ingredient')
export class IngredientController {
  constructor(private ingredientService: IngredientService) { }

  @Get()
  getIngredients(@Query(ValidationPipe) getFilterIngredientsDto: GetFilterIngredientsDto): Promise<Ingredient[]> {
    return this.ingredientService.getIngredients(getFilterIngredientsDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createIngredient(@Body() createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    return this.ingredientService.createIngredient(createIngredientDto);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  updateIngredient(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateIngredientDto: UpdateIngredientDto
  ): Promise<Ingredient> {
    return this.ingredientService.updateIngredientById(id, updateIngredientDto);
  }

  @Delete('/:id')
  deleteIngredientById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.ingredientService.deleteIngredientById(id);
  }
}
