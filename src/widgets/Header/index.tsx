import { FC } from 'react';
import styles from './Header.module.scss';
import { Button, Layout } from 'antd';
import useHeaderState from './hooks/useHeaderState';
import FlexBox from '../../common/components/FlexBox';

const { Header: AntHeader } = Layout;

const Header: FC = () => {
  const { onLogout, isAuth, user } = useHeaderState();

  return (
    <AntHeader className={styles.header}>
      {isAuth && user && (
        <FlexBox align={'center'} gap={'20px'}>
          <FlexBox gap={'5px'}>{user.username}
            <span className={styles.email}>
              ({user.email})
            </span>
          </FlexBox>
          <Button
            onClick={onLogout}
            type={'default'}
          >
            Logout
          </Button>
        </FlexBox>
      )}
    </AntHeader>
  )
}

export default Header;