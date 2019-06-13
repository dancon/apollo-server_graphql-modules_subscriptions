export default {
  Query: {
    getUserInfo (_, __, { user }) {
      console.log('user:', user)
      return user
    }
  }
}