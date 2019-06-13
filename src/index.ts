// import { ApolloServer } from 'apollo-server-koa'
import { GraphQLModule } from '@graphql-modules/core'

import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'

import * as graphqlModules from './schemas'
import { authenticated } from './middleware/authentication'

const gmodules: GraphQLModule[] = []
Object.keys(graphqlModules).forEach((key) => {
  gmodules.push(graphqlModules[key])
})

const { schema, context, subscriptions } = new GraphQLModule({
  imports: gmodules,
  context () {
    return {
      user: {
        id: 'u123',
        name: 'Tom'
      }
    }
  },
  resolversComposition: {
    'Query.getUserInfo': [ authenticated ]
  }
})

const server = new ApolloServer({
  schema,
  context,
  subscriptions
})

// const app: any = new Koa()
const app = express()
server.applyMiddleware({ app })

const httpServer = createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: 5000 }, () => {
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
  console.log(`🚀 Subsciription ready at ws://localhost:5000${server.subscriptionsPath}`)
})
