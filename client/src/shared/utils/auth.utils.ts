const EMAIL_VALIDATION_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateEmail = (str: string): boolean => {
  return !!EMAIL_VALIDATION_REGEX.test(str)
}

const validatePassword = (str: string): boolean => str?.length > 1

export const validateEmailAndPassowrd = (email: string, password: string) => {
  const isEmailValid = validateEmail(email)
  const isPasswordValid = validatePassword(password)

  const authErrors = {
    email: isEmailValid ? '' : 'Invalid Email',
    password: isPasswordValid ? '' : 'Invalid Password',
  }

  const hasErrors = !isEmailValid || !isPasswordValid

  return {
    hasErrors,
    authErrors,
  }
}
