import { Text, View } from "react-native";

import { Provider } from "react-redux";
import store from "../src/store";
import Stack_Navigation from "../src/Stack";

export default function Index() {
  return (
    <Provider store={store}>
      <Stack_Navigation/>
    </Provider>
  );
}
