import { Injectable } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Plot from '../../database/entities/Plot';

@Injectable()
@Resolver()
export default class PlotArchive {
  constructor(private readonly em: EntityManager) {}

  @Mutation(() => Boolean, { description: 'Archive a plot' })
  async plotArchive(
    @Args('id', { type: () => ID, description: 'The plot ID' }) id: string,
  ) {
    const plot = await this.em.findOneOrFail(Plot, { id });
    plot.archived = true;

    await this.em.flush();
    return true;
  }
}
