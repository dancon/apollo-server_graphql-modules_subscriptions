import { ModuleContext } from '@graphql-modules/core'
import { PubSub } from 'apollo-server-express'

// const pubsub = new PubSub()

const indicators = [
  {
    host: 't1',
    risk: false
  },
  {
    host: 't2',
    risk: true
  }
]

export default {
  Query: {
    indicators() {
      return indicators
    }
  },
  Mutation: {
    updateIndicators(_, { psm, payload }, { injector }: ModuleContext) {
      const pubsub = injector.get(PubSub)
      console.log('update:', psm, payload)
      pubsub.publish('indicatorUpdated', payload)
      return payload
    }
  },

  Subscription: {
    indicatorUpdated: {
      resolve(payload) {
        console.log('subscription:', payload)
        return payload
      },
      subscribe: (_, __, { injector }: ModuleContext) => injector.get(PubSub).asyncIterator(['indicatorUpdated'])
    }
  }
}