"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { ApolloServer } from 'apollo-server-koa'
const core_1 = require("@graphql-modules/core");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const http_1 = require("http");
const graphqlModules = __importStar(require("./schemas"));
const gmodules = [];
Object.keys(graphqlModules).forEach((key) => {
    gmodules.push(graphqlModules[key]);
});
const { schema, context, subscriptions } = new core_1.GraphQLModule({
    imports: gmodules
});
const server = new apollo_server_express_1.ApolloServer({
    schema,
    context,
    subscriptions
});
// const app: any = new Koa()
const app = express_1.default();
server.applyMiddleware({ app });
const httpServer = http_1.createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    console.log(`🚀 Subsciription ready at ws://localhost:4000${server.subscriptionsPath}`);
});
//# sourceMappingURL=index.js.map