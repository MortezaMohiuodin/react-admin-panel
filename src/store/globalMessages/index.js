const initialState = {
  globalMessages: [],
}

export default function globalMessagesReducer(state = initialState, action) {
  switch (action.type) {
    case "add/message":
      state.globalMessages.push(action.value)
      break
  }
  return state
}
