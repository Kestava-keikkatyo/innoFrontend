import formReducer from '../reducers/formReducer'
import * as types from '../types/state'
import { Form, Question } from '../types/types'

describe('formReducer', () => {
  const testQuestion: Question = {
    title: 'test question title',
    questionType: 'test question type',
    subTitle: 'test sub title',
    scaleOptionTitleLeft: 'test left',
    scaleOptionTitleCenter: 'test center',
    scaleOptionTitleRight: 'test right',
    answerMinLength: 1,
    answerMaxLength: 10,
    rows: 1,
    scale: 10,
    optional: false,
    options: ['test option 1'],
    comment: 'test question comment',
    answer: 'test answer',
    contactInfoAnswer: { title: 'placeholder' },
    checked: false,
    optionValues: [true],
  }
  const testForm: Form = {
    title: 'test title',
    description: 'test description',
    tags: [],
    isPublic: true,
    questions: [testQuestion],
    filled: false,
    common: false,
  }

  test('Should handle SET_CURRENT_FORM', () => {
    expect(
      formReducer(undefined, {
        type: types.SET_CURRENT_FORM,
        data: testForm,
      }),
    ).toEqual(testForm)
  })

  test('Should handle UPDATE_TITLE', () => {
    expect(
      formReducer(undefined, {
        type: types.UPDATE_TITLE,
        data: testForm.title,
      }),
    ).toEqual({
      title: 'test title',
      description: '',
      tags: [],
      isPublic: true,
      questions: [],
      filled: false,
      common: false,
    })
  })

  test('Should handle SET_DESCRIPTION', () => {
    expect(
      formReducer(undefined, {
        type: types.SET_DESCRIPTION,
        data: testForm.description,
      }),
    ).toEqual({
      title: '',
      description: 'test description',
      tags: [],
      isPublic: true,
      questions: [],
      filled: false,
      common: false,
    })
  })

  test('Should handle ADD_QUESTION', () => {
    const questionToAdd = {
      ...testQuestion,
      title: 'added test question title',
      questionType: 'added test question type',
    }
    expect(
      formReducer(testForm, {
        type: types.ADD_QUESTION,
        data: questionToAdd,
      }),
    ).toEqual({
      title: 'test title',
      description: 'test description',
      tags: [],
      isPublic: true,
      questions: [
        {
          title: 'test question title',
          questionType: 'test question type',
          subTitle: 'test sub title',
          scaleOptionTitleLeft: 'test left',
          scaleOptionTitleCenter: 'test center',
          scaleOptionTitleRight: 'test right',
          answerMinLength: 1,
          answerMaxLength: 10,
          rows: 1,
          scale: 10,
          optional: false,
          options: ['test option 1'],
          comment: 'test question comment',
          answer: 'test answer',
          contactInfoAnswer: { title: 'placeholder' },
          checked: false,
          optionValues: [true],
        },
        {
          title: 'added test question title',
          questionType: 'added test question type',
          subTitle: 'test sub title',
          scaleOptionTitleLeft: 'test left',
          scaleOptionTitleCenter: 'test center',
          scaleOptionTitleRight: 'test right',
          answerMinLength: 1,
          answerMaxLength: 10,
          rows: 1,
          scale: 10,
          optional: false,
          options: ['test option 1'],
          comment: 'test question comment',
          answer: 'test answer',
          contactInfoAnswer: { title: 'placeholder' },
          checked: false,
          optionValues: [true],
        },
      ],
      filled: false,
      common: false,
    })
  })

  test('Should handle UPDATE_QUESTION', () => {
    const updatedQuestion = {
      ...testQuestion,
      title: 'updated test question title',
      questionType: 'updated test question type',
    }
    expect(
      formReducer(testForm, {
        type: types.UPDATE_QUESTION,
        data: {
          question: updatedQuestion,
          index: 0,
        },
      }),
    ).toEqual({
      title: 'test title',
      description: 'test description',
      tags: [],
      isPublic: true,
      questions: [
        {
          title: 'updated test question title',
          questionType: 'updated test question type',
          subTitle: 'test sub title',
          scaleOptionTitleLeft: 'test left',
          scaleOptionTitleCenter: 'test center',
          scaleOptionTitleRight: 'test right',
          answerMinLength: 1,
          answerMaxLength: 10,
          rows: 1,
          scale: 10,
          optional: false,
          options: ['test option 1'],
          comment: 'test question comment',
          answer: 'test answer',
          contactInfoAnswer: { title: 'placeholder' },
          checked: false,
          optionValues: [true],
        },
      ],
      filled: false,
      common: false,
    })
  })

  // something
  test('Should handle UPDATE_QUESTION_OPTION', () => {
    expect(
      formReducer(testForm, {
        type: types.UPDATE_QUESTION_OPTION,
        data: {
          option: 'new test option',
          questionIndex: 0,
          optionIndex: 0,
        },
      }),
    ).toEqual({
      title: 'test title',
      description: 'test description',
      tags: [],
      isPublic: true,
      questions: [
        {
          title: 'test question title',
          questionType: 'test question type',
          subTitle: 'test sub title',
          scaleOptionTitleLeft: 'test left',
          scaleOptionTitleCenter: 'test center',
          scaleOptionTitleRight: 'test right',
          answerMinLength: 1,
          answerMaxLength: 10,
          rows: 1,
          scale: 10,
          optional: false,
          options: ['new test option'],
          comment: 'test question comment',
          answer: 'test answer',
          contactInfoAnswer: { title: 'placeholder' },
          checked: false,
          optionValues: [true],
        },
      ],
      filled: false,
      common: false,
    })
  })

  test('Should handle REMOVE_QUESTION', () => {
    expect(
      formReducer(testForm, {
        type: types.REMOVE_QUESTION,
        data: 0,
      }),
    ).toEqual({
      title: 'test title',
      description: 'test description',
      tags: [],
      isPublic: true,
      questions: [],
      filled: false,
      common: false,
    })
  })

  test('Should handle REMOVE_OPTION', () => {
    expect(
      formReducer(testForm, {
        type: types.REMOVE_OPTION,
        data: {
          questionIndex: 0,
          optionIndex: 0,
        },
      }),
    ).toEqual({
      title: 'test title',
      description: 'test description',
      tags: [],
      isPublic: true,
      questions: [
        {
          title: 'test question title',
          questionType: 'test question type',
          subTitle: 'test sub title',
          scaleOptionTitleLeft: 'test left',
          scaleOptionTitleCenter: 'test center',
          scaleOptionTitleRight: 'test right',
          answerMinLength: 1,
          answerMaxLength: 10,
          rows: 1,
          scale: 10,
          optional: false,
          options: [],
          comment: 'test question comment',
          answer: 'test answer',
          contactInfoAnswer: { title: 'placeholder' },
          checked: false,
          optionValues: [true],
        },
      ],
      filled: false,
      common: false,
    })
  })

  test('Should handle SET_QUESTIONS', () => {
    expect(
      formReducer(undefined, {
        type: types.SET_QUESTIONS,
        data: testForm.questions,
      }),
    ).toEqual({
      title: '',
      description: '',
      tags: [],
      isPublic: true,
      questions: [
        {
          title: 'test question title',
          questionType: 'test question type',
          subTitle: 'test sub title',
          scaleOptionTitleLeft: 'test left',
          scaleOptionTitleCenter: 'test center',
          scaleOptionTitleRight: 'test right',
          answerMinLength: 1,
          answerMaxLength: 10,
          rows: 1,
          scale: 10,
          optional: false,
          options: ['test option 1'],
          comment: 'test question comment',
          answer: 'test answer',
          contactInfoAnswer: { title: 'placeholder' },
          checked: false,
          optionValues: [true],
        },
      ],
      filled: false,
      common: false,
    })
  })

  test('Should handle CLEAR_CURRENT_FORM', () => {
    expect(
      formReducer(testForm, {
        type: types.CLEAR_CURRENT_FORM,
        data: undefined,
      }),
    ).toEqual({
      title: '',
      description: '',
      tags: [],
      isPublic: true,
      questions: [],
      filled: false,
      common: false,
    })
  })
})
