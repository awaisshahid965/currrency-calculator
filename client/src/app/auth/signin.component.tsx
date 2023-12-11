import React, { ChangeEvent, useState } from 'react'
import styleClasses from './signin.module.scss'
import { useAuthContext } from '@/context/auth/auth-context'
import CustomInput from '@/shared/ui/custom-input/custom-input'
import CustomButton from '@/shared/ui/custom-button/custom-button'
import { renderChangeAuthTypeContent } from './signin.utils'
import { AuthType } from '@/context/auth/auth-interface'

const Signin = () => {
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { authErrors, auth, authType, changeAuthType } = useAuthContext()
  const authTitle = authType === AuthType.SIGNIN ? 'Sign In' : 'Sign Up'
  const emailErrorMessage = authErrors?.email ?? authErrors?.form ?? ''
  const passowrdErrorMessage = authErrors?.password ?? ''

  const onSigninButtonClick = async () => {
    setSubmitting(true)
    const { email, password } = formData
    await auth(email, password)
    setSubmitting(false)
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className={styleClasses['auth']}>
      <div className={styleClasses['auth__wrapper']}>
        <h2>{authTitle}</h2>
        <div className={styleClasses['auth__form']}>
          <CustomInput
            label="Email"
            name="email"
            placeholder="Email"
            errorMessage={emailErrorMessage}
            onChange={onInputChange}
          />
          <CustomInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            errorMessage={passowrdErrorMessage}
            onChange={onInputChange}
          />
          <CustomButton
            title={authTitle}
            classNames={styleClasses['auth__button']}
            type="primary"
            size="large"
            disabled={submitting}
            onClick={onSigninButtonClick}
          />
        </div>
        {renderChangeAuthTypeContent(authType, changeAuthType)}
      </div>
    </div>
  )
}

export default Signin
