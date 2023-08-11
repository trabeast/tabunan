import {
  Cabin_Images,
  Cabin_ImagesConnection,
  Cabin_ImagesEdge,
  Cabins,
  CabinsConnection,
  CabinsEdge,
  Reservations,
  ReservationsConnection,
  ReservationsEdge,
} from '@/lib/queries/gql/graphql';

type ReplaceType<Type, ReplacedKey> = Omit<Type, keyof ReplacedKey> &
  ReplacedKey;
type NodeFieldType<NodeType, NodeKeys extends keyof NodeType> = {
  node: Pick<NodeType, NodeKeys>;
};
type EdgesFieldType<
  EdgeType,
  EdgeKeys extends keyof EdgeType,
  NodeType,
  NodeKeys extends keyof NodeType,
> = {
  edges: ReplaceType<
    Pick<EdgeType, EdgeKeys>,
    NodeFieldType<NodeType, NodeKeys>
  >[];
};
type PartialConnectionType<
  ConnectionType extends { edges: EdgeType[] },
  EdgeType extends { node: NodeType },
  NodeType,
  NodeKeys extends keyof NodeType,
> = ReplaceType<
  Pick<ConnectionType, 'edges'>,
  EdgesFieldType<EdgeType, 'node', NodeType, NodeKeys>
>;
export type PartialCabinImagesConnection = PartialConnectionType<
  Cabin_ImagesConnection,
  Cabin_ImagesEdge,
  Cabin_Images,
  'id' | 'src' | 'alt'
>;
export type PartialReservationsConnection = PartialConnectionType<
  ReservationsConnection,
  ReservationsEdge,
  Reservations,
  'id' | 'during'
>;
export type PartialCabinsConnection = PartialConnectionType<
  CabinsConnection,
  CabinsEdge,
  ReplaceType<
    Cabins,
    {
      cabin_imagesCollection?: PartialCabinImagesConnection | null;
      reservationsCollection?: PartialReservationsConnection | null;
    }
  >,
  | 'id'
  | 'name'
  | 'description'
  | 'cabin_imagesCollection'
  | 'reservationsCollection'
>;
