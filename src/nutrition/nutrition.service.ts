import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

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

  async getNutritionById(id: number): Promise<Nutrition> {
    const found = await this.nutritionRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Nutrition with ID ${id} not found !`);
    }

    return found;
  }
}
