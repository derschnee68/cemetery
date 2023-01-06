import { EntityManager } from '@mikro-orm/core';
import { Resolver, Root } from '@nestjs/graphql';
import { ResolveField } from '@nestjs/graphql/dist/decorators/resolve-field.decorator';
import Grave from '../entities/Grave';
import Plot from '../entities/Plot';
import Deceased from '../entities/Deceased';
import Cemetery from '../entities/Cemetery';

@Resolver(() => Grave)
export default class GraveResolver {
  constructor(private readonly em: EntityManager) {}

  @ResolveField(() => [Deceased], {
    description: 'Deceased persons currently in the grave',
  })
  async deceaseds(@Root() grave: Grave) {
    await this.em.populate(grave, ['deceaseds']);
    return grave.deceaseds;
  }

  @ResolveField(() => [Plot], {
    description: 'Plots associated to the given grave',
  })
  async plots(@Root() grave: Grave) {
    await this.em.populate(grave, ['plots']);
    return grave.plots;
  }

  @ResolveField(() => Cemetery, {
    description: 'Cemetery containing the given grave',
  })
  async cemetery(@Root() grave: Grave) {
    await this.em.populate(grave, ['cemetery']);
    return grave.cemetery;
  }
}
