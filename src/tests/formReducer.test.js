// @format
import formReducer from "../reducers/formReducer"
import deepFreeze from "deep-freeze"
import * as types from "../types/state.ts"

const testForm = {
  title: "test title",
  description: "test description",
  tags: [],
  isPublic: true,
  questions: [
    {
      question: "test question", options: [{ option: "test option" }]
    }
  ]
}

describe("formReducer", () => {
  test("Should return default state", () => {
    expect(formReducer(undefined, {})).toEqual(
      {
        title: "",
        description: "",
        tags: [],
        isPublic: true,
        questions: [],
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
        tags: [],
        isPublic: true,
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
        tags: [],
        isPublic: true,
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
        tags: [],
        isPublic: true,
        questions: [],
      }
    )
  })

  test("Should handle ADD_QUESTION", () => {
    expect(
      formReducer(testForm, {
        type: types.ADD_QUESTION,
        data: {
          question: "added test question",
          options: [{ option: "added test option" }],
        }
      })
    ).toEqual(
      {
        title: "test title",
        description: "test description",
        tags: [],
        isPublic: true,
        questions:
          [
            {
              question: "test question",
              options: [{ option: "test option" }]
            },
            {
              question: "added test question",
              options: [{ option: "added test option" }]
            }
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
        tags: [],
        isPublic: true,
        questions: []
      }
    )
  })

  // something
  test("Should handle UPDATE_QUESTION_OPTION", () => {
    expect(
      formReducer(testForm, {
        type: types.UPDATE_QUESTION_OPTION,
        data: {
          option: "new test option",
          questionIndex: 0,
          optionIndex: 0,
        }
      })
    ).toEqual(
      {
        title: "test title",
        description: "test description",
        tags: [],
        isPublic: true,
        questions: [
          {
            question: "test question", options: ["new test option"]
          }
        ]
      }
    )
  })

  test("Should handle REMOVE_QUESTION", () => {
    expect(
      formReducer(testForm, {
        type: types.REMOVE_QUESTION,
        data: 0,
      })
    ).toEqual(
      {
        title: "test title",
        description: "test description",
        tags: [],
        isPublic: true,
        questions: [],
      }
    )
  })

  test("Should handle REMOVE_OPTION", () => {
    expect(
      formReducer(testForm, {
        type: types.REMOVE_OPTION,
        data: {
          questionIndex: 0,
          optionIndex: 0,
        }
      })
    ).toEqual(
      {
        title: "test title",
        description: "test description",
        tags: [],
        isPublic: true,
        questions: [
          {
            question: "test question", options: []
          }
        ]
      }
    )
  })

  test("Should handle SET_QUESTIONS", () => {
    expect(
      formReducer(undefined, {
        type: types.SET_QUESTIONS,
        data: testForm.questions
      })
    ).toEqual(
      {
        title: "",
        description: "",
        tags: [],
        isPublic: true,
        questions: [
          {
            question: "test question", options: [{ option: "test option" }]
          }
        ]
      }
    )
  })

  test("Should handle CLEAR_CURRENT_FORM", () => {
    expect(
      formReducer(testForm, {
        type: types.CLEAR_CURRENT_FORM
      })
    ).toEqual(
      {
        title: "",
        description: "",
        tags: [],
        isPublic: true,
        questions: []
      }
    )
  })










})
