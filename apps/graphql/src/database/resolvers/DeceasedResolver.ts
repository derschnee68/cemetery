import { EntityManager } from '@mikro-orm/core';
import { Resolver, Root } from '@nestjs/graphql';
import { ResolveField } from '@nestjs/graphql/dist/decorators/resolve-field.decorator';
import Grave from '../entities/Grave';
import Plot from '../entities/Plot';
import Deceased from '../entities/Deceased';

@Resolver(() => Deceased)
export default class DeceasedResolver {
  constructor(private readonly em: EntityManager) {}

  @ResolveField(() => [Plot], {
    description: 'Plots belonging to given deceased person',
  })
  async plots(@Root() deceased: Deceased) {
    await this.em.populate(deceased, ['plots'], {
      where: { plots: { archived: false } },
    });
    return deceased.plots;
  }

  @ResolveField(() => Grave, {
    nullable: true,
    description: 'Grave belonging to given deceased person',
  })
  async grave(@Root() deceased: Deceased) {
    await this.em.populate(deceased, ['grave'], {
      where: { grave: { archived: false } },
    });
    return deceased.grave;
  }
}
