import { createStore } from "redux"

import globalMessagesReducer from "./globalMessages"

const store = createStore(globalMessagesReducer)

export default store
