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
import Cemetery from './Cemetery';
import Plot from './Plot';
import Deceased from './Deceased';

@ObjectType({ description: 'A grave on a cemetery' })
@Entity()
export default class Grave {
  [OptionalProps]?: 'createdAt' | 'updatedAt';

  @Field(() => ID, { description: 'The grave ID' })
  @PrimaryKey({ type: 'uuid' })
  id = v4();

  @ManyToOne(() => Cemetery)
  cemetery!: Cemetery;

  @Field(() => Boolean, { description: 'The grave is archived' })
  @Property({ columnType: 'boolean' })
  archived? = false;

  @Field(() => Date, {
    description: 'The date the grave has been created',
  })
  @Property({ columnType: 'datetime' })
  createdAt = new Date();

  @Field(() => Date, {
    description: 'The last date the grave has been updated',
  })
  @Property({ columnType: 'datetime' })
  updatedAt = new Date();

  @OneToMany(() => Deceased, (deceased) => deceased.grave)
  deceaseds = new Collection<Deceased, Grave>(this);

  @OneToMany(() => Plot, (plot) => plot.grave)
  plots = new Collection<Plot, Grave>(this);
}
