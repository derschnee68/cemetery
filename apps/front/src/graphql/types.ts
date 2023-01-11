export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

/** The result of the ActivateAccount mutation. */
export type ActivateAccountResult = InvalidTokenProblem | Success;

/** A cemetery managed by the city */
export type Cemetery = {
  __typename?: 'Cemetery';
  /** The cemetery address */
  address: Scalars['String'];
  /** The cemetery is archived */
  archived: Scalars['Boolean'];
  /** Graves belonging to given cemetery */
  graves: Array<Grave>;
  /** The cemetery ID */
  id: Scalars['ID'];
  /** The cemetery name */
  name: Scalars['String'];
};

/** A deceased person */
export type Deceased = {
  __typename?: 'Deceased';
  /** The deceased person is archived */
  archived: Scalars['Boolean'];
  /** The date the deceased person has been created */
  createdAt: Scalars['DateTime'];
  /** The deceased person first name */
  firstName: Scalars['String'];
  /** Grave belonging to given deceased person */
  grave?: Maybe<Grave>;
  /** The deceased person ID */
  id: Scalars['ID'];
  /** The deceased person last name */
  lastName: Scalars['String'];
  /** Plots belonging to given deceased person */
  plots: Array<Plot>;
  /** The last date the deceased person has been updated */
  updatedAt: Scalars['DateTime'];
};

/** This email already exists. */
export type DuplicateEmailProblem = {
  __typename?: 'DuplicateEmailProblem';
  /** static: This email already exists. */
  message: Scalars['String'];
};

/** A grave on a cemetery */
export type Grave = {
  __typename?: 'Grave';
  /** The grave is archived */
  archived: Scalars['Boolean'];
  /** Cemetery containing the given grave */
  cemetery: Cemetery;
  /** The date the grave has been created */
  createdAt: Scalars['DateTime'];
  /** Deceased persons currently in the grave */
  deceaseds: Array<Deceased>;
  /** The grave ID */
  id: Scalars['ID'];
  /** Plots associated to the given grave */
  plots: Array<Plot>;
  /** The last date the grave has been updated */
  updatedAt: Scalars['DateTime'];
};

/** The email and password combination is invalid. */
export type InvalidCredentialsProblem = {
  __typename?: 'InvalidCredentialsProblem';
  /** static: The email and password combination is invalid. */
  message: Scalars['String'];
};

/** This token is invalid. */
export type InvalidTokenProblem = {
  __typename?: 'InvalidTokenProblem';
  /** static: This token is invalid. */
  message: Scalars['String'];
};

/** JWT registered claims as described in the [RFC7519](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1). */
export type JwtPayload = {
  __typename?: 'JwtPayload';
  /** The JWT audience */
  aud: Scalars['String'];
  /** When the JWT expires. */
  exp: Scalars['Int'];
  /** When the JWT was issued. */
  iat: Scalars['Int'];
  /** The JWT issuer */
  iss: Scalars['String'];
  /** The JWT ID */
  jti: Scalars['String'];
  /** When the JWT is considered as valid. */
  nbf?: Maybe<Scalars['Int']>;
  /** The JWT subject */
  sub: Scalars['String'];
};

/** The result of the Login mutation. */
export type LoginResult = InvalidCredentialsProblem | LoginSuccess | UnverifiedAccountProblem;

/** The login mutation is a success. */
export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  /** The JWT claims. They can also be obtained from the JWT payload. */
  payload: JwtPayload;
  /** The generated login JWT */
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Activate new user account after clicking on the link in the activation email. */
  activateAccount: ActivateAccountResult;
  /** Archive a cemetery */
  cemeteryArchive: Scalars['Boolean'];
  /** Create a new cemetery */
  cemeteryCreate: Cemetery;
  /** Archive a deceased person */
  deceasedArchive: Scalars['Boolean'];
  /** Create a new deceased person */
  deceasedCreate: Deceased;
  /** Request the application to send an email with link to reset the user password. */
  forgotPassword: Scalars['Boolean'];
  /** Archive a grave */
  graveArchive: Scalars['Boolean'];
  /** Create a new grave */
  graveCreate: Grave;
  /** Login in to the application with email/password credentials. */
  login: LoginResult;
  /** Archive a plot */
  plotArchive: Scalars['Boolean'];
  /** Create a new concession plot */
  plotCreate: Plot;
  /** Updates the password of a user. */
  resetPassword: ResetPasswordResult;
  /** Create new user account by providing email/password credentials. */
  sendActivationMail: Scalars['Boolean'];
  /** Create a new user account by providing email/password credentials. */
  signUp: SignUpResult;
};

export type MutationActivateAccountArgs = {
  token: Scalars['String'];
};

export type MutationCemeteryArchiveArgs = {
  id: Scalars['ID'];
};

export type MutationCemeteryCreateArgs = {
  address: Scalars['String'];
  name: Scalars['String'];
};

export type MutationDeceasedArchiveArgs = {
  id: Scalars['ID'];
};

export type MutationDeceasedCreateArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationGraveArchiveArgs = {
  id: Scalars['ID'];
};

export type MutationGraveCreateArgs = {
  cemeteryId: Scalars['ID'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationPlotArchiveArgs = {
  id: Scalars['ID'];
};

export type MutationPlotCreateArgs = {
  deceasedId: Scalars['ID'];
  end?: InputMaybe<Scalars['DateTime']>;
  graveId: Scalars['ID'];
  price?: InputMaybe<Scalars['Float']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type MutationSendActivationMailArgs = {
  email: Scalars['String'];
};

export type MutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** A cemetery concession plot */
export type Plot = {
  __typename?: 'Plot';
  /** The plot is archived */
  archived: Scalars['Boolean'];
  /** The date the plot has been created */
  createdAt: Scalars['DateTime'];
  /** Deceased person belonging to given plot */
  deceased: Deceased;
  /** The day the concession plot ends */
  end?: Maybe<Scalars['DateTime']>;
  /** Grave belonging to given plot */
  grave: Grave;
  /** The cemetery ID */
  id: Scalars['ID'];
  /** The price paid for the plot in cents */
  price?: Maybe<Scalars['Float']>;
  /** The day the concession plot starts */
  start?: Maybe<Scalars['DateTime']>;
  /** The last date the plot has been updated */
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  /** List all cemeteries */
  cemeteryList: Array<Cemetery>;
  /** List all deceased persons */
  deceasedList: Array<Deceased>;
  /** Return a user entity related to the logged in user. */
  me: User;
  /** List all concession plots */
  plotList: Array<Plot>;
};

/** The result of the ResetPassword mutation. */
export type ResetPasswordResult = InvalidTokenProblem | Success;

/** The result of the SignUp mutation. */
export type SignUpResult = DuplicateEmailProblem | Success;

/** The query or mutation is a success. */
export type Success = {
  __typename?: 'Success';
  /** Returns true. */
  success: Scalars['Boolean'];
};

/** This email is not verified. */
export type UnverifiedAccountProblem = {
  __typename?: 'UnverifiedAccountProblem';
  /** static: This email is not verified. */
  message: Scalars['String'];
};

/** A user account */
export type User = {
  __typename?: 'User';
  /** The date when the user has registered */
  createdAt: Scalars['DateTime'];
  /** The user email */
  email: Scalars['String'];
  /** The user ID */
  id: Scalars['ID'];
  /** The user password */
  password: Scalars['String'];
  /** The last date the user has been updated */
  updatedAt: Scalars['DateTime'];
  /** The date when the user has verified its email */
  verifiedAt?: Maybe<Scalars['DateTime']>;
};
