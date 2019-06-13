import { GraphQLModule } from '@graphql-modules/core'

import resolvers from './resolvers'
import * as typeDefs from './schema.graphql'

export default new GraphQLModule({
  resolvers,
  typeDefs
})