import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import SignUpForm from '../pages/LoginPage/SignUpForm'
import { renderWithProviders } from '../utils/testUtils'
import userEvent from '@testing-library/user-event';

describe('<SignUpForm />', () => {
  let mockSubmit: jest.Mock

  beforeEach(() => {
    mockSubmit = jest.fn()
    renderWithProviders(<SignUpForm handleSubmit={mockSubmit} />)
  })

  test('renders content', () => {
    expect(screen.getByLabelText('firstName')).toBeInTheDocument()
    expect(screen.getByLabelText('lastName')).toBeInTheDocument()
    expect(screen.getByLabelText('email')).toBeInTheDocument()
    expect(screen.getByLabelText('password')).toBeInTheDocument()
    expect(screen.getByLabelText('confirm')).toBeInTheDocument()
    expect(screen.getByLabelText('role')).toBeInTheDocument()
  })

  test('updates state and calls submit as a worker', async () => {
    const inputFirstName = screen.getByLabelText('firstName')
    const inputLastName = screen.getByLabelText('lastName')
    const inputEmail = screen.getByLabelText('email')
    const inputPassword = screen.getByLabelText('password')
    const inputConfirmPassword = screen.getByLabelText('confirm')
    const inputRoleSelection = document.querySelector('input[name="role"]')

    await userEvent.type(inputFirstName, 'Working')
    await userEvent.type(inputLastName, 'Wayde')
    await userEvent.type(inputEmail, 'wayde@worker.com')
    await userEvent.type(inputPassword, 'worker123')
    await userEvent.type(inputConfirmPassword, 'worker123')
    await act(async () => {
      if (inputRoleSelection !== null) {
        fireEvent.change(inputRoleSelection, { target: { value: 'worker' } })
      }
    })

    const signUpButton = screen.getByRole('button', { name: 'sign_up' })

    await userEvent.click(signUpButton)

    /* todo: HandleSubmit doesn't take into account the confirmPassword field. */
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        firstName: 'Working',
        lastName: 'Wayde',
        email: 'wayde@worker.com',
        password: 'worker123',
        role: 'worker',
        category: ''
      })
    })
  })

  test('updates state and calls submit as an agency', async () => {
    const inputFirstName = screen.getByLabelText('firstName')
    const inputLastName = screen.getByLabelText('lastName')
    const inputEmail = screen.getByLabelText('email')
    const inputPassword = screen.getByLabelText('password')
    const inputConfirmPassword = screen.getByLabelText('confirm')
    const inputRoleSelection = document.querySelector('input[name="role"]')

    await userEvent.type(inputFirstName, 'Agency')
    await userEvent.type(inputLastName, 'Annie')
    await userEvent.type(inputEmail, 'annie@agency.com')
    await userEvent.type(inputPassword, 'agent123')
    await userEvent.type(inputConfirmPassword, 'agent123')
    await act(async () => {
      if (inputRoleSelection !== null) {
        fireEvent.change(inputRoleSelection, { target: { value: 'agency' } })
      }
    })

    const inputCategorySelection = document.querySelector('input[name="category"]')

    await act(async () => {
      if (inputCategorySelection !== null) {
        fireEvent.change(inputCategorySelection, { target: { value: 'Tekniikka' } })
      }
    })

    const signUpButton = screen.getByRole('button', { name: 'sign_up' })

    await userEvent.click(signUpButton)

    /* todo: HandleSubmit doesn't take into account the confirmPassword field. */
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        firstName: 'Agency',
        lastName: 'Annie',
        email: 'annie@agency.com',
        password: 'agent123',
        role: 'agency',
        category: 'Tekniikka'
      })
    })
  })
})
