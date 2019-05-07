"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
const core_1 = require("@graphql-modules/core");
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = __importStar(require("./schema.graphql"));
const resolvers_1 = __importDefault(require("./resolvers"));
exports.default = new core_1.GraphQLModule({
    typeDefs,
    resolvers: resolvers_1.default,
    providers: [apollo_server_express_1.PubSub]
});
//# sourceMappingURL=index.js.map