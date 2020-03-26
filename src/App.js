/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import useThemeModel from './models/useThemeModel'
import Modal from './components/Modal'
import { AnimatePresence } from 'framer-motion'
import useModalModel from './models/useModalModel'
import MainAppRouter from './Router'
import { useState } from 'react'

const App = () => {
  const { theme } = useThemeModel()
  const { modal } = useModalModel()
  const [count, setCount] = useState(0)

  return (
    <div
      css={css`
        height: 100vh;
        display: grid;
        place-items: center;
        background: ${theme.mode === 'dark'
          ? '#111B1F'
          : theme.background.base};
      `}
    >
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            height: 100%;
            margin: 0;
            padding: 0;
          }
        `}
      />

      <MainAppRouter />

      <AnimatePresence>
        {modal.onOff && (
          <Modal
            exit={{
              scale: 0,
              opacity: 0
            }}
            initial={{
              scale: 0,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
          />
        )}
      </AnimatePresence>

    </div>
  )
}


export default App
