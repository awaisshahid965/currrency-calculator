import React from 'react'
import CustomButton from '@/shared/ui/custom-button/custom-button'
import { useAuthContext } from '@/context/auth/auth-context'
import headerStyles from './header.module.scss'

const Header = () => {
  const { user, signout } = useAuthContext()

  return (
    <div className={headerStyles['header']}>
      <h3>CurrencyCalc.</h3>
      <nav className={headerStyles['header__nav']}>
        <p>
          <b>Email: </b>
          {user?.email}
        </p>
        <CustomButton title="logout" type="primary" onClick={signout} />
      </nav>
    </div>
  )
}

export default Header
