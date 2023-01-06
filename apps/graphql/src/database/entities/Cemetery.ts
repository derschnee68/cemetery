import { v4 } from 'uuid';
import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import Grave from './Grave';

@ObjectType({ description: 'A cemetery managed by the city' })
@Entity()
export default class Cemetery {
  @Field(() => ID, { description: 'The cemetery ID' })
  @PrimaryKey({ type: 'uuid' })
  id = v4();

  @Field(() => String, { description: 'The cemetery name' })
  @Property()
  name!: string;

  @Field(() => String, { description: 'The cemetery address' })
  @Property()
  address!: string;

  @Field(() => Boolean, { description: 'The cemetery is archived' })
  @Property({ columnType: 'boolean' })
  archived? = false;

  @OneToMany(() => Grave, (grave) => grave.cemetery)
  graves = new Collection<Grave, Cemetery>(this);
}
