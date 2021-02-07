import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, wait } from '@testing-library/react'
import LogInForm from './LogInForm'
//import { prettyDOM } from '@testing-library/dom'
//CI=true npm test

describe('<LogInForm />', () => {
  let component
  let mockSubmit

  beforeEach(() => {
    mockSubmit = jest.fn()
    component = render(
      <LogInForm handleSubmit={mockSubmit} />
    )
  })

  test('renders content', () => {
    expect(component.container).toHaveTextContent('log_in')
    expect(component.container).toHaveTextContent('role')
    expect(component.container).toHaveTextContent('email')
    expect(component.container).toHaveTextContent('password')
  })

  test('updates state and calls submit', async () => {
    const inputEmail = component.container.querySelector('input[type=text]')
    const inputPassword = component.container.querySelector('input[type=password]')
    const radioWorker = component.container.querySelector('input[value="worker"]')
    const form = component.container.querySelector('form')

    await wait(() => {
      fireEvent.click(radioWorker)
    })

    await wait(() => {
      fireEvent.change(inputEmail, {
        target: { value: 'test@test.com' }
      })
    })

    await wait(() => {
      fireEvent.change(inputPassword, {
        target: { value: 'secret' }
      })
    })

    await wait(() => {
      fireEvent.submit(form)
    })

    expect(mockSubmit.mock.calls).toHaveLength(1)
    expect(mockSubmit.mock.calls[0][0].email).toBe('test@test.com')
    expect(mockSubmit.mock.calls[0][0].password).toBe('secret')
    expect(mockSubmit.mock.calls[0][0].role).toBe('worker')
  })
})