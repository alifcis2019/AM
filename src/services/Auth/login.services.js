import ApiClient from '@/helpers/api,helpers'

class AuthLogin extends ApiClient {
  constructor() {
    super('auth/login')
  }
}

export default new AuthLogin()
