/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncMetroSts = /* GraphQL */ `
  query SyncMetroSts(
    $filter: ModelMetroStFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMetroSts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Vijaynagar
        Attiguppe
        Jalahalli
        Jayanagar
        Banashankari
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getMetroSt = /* GraphQL */ `
  query GetMetroSt($id: ID!) {
    getMetroSt(id: $id) {
      id
      Vijaynagar
      Attiguppe
      Jalahalli
      Jayanagar
      Banashankari
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMetroSts = /* GraphQL */ `
  query ListMetroSts(
    $filter: ModelMetroStFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMetroSts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Vijaynagar
        Attiguppe
        Jalahalli
        Jayanagar
        Banashankari
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
