'use client'

import { useState } from 'react'
import { useFormState } from 'react-dom'
import { signup } from '@/app/actions/auth'

type SignupState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
};

export function SignupForm() {
  const [state, formAction] = useFormState<SignupState, FormData>(
    async (prevState, formData) => {
      const result = await signup(prevState, formData);
      return result || { message: '' };
    },
    { message: '' }
  );

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
      </div>
      {state?.errors?.name && <p>{state.errors.name.join(', ')}</p>}

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email.join(', ')}</p>}

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error, index) => (
              <li key={index}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <SubmitButton />
    </form>
  )
}
function SubmitButton() {
  const [isPending, startTransition] = useState(false)

  return (
    <button disabled={isPending} type="submit" onClick={() => startTransition(() => true)}>
      Sign Up
    </button>
  )
}