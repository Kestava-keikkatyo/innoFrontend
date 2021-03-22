// @format
import formReducer from "../reducers/formReducer"
import deepFreeze from "deep-freeze"
import * as types from "../types/state.ts"

const testForm = {
  title: "test title",
  description: "test description",
  questions: [{ question: "test question", options: [{ option: "test option" }] }]
}

describe("formReducer", () => {
  test("Should return default state", () => {
    expect(formReducer(undefined, {})).toEqual(
      {
        title: "",
        description: "",
        questions: []
      }
    )
  })

  test("Should handle SET_CURRENT_FORM", () => {

    expect(
      formReducer([], {
        type: types.SET_CURRENT_FORM,
        data: testForm
      })
    ).toEqual(
      {
        title: "test title",
        description: "test description",
        questions: [{ question: "test question", options: [{ option: "test option" }] }]
      }
    )
  })

  test("Should handle UPDATE_TITLE", () => {
    expect(
      formReducer(undefined, {
        type: types.UPDATE_TITLE,
        data: testForm.title
      })
    ).toEqual(
      {
        title: "test title",
        description: "",
        questions: []
      }
    )
  })

  test("Should handle SET_DESCRIPTION", () => {
    expect(
      formReducer(undefined, {
        type: types.SET_DESCRIPTION,
        data: testForm.description
      })
    ).toEqual(
      {
        title: "",
        description: "test description",
        questions: []
      }
    )
  })

  // Make sure the duplicate array notation is not a quirk!
  test("Should handle ADD_QUESTION", () => {
    expect(
      formReducer(undefined, {
        type: types.ADD_QUESTION,
        data: testForm.questions
      })
    ).toEqual(
      {
        title: "",
        description: "",
        questions: [
          [
            {
              question: "test question",
              options: [{ option: "test option" }]
            }
          ]
        ]
      }
    )
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
    ).toEqual(
      {
        title: "",
        description: "",
        questions: []
      }
    )
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
    ).toEqual(
      {
        title: "",
        description: "",
        questions: [
          { question: "", options: [ { option: "test option" } ] } 
        ]
      }
    )
  })













})
