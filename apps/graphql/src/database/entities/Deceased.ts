import { v4 } from 'uuid';
import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  OptionalProps,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import Grave from './Grave';
import Plot from './Plot';

@ObjectType({ description: 'A deceased person' })
@Entity()
export default class Deceased {
  [OptionalProps]?: 'createdAt' | 'updatedAt';

  @Field(() => ID, { description: 'The deceased person ID' })
  @PrimaryKey({ type: 'uuid' })
  id = v4();

  @Field(() => String, { description: 'The deceased person first name' })
  @Property()
  firstName!: string;

  @Field(() => String, { description: 'The deceased person last name' })
  @Property()
  lastName!: string;

  @ManyToOne(() => Grave, { nullable: true })
  grave!: Grave | null;

  @Field(() => Boolean, { description: 'The deceased person is archived' })
  @Property({ columnType: 'boolean' })
  archived? = false;

  @Field(() => Date, {
    description: 'The date the deceased person has been created',
  })
  @Property({ columnType: 'datetime' })
  createdAt = new Date();

  @Field(() => Date, {
    description: 'The last date the deceased person has been updated',
  })
  @Property({ columnType: 'datetime' })
  updatedAt = new Date();

  @OneToMany(() => Plot, (plot) => plot.deceased)
  plots = new Collection<Plot, Deceased>(this);
}
