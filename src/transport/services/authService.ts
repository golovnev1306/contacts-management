import transport from '../transport';
import AccessToken from '../../common/types/AccessToken';
import Auth from '../../common/types/Auth';
import UserEntity from '../../common/types/entities/User';

class authService {
  static current() {
    return transport.get<UserEntity>('/users/1').then(response => response.data);
  }

  static login(authData: Auth) {
    return transport.post<AccessToken>('/login', authData).then(response => response.data)
  }
}

export default authService;