import { Form, questionTypes } from '../types/types'

// const initialForm = {
//   tags: [],
//   title: "",
//   isPublic: true,
//   description: "",
//   questions: {
//       comment: [],
//       text: [],
//       textarea: [],
//       checkbox: [],
//       checkbox_group: [],
//       radiobutton_group: [],
//       radiobutton_group_horizontal: [],
//       contact_information: [],
//       datepicker: [],
//       timepicker: []
//   },
// }
interface BaseQuestion {
  ordering: number
  title: string
}

interface TextQuestion extends BaseQuestion {
  ansMinLength: number
  ansMaxLength: number
}

interface TextQuestion extends BaseQuestion {
  ansMinLength: number
  ansMaxLength: number
}

interface TextAreaQuestion extends BaseQuestion {
  ansMinLength: number
  ansMaxLength: number
}

interface CheckboxQuestion extends BaseQuestion {}

export type QuestionType = TextAreaQuestion | TextQuestion

interface QuestionsObject {
  // comment: [],
  text: TextQuestion[]
  textarea: TextAreaQuestion[]
  checkbox: CheckboxQuestion[]
  // checkbox_group: [],
  // radiobutton_group: [],
  // radiobutton_group_horizontal: [],
  // contact_information: [],
  // datepicker: [],
  // timepicker: []
}

/*
const initialQuestions = {
  comment: [],
  text: [],
  textarea: [],
  checkbox: [],
  checkbox_group: [],
  radiobutton_group: [],
  radiobutton_group_horizontal: [],
  contact_information: [],
  datepicker: [],
  timepicker: [],
}
*/
export const convertFormQuestionsToArray = (questions: any) => {
  if(Array.isArray(questions)){
    return questions
  } else {
    let questionList: any[] = []
    if (questions) { 
      for (const [questionType, questionArray] of Object.entries(questions)) {
        (questionArray as any[]).map(q=> {
          let newQ = { 
            ...q, 
            questionType: questionType
          }
          questionList.push(newQ)
        })
      }
    }
    questionList.sort((first, second) => first.ordering - second.ordering)
    return questionList.concat([]) //Return a new array
  }
}
export const convertForm = (form: Form): any => {
  let questions = {
    comment: [],
    text: [],
    textarea: [],
    checkbox: [],
    checkbox_group: [],
    radiobutton_group: [],
    radiobutton_group_horizontal: [],
    contact_information: [],
    datepicker: [],
    timepicker: [],
  }
  form.questions.map((q: any, i: number) => {
    //base part
    let temp: any = {
      ordering: i,
      title: q.title,
      subtitle: q.subTitle,
      optional: q.optional,
    }

    switch (q.questionType) {
      case questionTypes.Comment:
        temp = { title: q.title, ordering: i }
        questions.comment = questions.comment.concat(temp)
        break

      case questionTypes.Text:
        temp = {
          ...temp,
          answer: q.answer,
          answerMaxLength: q.answerMaxLength,
          answerMinLength: q.answerMinLength,
        }
        questions.text = questions.text.concat(temp)
        break

      case questionTypes.Textarea:
        temp = {
          ...temp,
          answer: q.answer,
          answerMaxLength: q.answerMaxLength,
          answerMinLength: q.answerMinLength,
          rows: q.rows,
        }
        questions.textarea = questions.textarea.concat(temp)
        break

      case questionTypes.CheckBox:
        temp = {
          ...temp,
          checked: q.checked
        }
        questions.checkbox = questions.checkbox.concat(temp)
        break

      case questionTypes.CheckboxGroup:
        temp = {
           ...temp,
           options: q.options,
           optionValues: q.optionValues
        }
        questions.checkbox_group = questions.checkbox_group.concat(temp)
        break

      case questionTypes.RadiobuttonGroup:
        temp = {
           ...temp,
           options: q.options,
           optionValues: q.optionValues
        }
        questions.radiobutton_group = questions.radiobutton_group.concat(temp)
        break

      case questionTypes.RadiobuttonGroupHorizontal:
        temp = {
          ...temp,
          scale: q.scale,
          scaleOptionTitleLeft: q.scaleOptionTitleLeft,
          scaleOptionTitleCenter: q.scaleOptionTitleCenter,
          scaleOptionTitleRight: q.scaleOptionTitleRight,
          options: q.options,
          optionValues: q.optionValues
        }
        questions.radiobutton_group_horizontal = questions.radiobutton_group_horizontal.concat(
          temp
        )
        break

      case questionTypes.ContactInformation:
        temp = {
          ...temp,
          contactInfoAnswer: q.contactInfoAnswer
        }
        questions.contact_information = questions.contact_information.concat(
          temp
        )
        break

      case questionTypes.Datepicker:
        temp = {
          ...temp,
          isClosedTimeFrame: q.isClosedTimeFrame,
          answer: q.answer
        }
        questions.datepicker = questions.datepicker.concat(temp)
        break

      case questionTypes.Timepicker:
        temp = {
          ...temp,
          isClosedTimeFrame: q.isClosedTimeFrame,
          answer: q.answer
        }
        questions.timepicker = questions.timepicker.concat(temp)
        break

      default:
        break
    }
    return q
  })

  return {
    questions,
    title: form.title,
    description: form.description,
    tags: form.tags,
    isPublic: form.isPublic,
    filled: form.filled,
    common: form.common
  }
}
