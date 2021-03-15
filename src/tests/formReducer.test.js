import formReducer from "../reducers/formReducer"
import deepFreeze from "deep-freeze"
import * as types from "../types.ts"

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
















})
