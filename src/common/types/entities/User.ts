import Entity from '../Entity';

type User = {
  email: string
  password: string
  username: string
}

type UserEntity = Entity & User

export default UserEntity;