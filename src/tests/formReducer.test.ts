import formReducer from "../reducers/formReducer"
import deepFreeze from "deep-freeze"

describe("formReducer", () => {
  test("Should return default state", () => {
    const newState = formReducer(undefined, {})
  })
})
