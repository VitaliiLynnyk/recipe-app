import { GetFilterNutritionDto } from './dto/get.filter.nutrition.dto';
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

  async getNutritions(getFilterNutritionDto: GetFilterNutritionDto): Promise<Nutrition[]> {
    const { search } = getFilterNutritionDto;

    const query = this.createQueryBuilder('nutrition');

    if (search) {
      query.andWhere('(nutrition.name LIKE :search OR nutrition.description LIKE :search)', { search: `%${search}%` });
    }

    const nutritions = await query.getMany();
    return nutritions;
  }
}