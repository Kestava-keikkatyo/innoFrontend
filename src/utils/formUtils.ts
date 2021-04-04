import { Form, questionTypes } from "../types/types";

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
    timepicker: []
}

export const convertForm = (form: Form): any => {
  let questions = initialQuestions
  form.questions.map((q: any, i: number) => {
    //base part
    let temp: any = {
      ordering: i,
      title: q.title,
      subTitle: q.subTitle,
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
          answerMaxLength: q.answerMaxLength,
          answerMinLength: q.answerMinLength
        }
        questions.text = questions.text.concat(temp)
        break

      case questionTypes.Textarea:
        temp = {
          ...temp,
          answerMaxLength: q.answerMaxLength,
          answerMinLength: q.answerMinLength,
          rows: q.rows
        }
        questions.textarea = questions.textarea.concat(temp)
        break

      case questionTypes.CheckBox:
        questions.checkbox = questions.checkbox.concat(temp)
        break

      case questionTypes.CheckboxGroup:
        temp = { ...temp, options: q.options }
        questions.checkbox_group = questions.checkbox_group.concat(temp)
        break

      case questionTypes.RadiobuttonGroup:
        temp = { ...temp, options: q.options }
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
        }
        questions.radiobutton_group_horizontal = questions.radiobutton_group_horizontal.concat(temp)
        break

      case questionTypes.ContactInformation:
        questions.contact_information = questions.contact_information.concat(temp)
        break

      case questionTypes.DatePicker:
        temp = { ...temp, isClosedTimeFrame: q.isClosedTimeFrame }
        questions.datepicker = questions.datepicker.concat(temp)
        break

      case questionTypes.TimePicker:
        temp = { ...temp, isClosedTimeFrame: q.isClosedTimeFrame }
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
    isPublic: form.isPublic
  }
}