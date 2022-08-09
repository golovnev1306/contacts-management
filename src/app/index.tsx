import { Layout } from 'antd';
import Routing from './routing';
import 'antd/dist/antd.min.css';

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Routing />
      </Content>
      <Footer />
    </Layout>
  )
}

export default App;