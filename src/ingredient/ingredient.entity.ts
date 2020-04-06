import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

import { Category } from './enums/category.enum';

@Entity()
export class Ingredient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imgUrl: string;

  @Column()
  category: Category
}
