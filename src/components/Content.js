import React, { useState, useMemo, useEffect } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import useThemeModel from '../models/useThemeModel'
import Toolbar from './Toolbar'
import EditBar from './EditBar'
import useSideListModel from '../models/useSideListModel'
import { useParams } from 'react-router-dom'
import EditCell from './EditCell'
import useEditbarModal from '../models/useEditbarModal'

const Content = () => {
  const { theme } = useThemeModel()
  const [showEditBar, setShowEditBar] = useState(false)
  const {currentBehave} = useEditbarModal()

  const { contentId } = useParams()
  const { list, appenBody } = useSideListModel()

  const data = useMemo(() => list.find(item => item.contentId === contentId), [
    list,
    contentId
  ])

  const toggleShoweditBar = () => {
    setShowEditBar(!showEditBar)
  }

  return (
    <div
      css={css`
        position: relative;
        /* display: flex;
        flex-direction: column;
        align-items: stretch; */
        flex: 1;
        padding: 0 20px;

        h1 {
          margin: 10px;
          text-align: center;
        }
        p.time {
          margin: 0;
          padding: 0;
          font-size: 12px;
          color: ${theme.color.hint};
          text-align: center;
        }
      `}
    >
      <h1>{data.content.title}</h1>
      <p className='time'>2020-03-10 3小时前</p>

      {data.content.body.map((item, index) => (
        <EditCell
          key={item.id}
          behave={item.behave}
          preventDefault
          onKeyDown={key => {
            switch (key) {
              case 'Enter':
                appenBody({
                  contentId,
                  index,
                  behave: currentBehave,
                })
                break
              default:
                return
            }
          }}
        >
          {item.content}
        </EditCell>
      ))}

      <Toolbar
        css={css`
          position: absolute;
          right: 20px;
          bottom: 40px;
        `}
        toggleEditBar={toggleShoweditBar}
      />
      {showEditBar && <EditBar showEditBar={showEditBar} />}
    </div>
  )
}

export default React.memo(Content)
