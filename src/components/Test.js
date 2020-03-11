import React from 'react'
import useSideListModel from '../models/useSideListModel'

const Test = () => {
  const {list} = useSideListModel()
  console.log( list )

  return(
    <div>
      test success
    </div>
  )
}

export default Test