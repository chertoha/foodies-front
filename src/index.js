// import "normalize.css";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "styles/globalStyles";
import App from "components/App/App";
import theme from "styles/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
