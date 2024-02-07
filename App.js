import Navigation from "./navigation";
import { Provider } from 'react-redux'
import store from "./utils/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

