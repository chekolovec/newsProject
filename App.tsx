import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import reducer from "./src/redux/reducers";
import Main from "./src/screens/Main";
import rootSaga from "./src/redux/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>
          <Main />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
