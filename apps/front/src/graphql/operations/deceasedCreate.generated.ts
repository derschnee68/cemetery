import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DeceasedCreateMutationVariables = Types.Exact<{
  firstName: Types.Scalars['String'];
  lastName: Types.Scalars['String'];
}>;

export type DeceasedCreateMutation = {
  __typename?: 'Mutation';
  deceasedCreate: { __typename?: 'Deceased'; id: string };
};

export const DeceasedCreateDocument = gql`
  mutation DeceasedCreate($firstName: String!, $lastName: String!) {
    deceasedCreate(firstName: $firstName, lastName: $lastName) {
      id
    }
  }
`;
export type DeceasedCreateMutationFn = Apollo.MutationFunction<DeceasedCreateMutation, DeceasedCreateMutationVariables>;

/**
 * __useDeceasedCreateMutation__
 *
 * To run a mutation, you first call `useDeceasedCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeceasedCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deceasedCreateMutation, { data, loading, error }] = useDeceasedCreateMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useDeceasedCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<DeceasedCreateMutation, DeceasedCreateMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeceasedCreateMutation, DeceasedCreateMutationVariables>(DeceasedCreateDocument, options);
}
export type DeceasedCreateMutationHookResult = ReturnType<typeof useDeceasedCreateMutation>;
export type DeceasedCreateMutationResult = Apollo.MutationResult<DeceasedCreateMutation>;
export type DeceasedCreateMutationOptions = Apollo.BaseMutationOptions<
  DeceasedCreateMutation,
  DeceasedCreateMutationVariables
>;
