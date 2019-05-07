import { GraphQLModule } from '@graphql-modules/core'
import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import { createServer } from 'http'

import * as graphqlModules from './schemas'

const gmodules: GraphQLModule[] = []
Object.keys(graphqlModules).forEach((key) => {
  gmodules.push(graphqlModules[key])
})

const { schema, context, subscriptions } = new GraphQLModule({
  imports: gmodules
})

const server = new ApolloServer({
  schema,
  context,
  subscriptions
})

// const app: any = new Koa()
const app = new Koa()
server.applyMiddleware({ app })

const httpServer = createServer(app.callback())
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  console.log(`🚀 Subsciription ready at ws://localhost:4000${server.subscriptionsPath}`)
})
