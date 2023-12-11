import { AuthType } from '@/context/auth/auth-interface'
import CustomButton from '@/shared/ui/custom-button/custom-button'
import styleClasses from './auth.module.scss'

export const renderChangeAuthTypeContent = (
  authType: AuthType,
  onClickChangeAuthType: (authType: AuthType) => void,
) => {
  if (authType === AuthType.SIGNUP) {
    return (
      <div className={styleClasses['auth__change-type']}>
        <p>Already have an account,</p>
        <CustomButton title="Signin" type="link" onClick={() => onClickChangeAuthType(AuthType.SIGNIN)} classNames={styleClasses['auth__type-change-btn']} />
      </div>
    )
  }
  return (
    <div className={styleClasses['auth__change-type']}>
      <p>Dont have an account,</p>
      <CustomButton title="Signup" type="link" onClick={() => onClickChangeAuthType(AuthType.SIGNUP)} classNames={styleClasses['auth__type-change-btn']} />
    </div>
  )
}
