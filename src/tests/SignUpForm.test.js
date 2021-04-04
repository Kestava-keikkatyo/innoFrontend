import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render, wait } from "@testing-library/react"
import SignUpForm from "../pages/LandingPage/SignUpForm"

describe("<LogInForm />", () => {
  let component
  let mockSubmit

  beforeEach(() => {
    mockSubmit = jest.fn()
    component = render(<SignUpForm handleSubmit={mockSubmit} />)
  })

  test("renders content", () => {
    expect(component.container).toHaveTextContent("sign_up")
    expect(component.container).toHaveTextContent("name")
    expect(component.container).toHaveTextContent("email")
    expect(component.container).toHaveTextContent("password")
    expect(component.container).toHaveTextContent("confirm")
    expect(component.container).toHaveTextContent("role")
  })

  test("updates state and calls submit", async () => {
    const inputName = component.container.querySelector('input[name="name"]')
    const inputEmail = component.container.querySelector('input[name="email"]')
    const inputPassword = component.container.querySelector(
      'input[name="password"]'
    )
    const form = component.container.querySelector("form")
    const confirmPassword = component.container.querySelector(
      'input[name="passwordConfirm"]'
    )
    const roleSelection = component.container.querySelector(
      'input[name="role"]'
    )

    await wait(() => {
      fireEvent.change(inputName, {
        target: { value: "Testaaja" },
      })
    })

    await wait(() => {
      fireEvent.change(inputEmail, {
        target: { value: "test@test.com" },
      })
    })

    await wait(() => {
      fireEvent.change(inputPassword, {
        target: { value: "secret" },
      })
    })

    await wait(() => {
      fireEvent.change(confirmPassword, {
        target: { value: "secret" },
      })
    })

    await wait(() => {
      fireEvent.change(roleSelection, {
        target: { value: "worker" },
      })
    })

    await wait(() => {
      fireEvent.submit(form)
    })

    expect(mockSubmit.mock.calls).toHaveLength(1)
    expect(mockSubmit.mock.calls[0][0].name).toBe("Testaaja")
    expect(mockSubmit.mock.calls[0][0].email).toBe("test@test.com")
    expect(mockSubmit.mock.calls[0][0].password).toBe("secret")
    /*expect(mockSubmit.mock.calls[0][0].passwordConfirm).toBe('secret')*/
    expect(mockSubmit.mock.calls[0][0].role).toBe("worker")
  })
})
