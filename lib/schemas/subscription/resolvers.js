"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const pubsub = new apollo_server_express_1.PubSub();
const indicators = [
    {
        host: 't1',
        risk: false
    },
    {
        host: 't2',
        risk: true
    }
];
exports.default = {
    Query: {
        indicators() {
            return indicators;
        }
    },
    Mutation: {
        updateIndicators(_, { psm, payload }, { injector }) {
            // const pubsub = injector.get(PubSub)
            pubsub.publish('indicatorUpdated', payload);
            return payload;
        }
    },
    Subscription: {
        indicatorUpdated: {
            subscribe: () => pubsub.asyncIterator('indicatorUpdated')
        }
    }
};
//# sourceMappingURL=resolvers.js.map