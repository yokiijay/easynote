import { createModel } from 'hox'
import { useState } from 'react'
import { uuid } from 'uuidv4'

const initData = [
  {
    id: uuid(),
    catagory: 'note',
    contentId: uuid(),
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '🌈🌈Easynote是真的🐂🍺',
      body: [
        {
          behave: 'h1',
          content: 'dasdafafadasdad'
        },
        {
          behave: 'link',
          content: '百度',
          linkUrl: 'https://www.baidu.com'
        }
      ]
    }
  },
  {
    id: uuid(),
    catagory: 'note',
    contentId: uuid(),
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '把👴整笑了',
      body: [
        {
          behave: 'h1',
          content: 'dasdafafadasdad'
        },
        {
          behave: 'link',
          content: '百度',
          linkUrl: 'https://www.baidu.com'
        }
      ]
    }
  },
  {
    id: uuid(),
    catagory: 'note',
    contentId: uuid(),
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '第一次使用Easynote就得心应手',
      body: [
        {
          behave: 'h1',
          content: 'dasdafafadasdad'
        },
        {
          behave: 'link',
          content: '百度',
          linkUrl: 'https://www.baidu.com'
        }
      ]
    }
  },
  {
    id: uuid(),
    catagory: 'note',
    contentId: uuid(),
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '🌈🌈Easynote是真的🐂🍺',
      body: [
        {
          behave: 'h1',
          content: 'dasdafafadasdad'
        },
        {
          behave: 'link',
          content: '百度',
          linkUrl: 'https://www.baidu.com'
        }
      ]
    }
  },
  {
    id: uuid(),
    catagory: 'note',
    contentId: uuid(),
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '🌈🌈Easynote是真的🐂🍺',
      body: [
        {
          behave: 'h1',
          content: 'dasdafafadasdad'
        },
        {
          behave: 'link',
          content: '百度',
          linkUrl: 'https://www.baidu.com'
        }
      ]
    }
  },
  {
    id: uuid(),
    catagory: 'note',
    contentId: uuid(),
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '🌈🌈Easynote是真的🐂🍺',
      body: [
        {
          behave: 'h1',
          content: 'dasdafafadasdad'
        },
        {
          behave: 'link',
          content: '百度',
          linkUrl: 'https://www.baidu.com'
        }
      ]
    }
  },
]

function useSideListModel (){
  const [list, setList] = useState(initData)

  return {
    list,
    setList
  }
}

export default createModel(useSideListModel)