import { Module } from '@nestjs/common';
import { EasyconfigModule } from 'nestjs-easyconfig';

import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    EasyconfigModule.register({ path: './src/config/.env' }),
    RecipesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
