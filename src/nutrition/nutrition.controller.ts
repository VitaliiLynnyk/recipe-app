import { Controller, Post, UsePipes, ValidationPipe, Body, Get, Param, ParseIntPipe, Query } from '@nestjs/common';

import { Nutrition } from './nutrition.entity';
import { NutritionService } from './nutrition.service';
import { CreateNutritionDto } from './dto/create.nutrition.dto';
import { GetFilterNutritionDto } from './dto/get.filter.nutrition.dto';

@Controller('nutrition')
export class NutritionController {
  constructor(private nutritionService: NutritionService) { }

  @Get()
  getNutritions(@Query(ValidationPipe) getFilterNutritionDto: GetFilterNutritionDto): Promise<Nutrition[]> {
    return this.nutritionService.getNutritions(getFilterNutritionDto);
  }

  @Get('/:id')
  getNutritionById(@Param('id', ParseIntPipe) id: number): Promise<Nutrition> {
    return this.nutritionService.getNutritionById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createRecipe(@Body() createNutritioneDto: CreateNutritionDto): Promise<Nutrition> {
    return this.nutritionService.createNutrition(createNutritioneDto);
  }
}
