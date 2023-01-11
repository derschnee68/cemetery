import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CemeteryArchiveMutationVariables = Types.Exact<{
  cemeteryId: Types.Scalars['ID'];
}>;

export type CemeteryArchiveMutation = { __typename?: 'Mutation'; cemeteryArchive: boolean };

export const CemeteryArchiveDocument = gql`
  mutation CemeteryArchive($cemeteryId: ID!) {
    cemeteryArchive(id: $cemeteryId)
  }
`;
export type CemeteryArchiveMutationFn = Apollo.MutationFunction<
  CemeteryArchiveMutation,
  CemeteryArchiveMutationVariables
>;

/**
 * __useCemeteryArchiveMutation__
 *
 * To run a mutation, you first call `useCemeteryArchiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCemeteryArchiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cemeteryArchiveMutation, { data, loading, error }] = useCemeteryArchiveMutation({
 *   variables: {
 *      cemeteryId: // value for 'cemeteryId'
 *   },
 * });
 */
export function useCemeteryArchiveMutation(
  baseOptions?: Apollo.MutationHookOptions<CemeteryArchiveMutation, CemeteryArchiveMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CemeteryArchiveMutation, CemeteryArchiveMutationVariables>(
    CemeteryArchiveDocument,
    options,
  );
}
export type CemeteryArchiveMutationHookResult = ReturnType<typeof useCemeteryArchiveMutation>;
export type CemeteryArchiveMutationResult = Apollo.MutationResult<CemeteryArchiveMutation>;
export type CemeteryArchiveMutationOptions = Apollo.BaseMutationOptions<
  CemeteryArchiveMutation,
  CemeteryArchiveMutationVariables
>;
