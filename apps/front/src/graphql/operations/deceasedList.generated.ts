import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DeceasedListQueryVariables = Types.Exact<{ [key: string]: never }>;

export type DeceasedListQuery = {
  __typename?: 'Query';
  deceasedList: Array<{ __typename?: 'Deceased'; id: string; firstName: string; lastName: string }>;
};

export const DeceasedListDocument = gql`
  query DeceasedList {
    deceasedList {
      id
      firstName
      lastName
    }
  }
`;

/**
 * __useDeceasedListQuery__
 *
 * To run a query within a React component, call `useDeceasedListQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeceasedListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeceasedListQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeceasedListQuery(
  baseOptions?: Apollo.QueryHookOptions<DeceasedListQuery, DeceasedListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DeceasedListQuery, DeceasedListQueryVariables>(DeceasedListDocument, options);
}
export function useDeceasedListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DeceasedListQuery, DeceasedListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DeceasedListQuery, DeceasedListQueryVariables>(DeceasedListDocument, options);
}
export type DeceasedListQueryHookResult = ReturnType<typeof useDeceasedListQuery>;
export type DeceasedListLazyQueryHookResult = ReturnType<typeof useDeceasedListLazyQuery>;
export type DeceasedListQueryResult = Apollo.QueryResult<DeceasedListQuery, DeceasedListQueryVariables>;
