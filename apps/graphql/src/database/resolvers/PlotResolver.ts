import { EntityManager } from '@mikro-orm/core';
import { Resolver, Root } from '@nestjs/graphql';
import { ResolveField } from '@nestjs/graphql/dist/decorators/resolve-field.decorator';
import Grave from '../entities/Grave';
import Plot from '../entities/Plot';
import Deceased from '../entities/Deceased';

@Resolver(() => Plot)
export default class PlotResolver {
  constructor(private readonly em: EntityManager) {}

  @ResolveField(() => Grave, {
    description: 'Grave belonging to given plot',
  })
  async grave(@Root() plot: Plot) {
    await this.em.populate(plot, ['grave']);
    return plot.grave;
  }

  @ResolveField(() => Deceased, {
    description: 'Deceased person belonging to given plot',
  })
  async deceased(@Root() plot: Plot) {
    await this.em.populate(plot, ['deceased']);
    return plot.deceased;
  }
}
