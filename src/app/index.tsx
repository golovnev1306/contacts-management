import { Layout, Spin } from 'antd';
import Routing from './routing';
import useAppInitialize from '../common/hooks/useAppInitialize';
import "../common/styles/index.scss";
import styles from './App.module.scss';
import Header from '../widgets/Header';

const { Footer, Content } = Layout;

const App = () => {
  const { isAppLoading } = useAppInitialize();

  return (
    <Spin spinning={isAppLoading} tip={'Loading app...'}>
      <Layout className={styles.layout}>
        <Header />
        <Content className={styles.layoutContent}>
          <Routing />
        </Content>
        <Footer className={styles.layoutFooter}>Created by Konstantin Golovnev</Footer>
      </Layout>
    </Spin>
  )
}

export default App;