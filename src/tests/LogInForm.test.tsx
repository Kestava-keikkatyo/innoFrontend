import React from 'react'
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../utils/testUtils'
import LogInForm from '../pages/LoginPage/LogInForm'
import '@testing-library/jest-dom'

describe('<LogInForm />', () => {
  let mockSubmit: jest.Mock

  beforeEach(() => {
    mockSubmit = jest.fn()
    renderWithProviders(<LogInForm handleSubmit={mockSubmit} />)
  })

  test('renders content', async () => {
    expect(screen.getByLabelText('email_label')).toBeInTheDocument()
    expect(screen.getByLabelText('password')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('updates state and calls submit', async () => {
    const inputEmail = screen.getByLabelText('email_label')
    const inputPassword = screen.getByLabelText('password')
    const loginButton = screen.getByRole('button')

    await userEvent.type(inputEmail, 'user@gmail.com')
    await userEvent.type(inputPassword, 'secret123')
    await userEvent.click(loginButton)

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        email: 'user@gmail.com',
        password: 'secret123',
      })
    })
  })
})
