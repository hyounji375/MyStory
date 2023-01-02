import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";

const logger = createLogger();
const SagaMiddleware = createSagaMiddleware();

const createConfigure = () => {
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(logger, SagaMiddleware))
      : applyMiddleware(SagaMiddleware)
  );
  SagaMiddleware.run(rootSaga);
  return store;
};
export default createConfigure;
