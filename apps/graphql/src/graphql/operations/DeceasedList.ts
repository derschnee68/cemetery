import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Deceased from '../../database/entities/Deceased';

@Injectable()
@Resolver()
export default class DeceasedList {
  constructor(private readonly em: EntityManager) {}

  @Query(() => [Deceased], { description: 'List all deceased persons' })
  deceasedList() {
    return this.em.find(Deceased, { archived: false });
  }
}
