import store from "./redux/store";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
