import React, { useState } from "react"
import { FormQuestionnaire } from "../../components/formquestionnaire"

/**
 * @note The "forms" referenced throughout this systems component names are not input forms or the like as in webdev jargon,
 * but rather legislative/agreement forms between participants - see model from TTK in Google Drive. Naming is hard.
 */
const FormsHome = () => {
  const [state, setState] = useState({
    modules: [{ type: "checkbox" }, { type: "text" }],
  })

  const handleChange = (event) => {
    setState({ type: event.target.value })
  }

  const addModule = () => {}

  return (
    <div>
      <main>
        <FormQuestionnaire
          modules={state.modules}
          onAdd={addModule}
          onChange={handleChange}
        ></FormQuestionnaire>
      </main>
    </div>
  )
}

export default FormsHome
