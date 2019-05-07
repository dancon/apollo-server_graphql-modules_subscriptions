import { ModuleContext } from '@graphql-modules/core';
declare const _default: {
    Query: {
        indicators(): {
            host: string;
            risk: boolean;
        }[];
    };
    Mutation: {
        updateIndicators(_: any, { psm, payload }: {
            psm: any;
            payload: any;
        }, { injector }: ModuleContext<{
            [key: string]: any;
        }>): any;
    };
    Subscription: {
        indicatorUpdated: {
            subscribe: () => AsyncIterator<{}>;
        };
    };
};
export default _default;
