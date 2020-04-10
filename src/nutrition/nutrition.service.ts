import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Nutrition } from './nutrition.entity';
import { NutritionRepository } from './nutrition.repository';
import { CreateNutritionDto } from './dto/create.nutrition.dto';

@Injectable()
export class NutritionService {
  constructor(
    @InjectRepository(NutritionRepository)
    private nutritionRepository: NutritionRepository
  ) { }

  async createNutrition(createNutritionDto: CreateNutritionDto): Promise<Nutrition> {
    return this.nutritionRepository.createNutrition(createNutritionDto);
  }
}
