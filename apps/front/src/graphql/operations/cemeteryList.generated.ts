import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CemeteryListQueryVariables = Types.Exact<{ [key: string]: never }>;

export type CemeteryListQuery = {
  __typename?: 'Query';
  cemeteryList: Array<{ __typename?: 'Cemetery'; id: string; name: string; address: string }>;
};

export const CemeteryListDocument = gql`
  query CemeteryList {
    cemeteryList {
      id
      name
      address
    }
  }
`;

/**
 * __useCemeteryListQuery__
 *
 * To run a query within a React component, call `useCemeteryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCemeteryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCemeteryListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCemeteryListQuery(
  baseOptions?: Apollo.QueryHookOptions<CemeteryListQuery, CemeteryListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CemeteryListQuery, CemeteryListQueryVariables>(CemeteryListDocument, options);
}
export function useCemeteryListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CemeteryListQuery, CemeteryListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CemeteryListQuery, CemeteryListQueryVariables>(CemeteryListDocument, options);
}
export type CemeteryListQueryHookResult = ReturnType<typeof useCemeteryListQuery>;
export type CemeteryListLazyQueryHookResult = ReturnType<typeof useCemeteryListLazyQuery>;
export type CemeteryListQueryResult = Apollo.QueryResult<CemeteryListQuery, CemeteryListQueryVariables>;
