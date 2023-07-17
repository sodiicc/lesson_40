import React, { useContext } from 'react'
import { MyContext } from '../App'

export default function CustomButton() {
  // const btnColor = useContext(MyContext)
  return (
    <MyContext.Consumer>
      {btn => <button data-testid="custom-button" style={{backgroundColor: btn.color, color: 'white'}} onClick={() => btn.setColor('green')}>{btn.color}</button>}
    </MyContext.Consumer>
  )
}
