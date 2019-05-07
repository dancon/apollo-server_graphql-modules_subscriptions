"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
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
            const pubsub = injector.get(apollo_server_express_1.PubSub);
            console.log('update:', psm, payload);
            pubsub.publish('indicatorUpdated', {
                indicatorUpdated: payload,
                psm
            });
            return payload;
        }
    },
    Subscription: {
        indicatorUpdated: {
            resolve(payload) {
                console.log('subscription transformation:', payload);
                // the reture type MUST be in correspondence with the definition in the schema.
                return [
                    {
                        host: '改了',
                        risk: false
                    }
                ];
            },
            subscribe: (_, __, { injector }) => injector.get(apollo_server_express_1.PubSub).asyncIterator(['indicatorUpdated'])
        }
    }
};
//# sourceMappingURL=resolvers.js.map