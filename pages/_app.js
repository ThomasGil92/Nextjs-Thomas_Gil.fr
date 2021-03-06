import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;