import 'cross-fetch/polyfill'

const PocketBase = require('pocketbase/cjs')
const client = new PocketBase('http://localhost:8090/')

export const login = async (email: string, pass: string) => {
  const log = await client.Users.authViaEmail(email, pass)
  return log.token
}
