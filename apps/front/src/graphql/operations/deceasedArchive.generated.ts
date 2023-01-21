import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DeceasedArchiveMutationVariables = Types.Exact<{
  deceasedId: Types.Scalars['ID'];
}>;

export type DeceasedArchiveMutation = { __typename?: 'Mutation'; deceasedArchive: boolean };

export const DeceasedArchiveDocument = gql`
  mutation DeceasedArchive($deceasedId: ID!) {
    deceasedArchive(id: $deceasedId)
  }
`;
export type DeceasedArchiveMutationFn = Apollo.MutationFunction<
  DeceasedArchiveMutation,
  DeceasedArchiveMutationVariables
>;

/**
 * __useDeceasedArchiveMutation__
 *
 * To run a mutation, you first call `useDeceasedArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeceasedArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deceasedArchiveMutation, { data, loading, error }] = useDeceasedArchiveMutation({
 *   variables: {
 *      deceasedId: // value for 'deceasedId'
 *   },
 * });
 */
export function useDeceasedArchiveMutation(
  baseOptions?: Apollo.MutationHookOptions<DeceasedArchiveMutation, DeceasedArchiveMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeceasedArchiveMutation, DeceasedArchiveMutationVariables>(
    DeceasedArchiveDocument,
    options,
  );
}
export type DeceasedArchiveMutationHookResult = ReturnType<typeof useDeceasedArchiveMutation>;
export type DeceasedArchiveMutationResult = Apollo.MutationResult<DeceasedArchiveMutation>;
export type DeceasedArchiveMutationOptions = Apollo.BaseMutationOptions<
  DeceasedArchiveMutation,
  DeceasedArchiveMutationVariables
>;
