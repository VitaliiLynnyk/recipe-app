import { Repository, EntityRepository } from 'typeorm';

import { Recipe } from './recipe.entity';
import { CreateRecipeDto } from './dto/create.recipe.dto';
import { GetFilterRecipeDto } from './dto/get.filter.recipe.dto';

import { RecipeIngredient } from 'recipe-ingredient/recipe-ingredient.entity';
import { RecipeNutrition } from 'recipe-nutrition/recipe-nutrition.entity';

import { Ingredient } from 'ingredient/ingredient.entity';
import { Nutrition } from 'nutrition/nutrition.entity';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {

  async getRecipes(getFilterRecipeDto: GetFilterRecipeDto): Promise<Recipe[]> {
    const { search, difficulty, category, prepTime } = getFilterRecipeDto;
    const query = this.createQueryBuilder('recipe')
      .leftJoinAndSelect('recipe.recipeIngredients', 'recipeIngredient')
      .leftJoinAndSelect('recipe.recipeNutritions', 'recipeNutrition')
      .leftJoinAndSelect('recipeIngredient.ingredient', 'ingredient')
      .leftJoinAndSelect('recipeNutrition.nutrition', 'nutrition');

    if (search) {
      query.andWhere('(recipe.name LIKE :search OR recipe.description LIKE :search)', { search: `%${search}%` });
    }

    if (difficulty) {
      query.andWhere('(recipe.difficulty = :difficulty)', { difficulty: `%${difficulty}%` });
    }

    if (category) {
      query.andWhere('(recipe.category = :category)', { category: `%${category}%` });
    }

    if (prepTime) {
      query.andWhere('(recipe.prepTime LIKE :prepTime)', { prepTime: `%${prepTime}%` });
    }

    const recipes = await query.getMany();
    return recipes;
  }

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const {
      name,
      imgUrl,
      description,
      instruction,
      category,
      prepTime,
      difficulty,
      recipeNutritionsArr,
      recipeIngredientsArr
    } = createRecipeDto;

    const recipe = new Recipe();
    recipe.name = name;
    recipe.description = description;
    recipe.imgUrl = imgUrl;
    recipe.difficulty = difficulty;
    recipe.category = category;
    recipe.prepTime = prepTime;
    recipe.instruction = recipe.instruction.length ? [ ...recipe.instruction, ...instruction ] : [ ...instruction ];

    const recipeIngredientsID = recipeIngredientsArr.map(item => item.id);
    const ingredients = await Ingredient.findByIds(recipeIngredientsID);

    ingredients.forEach(ingredient => {
      const recipeIngr = new RecipeIngredient();
      recipeIngr.quantity = recipeIngredientsArr.find(item => item.id === ingredient.id).quantity;
      recipeIngr.ingredient = ingredient;
      recipe.recipeIngredients = recipe.recipeIngredients ? [ ...recipe.recipeIngredients, recipeIngr ] : [ recipeIngr ];
    })

    const recipeNutritionsID = recipeNutritionsArr.map(item => item.id);
    const nutritions = await Nutrition.findByIds(recipeNutritionsID);

    nutritions.forEach(nutrition => {
      const recipeNutr = new RecipeNutrition();
      recipeNutr.quantity = recipeNutritionsArr.find(item => item.id === nutrition.id).quantity;
      recipeNutr.nutrition = nutrition;
      recipe.recipeNutritions = recipe.recipeNutritions ? [ ...recipe.recipeNutritions, recipeNutr ] : [ recipeNutr ];
    })

    await recipe.save();
    return recipe;
  }
}
