import React from "react";
import { Provider } from "react-redux";
import store from "../src/store";
import screen2 from "../src/screen2";  
import screen3 from "../src/screen3";
import Stack_Navigation from "../src/Stack";
export default function Index() {
  return (
    <Provider store={store}>
        
      <Stack_Navigation/>
    </Provider>
  );
}
