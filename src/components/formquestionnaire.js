import React from "react"

/**
 * @exports components/FormQuestionnaire
 * @use This component handles the questionnaire a corporate user fills to create a form for another user to fill.
 */
export const FormQuestionnaire = (props) => {
  const { modules, onChange } = props

  const handleSubmit = (event) => {}

  return (
    <div>
      <h1>Otsikoi lomake ja valitse kysymykset</h1>
      <form onSubmit={handleSubmit}>
        <select value={modules} onChange={onChange}>
          <option value="text">Tekstikenttä</option>
          <option value="checkbox">Checkbox</option>
        </select>
        <input type="submit" value="Lisää" />
      </form>
      <div>
        <form>
          <input type="text" placeholder="Otsikko/Lomakkeen nimi" />
        </form>
        {modules.map((questionmodule) => (
          <QuestionnaireModule key={questionmodule.type}></QuestionnaireModule>
        ))}
      </div>
    </div>
  )
}

export const QuestionnaireModule = (type) => {
  return (
    <div>
      <input type={type} />
      <label>Tämä on moduuli</label>
    </div>
  )
}
