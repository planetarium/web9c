export type GraphQLBody<T> = {
  query: string;
  variables: T;
};
