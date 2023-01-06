import { Injectable } from '@nestjs/common';
import { Args, ArgsType, Field, ID, Mutation, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Grave from '../../database/entities/Grave';
import Cemetery from '../../database/entities/Cemetery';

@ArgsType()
export class CreateGraveArgs {
  @Field(() => ID, {
    description: 'The cemetery id in which the grave belongs to',
  })
  cemeteryId!: string;
}

@Injectable()
@Resolver()
export default class GraveCreate {
  constructor(private readonly em: EntityManager) {}

  @Mutation(() => Grave, { description: 'Create a new grave' })
  async graveCreate(@Args() args: CreateGraveArgs) {
    const grave = this.em.create(Grave, {
      cemetery: this.em.getReference(Cemetery, args.cemeteryId),
    });

    await this.em.flush();
    return grave;
  }
}
