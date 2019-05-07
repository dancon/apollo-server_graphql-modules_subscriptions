# apollo-server_graphql-modules_subscriptions

The server side implementation of Graphql subscription with apollo-server and Graphql Modules.

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

## NEED HELP

The probleam is when I start subscripton and graphql playground into listening ...

And then I excute a mutation `updateIndicators` in another tab, but subscription does not have any response ...
