import { Injectable } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Cemetery from '../../database/entities/Cemetery';

@Injectable()
@Resolver()
export default class CemeteryArchive {
  constructor(private readonly em: EntityManager) {}

  @Mutation(() => Boolean, { description: 'Archive a cemetery' })
  async cemeteryArchive(
    @Args('id', { type: () => ID, description: 'The cemetery ID' }) id: string,
  ) {
    const cemetery = await this.em.findOneOrFail(Cemetery, { id });
    cemetery.archived = true;

    await this.em.flush();
    return true;
  }
}
