import { Injectable } from '@nestjs/common';
import { Args, ArgsType, Field, Mutation, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Deceased from '../../database/entities/Deceased';

@ArgsType()
export class DeceasedCreateArgs {
  @Field(() => String, {
    description: 'The first name of the deceased person',
  })
  firstName!: string;
  @Field(() => String, {
    description: 'The last name of the deceased person',
  })
  lastName!: string;
}

@Injectable()
@Resolver()
export default class DeceasedCreate {
  constructor(private readonly em: EntityManager) {}

  @Mutation(() => Deceased, { description: 'Create a new deceased person' })
  async deceasedCreate(@Args() args: DeceasedCreateArgs) {
    const deceased = this.em.create(Deceased, {
      firstName: args.firstName,
      lastName: args.lastName,
    });

    await this.em.flush();
    return deceased;
  }
}
