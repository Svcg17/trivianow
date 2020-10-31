import { Layout } from 'antd';
import TriviaHeader from './components/Header/Header';
import Routes from './components/Routes';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          <TriviaHeader />
        </Header>
        <Content>
          <Routes />
        </Content>
        <Footer>
          By Sofia Cheung
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
