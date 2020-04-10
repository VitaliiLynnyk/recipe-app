import { EntityRepository, Repository } from 'typeorm';

import { Nutrition } from './nutrition.entity';
import { CreateNutritionDto } from './dto/create.nutrition.dto';

@EntityRepository(Nutrition)
export class NutritionRepository extends Repository<Nutrition> {

  async createNutrition(createNutritionDto: CreateNutritionDto): Promise<Nutrition> {
    const { name, description } = createNutritionDto;

    const nutrition = new Nutrition();
    nutrition.name = name;
    nutrition.description = description;

    await nutrition.save();
    return nutrition;
  }
}