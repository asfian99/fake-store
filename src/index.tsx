import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import { customTheme } from "./customStyles/theme";
import { Fonts } from "./customStyles/Font";

const queryClient = new QueryClient();
const theme = extendTheme(customTheme);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Fonts />
          <CSSReset />
          <App />
        </ChakraProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
