import { Injectable } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Grave from '../../database/entities/Grave';

@Injectable()
@Resolver()
export default class GraveArchive {
  constructor(private readonly em: EntityManager) {}

  @Mutation(() => Boolean, { description: 'Archive a grave' })
  async graveArchive(
    @Args('id', { type: () => ID, description: 'The grave ID' }) id: string,
  ) {
    const grave = await this.em.findOneOrFail(Grave, { id });
    grave.archived = true;

    await this.em.flush();
    return true;
  }
}
