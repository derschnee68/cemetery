import { v4 } from 'uuid';
import {
  Entity,
  ManyToOne,
  OptionalProps,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import Grave from './Grave';
import Deceased from './Deceased';

@ObjectType({ description: 'A cemetery concession plot' })
@Entity()
export default class Plot {
  [OptionalProps]?: 'createdAt' | 'updatedAt';

  @Field(() => ID, { description: 'The cemetery ID' })
  @PrimaryKey({ type: 'uuid' })
  id = v4();

  @Field(() => Date, {
    nullable: true,
    description: 'The day the concession plot starts',
  })
  @Property({ columnType: 'datetime', nullable: true })
  start!: Date | null;

  @Field(() => Date, {
    nullable: true,
    description: 'The day the concession plot ends',
  })
  @Property({ columnType: 'datetime', nullable: true })
  end!: Date | null;

  @Field(() => Number, {
    nullable: true,
    description: 'The price paid for the plot in cents',
  })
  @Property({ nullable: true })
  price: number | null = null;

  @ManyToOne(() => Grave)
  grave!: Grave;

  @ManyToOne(() => Deceased)
  deceased!: Deceased;
  @Field(() => Boolean, { description: 'The plot is archived' })
  @Property({ columnType: 'boolean' })
  archived? = false;

  @Field(() => Date, { description: 'The date the plot has been created' })
  @Property({ columnType: 'datetime' })
  createdAt = new Date();

  @Field(() => Date, { description: 'The last date the plot has been updated' })
  @Property({ columnType: 'datetime' })
  updatedAt = new Date();
}
