import transport from '../transport';
import AccessToken from '../../common/types/AccessToken';
import User from '../../common/types/entities/User';
import Auth from '../../common/types/Auth';

class authService {
  static current() {
    return transport.get<User>('/users/1').then(response => response.data);
  }

  static login(authData: Auth) {
    return transport.post<AccessToken>('/login', authData).then(response => response.data)
  }
}

export default authService;