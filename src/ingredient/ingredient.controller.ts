import { GetFilterIngredientsDto } from './dto/get.filter.ingredient.dto';
import { Controller, Post, UsePipes, ValidationPipe, Body, Get, Query } from '@nestjs/common';

import { Ingredient } from './ingredient.entity';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create.ingredient.dto';

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
}
