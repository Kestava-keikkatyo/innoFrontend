// @format
import formReducer from "../reducers/formReducer"
import deepFreeze from "deep-freeze"
import * as types from "../types/state.ts"

const testForm = {
  title: "test title",
  description: "test description",
  questions: [{ question: "test question", options: "test option" }]
}

describe("formReducer", () => {
  test("Should return default state", () => {
    expect(formReducer(undefined, {})).toEqual({
      currentForm: {
        title: "",
        description: "",
        questions: []
      }
    })
  })

  test("Should handle SET_CURRENT_FORM", () => {

    expect(
      formReducer([], {
        type: types.SET_CURRENT_FORM,
        data: testForm
      })
    ).toEqual({
      currentForm: {
        title: "test title",
        description: "test description",
        questions: [{ question: "test question", options: "test option" }]
      }
    })
  })

  test("Should handle UPDATE_TITLE", () => {
    expect(
      formReducer(undefined, {
        type: types.UPDATE_TITLE,
        data: "new test title"
      })
    ).toEqual({
      currentForm: {
        title: "new test title",
        description: "",
        questions: []
      }
    })
  })

  test("Should handle SET_DESCRIPTION", () => {
    expect(
      formReducer(undefined, {
        type: types.SET_DESCRIPTION,
        data: "new test description"
      })
    ).toEqual({
      currentForm: {
        title: "",
        description: "new test description",
        questions: []
      }
    })
  })

  test("Should handle ADD_QUESTION", () => {
    expect(
      formReducer(undefined, {
        type: types.ADD_QUESTION,
        data: { question: "new test question", options: "new test option" }
      })
    ).toEqual({
      currentForm: {
        title: "",
        description: "",
        questions: [{ question: "new test question", options: "new test option" }]
      }
    })
  })

  test("Should handle UPDATE_QUESTION", () => {
    expect(
      formReducer(undefined, {
        type: types.UPDATE_QUESTION,
        data: {
          question: {
            question: "updated test question",
            options: "updated test option"
          },
          index: 0
        }
      })
    ).toEqual({
      currentForm: {
        title: "",
        description: "",
        questions: [
          { question: "updated test question", options: "updated test option" }
        ]
      }
    })
  })

  test("Should handle UPDATE_QUESTION_OPTION", () => {
    expect(
      formReducer(testForm, {
        type: types.UPDATE_QUESTION_OPTION,
        data: {
          option: "test option",
        },
        questionIndex: 0,
        optionIndex: 0,
      })
    ).toEqual({
      currentForm: {
        title: "",
        description: "",
        questions: [
          { question: "", options: "test option"}
        ]
      }
    })
  })













})
