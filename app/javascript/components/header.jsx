import React, { useState } from 'react'
import '../stylesheets/header.scss'

const Header = (props) => {
  const { isUserSignedIn } = props
  const [isAcitve, setIsActive] = useState(false)

  const handleIsActiveChange = () => {
    if (isAcitve) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  return (
    <header className="header">
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="/assets/logo.png" alt="title" />
          </a>
          <a
            role="button"
            className={isAcitve ? 'navbar-burger is-active' : 'navbar-burger'}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            tabIndex={0}
            onClick={handleIsActiveChange}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={isAcitve ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end is-size-7">
            {isUserSignedIn ? (
              <>
                <a className="navbar-item" href="/ideas/new">
                  新規投稿
                </a>
                <a className="navbar-item" href="/users/edit">
                  登録情報変更
                </a>
                <a
                  className="navbar-item"
                  href="/users/sign_out"
                  data-method="delete"
                >
                  ログアウト
                </a>
              </>
            ) : (
              <a className="navbar-item" href="/users/sign_in">
                ログイン
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
