import "./App.css";
import Layout from "./Layout/Layout";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes />
      </Layout>
    </Provider>
  );
}

export default App;
