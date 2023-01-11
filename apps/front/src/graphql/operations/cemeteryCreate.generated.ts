import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CemeteryCreateMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  address: Types.Scalars['String'];
}>;

export type CemeteryCreateMutation = {
  __typename?: 'Mutation';
  cemeteryCreate: { __typename?: 'Cemetery'; id: string };
};

export const CemeteryCreateDocument = gql`
  mutation CemeteryCreate($name: String!, $address: String!) {
    cemeteryCreate(name: $name, address: $address) {
      id
    }
  }
`;
export type CemeteryCreateMutationFn = Apollo.MutationFunction<CemeteryCreateMutation, CemeteryCreateMutationVariables>;

/**
 * __useCemeteryCreateMutation__
 *
 * To run a mutation, you first call `useCemeteryCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCemeteryCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cemeteryCreateMutation, { data, loading, error }] = useCemeteryCreateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCemeteryCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<CemeteryCreateMutation, CemeteryCreateMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CemeteryCreateMutation, CemeteryCreateMutationVariables>(CemeteryCreateDocument, options);
}
export type CemeteryCreateMutationHookResult = ReturnType<typeof useCemeteryCreateMutation>;
export type CemeteryCreateMutationResult = Apollo.MutationResult<CemeteryCreateMutation>;
export type CemeteryCreateMutationOptions = Apollo.BaseMutationOptions<
  CemeteryCreateMutation,
  CemeteryCreateMutationVariables
>;
