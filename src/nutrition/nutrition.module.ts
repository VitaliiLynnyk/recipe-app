import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NutritionService } from './nutrition.service';
import { NutritionController } from './nutrition.controller';
import { NutritionRepository } from './nutrition.repository';

@Module({
  imports: [ TypeOrmModule.forFeature([ NutritionRepository ]) ],
  controllers: [ NutritionController ],
  providers: [ NutritionService ]
})
export class NutritionModule { }
