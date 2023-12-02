import React from 'react'

import Header from './Header'
import UserForm from './UserForm'
import CalculationsGrid from './CalculationsGrid'

import { useState } from 'react'

function App() {
  const [userValues, setUserValues] = useState({})

  const updateUserValues = (changedControlData) => {
    const controlName = changedControlData.target.id
    const controlValue = changedControlData.target.value

    setUserValues(prevValues => {
      return { ...prevValues, [controlName]: controlValue }
    })
  }
  return (
    <>
      <Header />
      <UserForm handleValuesUpdate={updateUserValues} />
      <CalculationsGrid userValues={userValues}/>
    </>
  )
}

export default App
