import { Injectable } from '@nestjs/common';
import { Args, ArgsType, Field, Mutation, Resolver } from '@nestjs/graphql';
import { EntityManager } from '@mikro-orm/core';
import Cemetery from '../../database/entities/Cemetery';

@ArgsType()
export class CemeteryCreateArgs {
  @Field(() => String, {
    description: 'The name of the cemetery',
  })
  name!: string;
  @Field(() => String, {
    description: 'The address of the cemetery',
  })
  address!: string;
}

@Injectable()
@Resolver()
export default class CemeteryCreate {
  constructor(private readonly em: EntityManager) {}

  @Mutation(() => Cemetery, { description: 'Create a new cemetery' })
  async cemeteryCreate(@Args() args: CemeteryCreateArgs) {
    const cemetery = this.em.create(Cemetery, {
      name: args.name,
      address: args.address,
    });
    await this.em.flush();
    return cemetery;
  }
}
