import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducers"

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        typeof window === "object" &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ?  //esta logica evita que tire error la app aunque el navegador no tenga la extension
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

export default store