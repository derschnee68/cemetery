import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Plot from '../../database/entities/Plot';

@Injectable()
@Resolver()
export default class PlotList {
  constructor(private readonly em: EntityManager) {}

  @Query(() => [Plot], { description: 'List all concession plots' })
  plotList() {
    return this.em.find(Plot, { archived: false });
  }
}
