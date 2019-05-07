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
            resolve(payload: any): {
                host: string;
                risk: boolean;
            }[];
            subscribe: (_: any, __: any, { injector }: ModuleContext<{
                [key: string]: any;
            }>) => AsyncIterator<{}>;
        };
    };
};
export default _default;
