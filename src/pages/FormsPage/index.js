import { UsbOutlined } from "@material-ui/icons"
import React, { useState } from "react"
import uuid from "react-uuid"
import {
  QuestionModule,
  QuestionForm,
} from "../../components/formquestionnaire"

const FormsHome = () => {
  const [modules, setModules] = useState([
    { id: 1, type: "text" },
    { id: 2, type: "checkbox" },
  ])

  const addModule = (type) => {
    setModules([...modules, { id: uuid(), type }])
  }

  return (
    <div>
      <QuestionForm addModule={addModule} />
      <ul>
        {modules.map((form) => {
          return (
            <li key={form.id}>
              <QuestionModule type={form.type}></QuestionModule>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FormsHome
