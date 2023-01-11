import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import type { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo';
import GraphQLConfig from './graphql/GraphQLConfig';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from './database/mikro-orm.config';
import ForgotPassword from './graphql/operations/ForgotPassword';
import SignUp from './graphql/operations/SignUp';
import Login from './graphql/operations/Login';
import ResetPassword from './graphql/operations/ResetPassword';
import AuthModule from './auth/AuthModule';
import ConfigModule from './config/ConfigModule';
import { MailConfig } from './mail/MailConfig';
import { MailerModule } from '@nestjs-modules/mailer';
import Me from './graphql/operations/Me';
import SendActivationMail from './graphql/operations/SendActivationMail';
import ActivateAccount from './graphql/operations/ActivateAccount';
import GraveCreate from './graphql/operations/GraveCreate';
import CemeteryList from './graphql/operations/CemeteryList';
import CemeteryCreate from './graphql/operations/CemeteryCreate';
import CemeteryResolver from './database/resolvers/CemeteryResolver';
import GraveResolver from './database/resolvers/GraveResolver';
import PlotResolver from './database/resolvers/PlotResolver';
import DeceasedResolver from './database/resolvers/DeceasedResolver';
import CemeteryArchive from './graphql/operations/CemeteryArchive';
import GraveArchive from './graphql/operations/GraveArchive';
import PlotCreate from './graphql/operations/PlotCreate';
import PlotArchive from './graphql/operations/PlotArchive';
import DeceasedCreate from './graphql/operations/DeceasedCreate';
import DeceasedArchive from './graphql/operations/DeceasedArchive';
import DeceasedList from './graphql/operations/DeceasedList';
import PlotList from './graphql/operations/PlotList';

@Module({
  imports: [
    ConfigModule,
    MikroOrmModule.forRootAsync({ useFactory: () => config }),
    AuthModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphQLConfig,
    }),
    MailerModule.forRootAsync({
      useClass: MailConfig,
    }),
  ],
  controllers: [],
  providers: [
    // Queries
    Me,
    CemeteryList,
    DeceasedList,
    PlotList,
    // Mutations
    CemeteryCreate,
    CemeteryArchive,

    GraveCreate,
    GraveArchive,

    PlotCreate,
    PlotArchive,

    DeceasedCreate,
    DeceasedArchive,
    // Auth
    Login,
    SignUp,
    ForgotPassword,
    ResetPassword,
    SendActivationMail,
    ActivateAccount,

    // Resolvers
    CemeteryResolver,
    GraveResolver,
    PlotResolver,
    DeceasedResolver,
  ],
})
export class AppModule {}
