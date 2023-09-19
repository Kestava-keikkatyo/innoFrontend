import { useTranslation } from 'react-i18next'
import React from 'react'

/**
 * Form -component is used only for form PDF conversion.
 */
const Form: React.FC<any> = ({ currentForm }) => {
  const { t } = useTranslation()
  // pdf styles
  const commonFont = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: 'black',
    fontSize: 12,
  }
  const styles: any = {
    formTitle: {
      ...commonFont,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    formDescription: {
      ...commonFont,
      fontSize: 14,
      textAlign: 'left',
    },
    title: {
      ...commonFont,
      fontWeight: 'bold',
    },
    subTitle: {
      ...commonFont,
      float: 'right',
      marginRight: '16px',
    },
    option: {
      ...commonFont,
      border: 'none',
      verticalAlign: 'middle',
    },
    table: {
      ...commonFont,
      borderCollapse: 'collapse',
      color: 'blue',
    },
    img: {
      width: 9,
      marginTop: 2,
    },
    textLineAnswer: {
      ...commonFont,
    },
    oneLineAnswerEmpty: {
      ...commonFont,
      borderBottom: '1px solid black',
      whiteSpace: 'pre',
    },
    textAreaAnswer: {
      ...commonFont,
      minHeight: '8em',
    },
    bordered: {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderSpacing: '5px',
    },
  }

  /*
    let answer:any = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
    galley of type and scrambled it to make a type specimen book.`
    */

  const checkboxUnckecked: any =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAclBMVEX///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP8B4DOAAAAJXRSTlMA2Br1vUzyoxOmsIgCC37zA2bnCco25lv3++Txg1UXlgUNv2Fi/MenKAAAAaBJREFUeF7tm8uSgjAURJuIAj5AQHwgID7y/784C6cSEadmI/du+qziKsciubDoxohyvorCYGG/zCIIo9W8xD/Ej+XMTshseY/xN5s0s5OTpRt8ZpsXVoQi3+IDZmfF2BmMqPZWkH2FNw5HK8rx8La/FWdgUB2tOMcKDjN6/qc6+DL1aXQOjLt/w/N/Ttpuja+z7trkPLwLWzzJB7OquWIyrs1gzua/86+wnpvBpJib9RTPmZhaz6XHxPQX60kBIM5e9ocALwZZDOBhHbceAvQ367gDWPrzZyCC8SdxCZT+VwMhGv+fS8z9/b9CiKufB3Os3DqBGIkTWCFy6xZitE4gQujWHcTonECIwL1/1hBj7d5MAdz3dw1Bave1DutdBAnctuoCFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClBAPdCoHulUD7Wqx3rVg83q0W71cLt2vF+94KBe8dAuuajXfLSLTupVL+2ym3bdT7vwqF/51C+96td+9YvP+tVv/fK7ev3/B8SfSOf9ZlHNAAAAAElFTkSuQmCC'

  const checkboxChecked: any =
    'data:image/png;base64,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'

  /**Placeholders for reserving space for writing when no answer is originally
   * provided in form.
   */
  const emptyTextAnswer = '                                                            '
  const emptyContactInfoAnswer = '                                                  '
  const emptyDateAnswer = '               '
  const emptyTimeAnswer = '          '

  return (
    <div>
      <header>
        <h3 style={styles.formTitle}>{currentForm.title}</h3>
        <h5 style={styles.formDescription}>{currentForm.description}</h5>
      </header>
      <div>
        {currentForm.questions.map((q: any | null, k: number) => (
          /**Avoid breaking PDF-page inside a question and splitting the element.
           * Used by html2pdf library which is used when downloading form as PDF.
           */
          <div className='avoid_pagebreak' key={k}>
            {q && q.questionType === 'comment' ? (
              <div>
                <p style={styles.title}>{q.title}</p>
              </div>
            ) : null}
            {q && q.questionType === 'text' ? (
              <div>
                <p style={styles.title}>{q.title}</p>
                {/**If no anwer provided, reserve space for answer in the PDF. */}
                <p style={styles.textLineAnswer}>
                  {q.answer ? (
                    q.answer
                  ) : (
                    <span style={styles.oneLineAnswerEmpty}>{emptyTextAnswer}</span>
                  )}
                </p>
                <p style={styles.subTitle}>{q.subtitle}</p>
              </div>
            ) : null}
            {q && q.questionType === 'textarea' ? (
              <div>
                <p style={styles.title}>{q.title}</p>
                <p style={styles.subTitle}>{q.subtitle}</p>
                <p style={{ ...styles.textAreaAnswer, ...styles.bordered }}>{q.answer}</p>
              </div>
            ) : null}
            {q && q.questionType === 'checkbox' ? (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td style={styles.option}>
                        {q.checked ? (
                          <img style={styles.img} src={checkboxChecked} alt='checkbox-checked' />
                        ) : (
                          <img
                            style={styles.img}
                            src={checkboxUnckecked}
                            alt='checkbox-unchecked'
                          />
                        )}
                      </td>
                      <td style={styles.option}>{q.title}</td>
                    </tr>
                  </tbody>
                </table>
                <p style={styles.subTitle}>{q.subtitle}</p>
              </div>
            ) : null}
            {q && q.questionType === 'checkbox_group' ? (
              <div>
                <p style={styles.title}>{q.title}</p>
                <p style={styles.subTitle}>{q.subtitle}</p>
                <table>
                  <tbody>
                    {q.options
                      ? q.options.map((option: any, k: number) => (
                          <tr key={q._id}>
                            <td style={styles.option}>
                              {q.optionValues && q.optionValues[k] ? (
                                <img
                                  style={styles.img}
                                  src={checkboxChecked}
                                  alt='checkbox-checked'
                                />
                              ) : (
                                <img
                                  style={styles.img}
                                  src={checkboxUnckecked}
                                  alt='checkbox-unchecked'
                                />
                              )}
                            </td>
                            <td style={styles.option}>{option}</td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            ) : null}
            {q && q.questionType === 'radiobutton_group' ? (
              <div>
                <p style={styles.title}>{q.title}</p>
                <p style={styles.subTitle}>{q.subtitle}</p>
                <table>
                  <tbody>
                    {q.options
                      ? q.options.map((option: any, k: number) => (
                          <tr key={q._id}>
                            <td style={styles.option}>
                              {q.optionValues && q.optionValues[k] ? (
                                <img
                                  style={styles.img}
                                  src={checkboxChecked}
                                  alt='checkbox-checked'
                                />
                              ) : (
                                <img
                                  style={styles.img}
                                  src={checkboxUnckecked}
                                  alt='checkbox-unchecked'
                                />
                              )}
                            </td>
                            <td style={styles.option}>{option}</td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            ) : null}
            {q && q.questionType === 'radiobutton_group_horizontal' ? (
              <div>
                <p style={styles.title}>{q.title}</p>
                <p style={styles.subTitle}>{q.subtitle}</p>
                <table>
                  <tbody>
                    <tr>
                      {q.options
                        ? q.options.map((option: any, k: number) => (
                            <div key={q._id}>
                              <td style={styles.option}>
                                {q.optionValues && q.optionValues[k] ? (
                                  <img
                                    style={styles.img}
                                    src={checkboxChecked}
                                    alt='checkbox-checked'
                                  />
                                ) : (
                                  <img
                                    style={styles.img}
                                    src={checkboxUnckecked}
                                    alt='checkbox-unchecked'
                                  />
                                )}
                              </td>
                              <td style={styles.option}>{option}</td>
                            </div>
                          ))
                        : null}
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}
            {q && q.questionType === 'contact_information' ? (
              <div>
                <p style={styles.title}>{q.title}</p>
                <p style={styles.subTitle}>{q.subtitle}</p>
                <table key={q._id}>
                  <thead style={{ ...styles.title, textAlign: 'left' }}>
                    <tr>
                      <th>{t('name')}</th>
                      <th>{t('phone')}</th>
                      <th>{t('email')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/**If no anwer provided, reserve space for answer in the PDF. */}
                      <td>
                        {q.contactInfoAnswer.name ? (
                          q.contactInfoAnswer.name
                        ) : (
                          <span style={{ ...styles.oneLineAnswerEmpty, marginRight: '2em' }}>
                            {emptyContactInfoAnswer}
                          </span>
                        )}
                      </td>
                      <td>
                        {q.contactInfoAnswer.phone ? (
                          q.contactInfoAnswer.phone
                        ) : (
                          <span style={{ ...styles.oneLineAnswerEmpty, marginRight: '2em' }}>
                            {emptyContactInfoAnswer}
                          </span>
                        )}
                      </td>
                      <td>
                        {q.contactInfoAnswer.email ? (
                          q.contactInfoAnswer.email
                        ) : (
                          <span style={styles.oneLineAnswerEmpty}>{emptyContactInfoAnswer}</span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}
            {q && (q.questionType === 'datepicker' || q.questionType === 'timepicker') ? (
              <table>
                <tbody>
                  <tr>
                    <td style={{ marginRight: 100, border: 'none', fontSize: 12 }}>
                      {q.questionType === 'datepicker' ? (
                        <>
                          {q.title}{' '}
                          {q.answer ? (
                            q.answer
                          ) : (
                            <span style={styles.oneLineAnswerEmpty}>{emptyDateAnswer}</span>
                          )}
                        </>
                      ) : null}
                      {q.questionType === 'timepicker' ? (
                        <>
                          {q.title}{' '}
                          {q.answer ? (
                            q.answer
                          ) : (
                            <span style={styles.oneLineAnswerEmpty}>{emptyTimeAnswer}</span>
                          )}
                        </>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Form
