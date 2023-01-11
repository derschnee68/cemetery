import { EntityManager } from '@mikro-orm/core';
import { Resolver, Root } from '@nestjs/graphql';
import { ResolveField } from '@nestjs/graphql/dist/decorators/resolve-field.decorator';
import Cemetery from '../entities/Cemetery';
import Grave from '../entities/Grave';

@Resolver(() => Cemetery)
export default class CemeteryResolver {
  constructor(private readonly em: EntityManager) {}

  @ResolveField(() => [Grave], {
    description: 'Graves belonging to given cemetery',
  })
  async graves(@Root() cemetery: Cemetery) {
    await this.em.populate(cemetery, ['graves'], {
      where: { graves: { archived: false } },
    });
    return cemetery.graves;
  }
}
