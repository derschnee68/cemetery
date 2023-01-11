import { Injectable } from '@nestjs/common';
import { Args, ArgsType, Field, ID, Mutation, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Grave from '../../database/entities/Grave';
import Plot from '../../database/entities/Plot';
import Deceased from '../../database/entities/Deceased';

@ArgsType()
export class PlotCreateArgs {
  @Field(() => ID, {
    description: 'The grave id in which the plot belongs to',
  })
  graveId!: string;

  @Field(() => ID, {
    description: 'The deceased person id attached to the plot',
  })
  deceasedId!: string;

  @Field(() => Date, {
    nullable: true,
    description: 'The day the concession plot starts',
  })
  start: Date | null = null;

  @Field(() => Date, {
    nullable: true,
    description: 'The day the concession plot ends',
  })
  end: Date | null = null;

  @Field(() => Number, {
    nullable: true,
    description: 'The price paid for the plot in cents',
  })
  price: number | null = null;
}

@Injectable()
@Resolver()
export default class PlotCreate {
  constructor(private readonly em: EntityManager) {}

  @Mutation(() => Plot, { description: 'Create a new concession plot' })
  async plotCreate(@Args() args: PlotCreateArgs) {
    const plot = this.em.create(Plot, {
      grave: this.em.getReference(Grave, args.graveId),
      deceased: this.em.getReference(Deceased, args.deceasedId),
      start: args.start,
      end: args.end,
      price: args.price,
    });

    await this.em.flush();
    return plot;
  }
}
