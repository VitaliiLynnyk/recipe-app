import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';

import { Nutrition } from './nutrition.entity';
import { NutritionService } from './nutrition.service';
import { CreateNutritionDto } from './dto/create.nutrition.dto';

@Controller('nutrition')
export class NutritionController {
  constructor(private nutritionService: NutritionService) { }

  @Post()
  @UsePipes(ValidationPipe)
  createRecipe(@Body() createNutritioneDto: CreateNutritionDto): Promise<Nutrition> {
    return this.nutritionService.createNutrition(createNutritioneDto);
  }
}
