"use strict";
export const __esModule = true;
import { GraphQLServer } from "graphql-yoga";
import resolvers_1 from "./graphql/resolvers";
var server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers: resolvers_1["default"],
});
