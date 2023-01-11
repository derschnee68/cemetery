import { Injectable } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Deceased from '../../database/entities/Deceased';

@Injectable()
@Resolver()
export default class DeceasedArchive {
  constructor(private readonly em: EntityManager) {}

  @Mutation(() => Boolean, { description: 'Archive a deceased person' })
  async deceasedArchive(
    @Args('id', { type: () => ID, description: 'The deceased person ID' })
    id: string,
  ) {
    const deceased = await this.em.findOneOrFail(Deceased, { id });
    deceased.archived = true;

    await this.em.flush();
    return true;
  }
}
