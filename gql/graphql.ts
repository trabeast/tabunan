/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: any; output: any; }
  /** A date and time */
  Datetime: { input: any; output: any; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: any; output: any; }
  /** A universally unique identifier */
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `cabin_images` collection */
  deleteFromcabin_imagesCollection: Cabin_ImagesDeleteResponse;
  /** Deletes zero or more records from the `cabins` collection */
  deleteFromcabinsCollection: CabinsDeleteResponse;
  /** Deletes zero or more records from the `reservations` collection */
  deleteFromreservationsCollection: ReservationsDeleteResponse;
  /** Adds one or more `cabin_images` records to the collection */
  insertIntocabin_imagesCollection?: Maybe<Cabin_ImagesInsertResponse>;
  /** Adds one or more `cabins` records to the collection */
  insertIntocabinsCollection?: Maybe<CabinsInsertResponse>;
  /** Adds one or more `reservations` records to the collection */
  insertIntoreservationsCollection?: Maybe<ReservationsInsertResponse>;
  /** Updates zero or more records in the `cabin_images` collection */
  updatecabin_imagesCollection: Cabin_ImagesUpdateResponse;
  /** Updates zero or more records in the `cabins` collection */
  updatecabinsCollection: CabinsUpdateResponse;
  /** Updates zero or more records in the `reservations` collection */
  updatereservationsCollection: ReservationsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcabin_ImagesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Cabin_ImagesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcabinsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CabinsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromreservationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ReservationsFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocabin_ImagesCollectionArgs = {
  objects: Array<Cabin_ImagesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocabinsCollectionArgs = {
  objects: Array<CabinsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoreservationsCollectionArgs = {
  objects: Array<ReservationsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatecabin_ImagesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Cabin_ImagesFilter>;
  set: Cabin_ImagesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecabinsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CabinsFilter>;
  set: CabinsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatereservationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ReservationsFilter>;
  set: ReservationsUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `cabin_images` */
  cabin_imagesCollection?: Maybe<Cabin_ImagesConnection>;
  /** A pagable collection of type `cabins` */
  cabinsCollection?: Maybe<CabinsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `reservations` */
  reservationsCollection?: Maybe<ReservationsConnection>;
};


/** The root type for querying data */
export type QueryCabin_ImagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Cabin_ImagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Cabin_ImagesOrderBy>>;
};


/** The root type for querying data */
export type QueryCabinsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CabinsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CabinsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryReservationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ReservationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReservationsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type Cabin_Images = Node & {
  __typename?: 'cabin_images';
  alt?: Maybe<Scalars['String']['output']>;
  cabin_id: Scalars['BigInt']['output'];
  cabins: Cabins;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  src: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
};

export type Cabin_ImagesConnection = {
  __typename?: 'cabin_imagesConnection';
  edges: Array<Cabin_ImagesEdge>;
  pageInfo: PageInfo;
};

export type Cabin_ImagesDeleteResponse = {
  __typename?: 'cabin_imagesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cabin_Images>;
};

export type Cabin_ImagesEdge = {
  __typename?: 'cabin_imagesEdge';
  cursor: Scalars['String']['output'];
  node: Cabin_Images;
};

export type Cabin_ImagesFilter = {
  alt?: InputMaybe<StringFilter>;
  cabin_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  src?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Cabin_ImagesInsertInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  cabin_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Cabin_ImagesInsertResponse = {
  __typename?: 'cabin_imagesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cabin_Images>;
};

export type Cabin_ImagesOrderBy = {
  alt?: InputMaybe<OrderByDirection>;
  cabin_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  src?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Cabin_ImagesUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  cabin_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Cabin_ImagesUpdateResponse = {
  __typename?: 'cabin_imagesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cabin_Images>;
};

export type Cabins = Node & {
  __typename?: 'cabins';
  cabin_imagesCollection?: Maybe<Cabin_ImagesConnection>;
  created_at: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  reservationsCollection?: Maybe<ReservationsConnection>;
  updated_at: Scalars['Datetime']['output'];
};


export type CabinsCabin_ImagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Cabin_ImagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Cabin_ImagesOrderBy>>;
};


export type CabinsReservationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ReservationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReservationsOrderBy>>;
};

export type CabinsConnection = {
  __typename?: 'cabinsConnection';
  edges: Array<CabinsEdge>;
  pageInfo: PageInfo;
};

export type CabinsDeleteResponse = {
  __typename?: 'cabinsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cabins>;
};

export type CabinsEdge = {
  __typename?: 'cabinsEdge';
  cursor: Scalars['String']['output'];
  node: Cabins;
};

export type CabinsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type CabinsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CabinsInsertResponse = {
  __typename?: 'cabinsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cabins>;
};

export type CabinsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type CabinsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CabinsUpdateResponse = {
  __typename?: 'cabinsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cabins>;
};

export type Reservations = Node & {
  __typename?: 'reservations';
  cabin_id: Scalars['BigInt']['output'];
  cabins: Cabins;
  created_at: Scalars['Datetime']['output'];
  during: Scalars['Opaque']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at: Scalars['Datetime']['output'];
};

export type ReservationsConnection = {
  __typename?: 'reservationsConnection';
  edges: Array<ReservationsEdge>;
  pageInfo: PageInfo;
};

export type ReservationsDeleteResponse = {
  __typename?: 'reservationsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reservations>;
};

export type ReservationsEdge = {
  __typename?: 'reservationsEdge';
  cursor: Scalars['String']['output'];
  node: Reservations;
};

export type ReservationsFilter = {
  cabin_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  during?: InputMaybe<OpaqueFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type ReservationsInsertInput = {
  cabin_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  during?: InputMaybe<Scalars['Opaque']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ReservationsInsertResponse = {
  __typename?: 'reservationsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reservations>;
};

export type ReservationsOrderBy = {
  cabin_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  during?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type ReservationsUpdateInput = {
  cabin_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  during?: InputMaybe<Scalars['Opaque']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ReservationsUpdateResponse = {
  __typename?: 'reservationsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reservations>;
};

export type CabinsQueryVariables = Exact<{ [key: string]: never; }>;


export type CabinsQuery = { __typename?: 'Query', cabinsCollection?: { __typename?: 'cabinsConnection', edges: Array<{ __typename?: 'cabinsEdge', node: { __typename?: 'cabins', id: any, name: string, description: string, cabin_imagesCollection?: { __typename?: 'cabin_imagesConnection', edges: Array<{ __typename?: 'cabin_imagesEdge', node: { __typename?: 'cabin_images', id: any, src: string, alt?: string | null } }> } | null } }> } | null };


export const CabinsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Cabins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cabinsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cabin_imagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CabinsQuery, CabinsQueryVariables>;