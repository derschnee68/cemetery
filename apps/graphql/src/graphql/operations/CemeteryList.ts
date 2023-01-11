import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Cemetery from '../../database/entities/Cemetery';

@Injectable()
@Resolver()
export default class CemeteryList {
  constructor(private readonly em: EntityManager) {}

  @Query(() => [Cemetery], { description: 'List all cemeteries' })
  cemeteryList() {
    return this.em.find(Cemetery, { archived: false });
  }
}
