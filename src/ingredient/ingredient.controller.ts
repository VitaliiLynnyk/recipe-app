import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';

import { Ingredient } from './ingredient.entity';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create.ingredient.dto';

@Controller('ingredient')
export class IngredientController {
  constructor(private ingredientService: IngredientService) { }

  @Post()
  @UsePipes(ValidationPipe)
  createIngredient(@Body() createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    return this.ingredientService.createIngredient(createIngredientDto);
  }
}
