/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Cabins {\n    cabinsCollection {\n      edges {\n        node {\n          id\n          name\n          description\n          cabin_imagesCollection {\n            edges {\n              node {\n                id\n                src\n                alt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.CabinsDocument,
    "\n  query Reservations($cabin_id: BigInt!) {\n    reservationsCollection(filter: { cabin_id: { eq: $cabin_id } }) {\n      edges {\n        node {\n          id\n          during\n        }\n      }\n    }\n  }\n": types.ReservationsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Cabins {\n    cabinsCollection {\n      edges {\n        node {\n          id\n          name\n          description\n          cabin_imagesCollection {\n            edges {\n              node {\n                id\n                src\n                alt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Cabins {\n    cabinsCollection {\n      edges {\n        node {\n          id\n          name\n          description\n          cabin_imagesCollection {\n            edges {\n              node {\n                id\n                src\n                alt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Reservations($cabin_id: BigInt!) {\n    reservationsCollection(filter: { cabin_id: { eq: $cabin_id } }) {\n      edges {\n        node {\n          id\n          during\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Reservations($cabin_id: BigInt!) {\n    reservationsCollection(filter: { cabin_id: { eq: $cabin_id } }) {\n      edges {\n        node {\n          id\n          during\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;