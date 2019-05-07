# apollo-server_graphql-modules_subscriptions

The server side implementation of Graphql subscription with apollo-server and Graphql Modules.

> If you are using `apollo-server-koa`, checkout the `koa` branch.

## HOW TO START

- clone the repository

```bash
  git clone git@github.com:dancon/apollo-server_graphql-modules_subscriptions.git
```

- install the dependencies

```bash
  cd apollo-server_graphql-modules_subscriptions

  npm i
```

- start the project in debug mode in VSCode or just excute the command below

```bash
  npm start
```

## Demonstrate

open `http://localhost:4000/graphql` in your browser, you will see the graphql playground, and excute oprations below in different tabs.

- Subscription

```graphql
  subscription {
    indicatorUpdated (psm: "ts") {
      host
      risk
    }
  }
```

- Mutation

```graphql
  mutation {
    updateIndicators (psm: "t1", payload: [ { host: "t1", risk: false } ]) {
      host
      risk
    }
  }
````

## NEED TO KNOW

- Make sure the version of `@graphql-modules/core` and `@graphql-modules/di` is `0.7.1` or upper

- when use `Subscription transformation`, you must keep the reture type of `resolve` function in correspondence with the definition in the schema.

resolvers.ts

```typescript
  Subscription: {
    indicatorUpdated: {
      resolve(payload) {
        console.log('subscription transformation:', payload)

        // the reture type MUST be in correspondence with the definition in the schema.
        return [
          {
            host: '改了',
            risk: false
          }
        ]
      },
      subscribe: (_, __, { injector }: ModuleContext) => injector.get(PubSub).asyncIterator(['indicatorUpdated'])
    }
  }
```