import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from '../button/Button'
import Row from '../row/Row'

const Calculator = ({
  className
}) => {

  const [displayText, setDisplayText] = useState('0')
  const [operandA, setOperandA] = useState(0)
  const [operator, setOperator] = useState(null)
  const [decimal, setDecimal] = useState(false)
  const [clearDisplay, setClearDisplay] = useState(false)
  const [secondOperator, setSecondOperator] = useState(null) //tells us to evaluate

  const configArray = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
  const configArray2 = [
    [
      {
        display: 'C',
        fn: () => {
          setDecimal(false)
          setOperator(null)
          setOperandA(0)
          setDisplayText(0)
          setClearDisplay(false)
        }
      },
      {
        display: '0',
        fn: () => numberHandler(0)
      },
      {
        display: '.',
        fn: () => numberHandler('.')
      }
    ],
  ]

  const configArray3 = [['+', '-', '*', '/']]

  useEffect(() => {
    if (secondOperator) {
      const result = `${operandA} ${operator} ${displayText}`
      setDisplayText(eval(result))
      setOperandA(eval(result))
      setOperator(secondOperator)
    }
  }, [secondOperator])

  const numberHandler = number => {
    if (secondOperator) {
      setSecondOperator(null)
    }
    // clear display after operator is entered and first 
    // digit for opB is entered
    if (clearDisplay) {
      setDisplayText(number)
      setClearDisplay(false)
      return
    }

    // decimal allowed just once in a num
    if (decimal && number === '.') {
      return
    }
    // set decimal flag once a decimal is used
    if (number === '.') {
      setDecimal(true)
    }
    //default 
    setDisplayText(val => {
      const result = (val != 0 ? val : '') + `${number}`
      return result
    })
  }

  const operatorHandler = operatorParam => {
    if (operatorParam === '-' && operandA === 0 && displayText === 0) {
      setDisplayText('-')
      return
    }
    if (operator) {
      setSecondOperator(operatorParam)
      setClearDisplay(true)
      return
    }

    setClearDisplay(true)
    setOperandA(displayText)
    setOperator(operatorParam)
    setDecimal(false)
  }

  const solutionHandler = () => {
    setDecimal(false)
    const result = `${operandA} ${operator} ${displayText}`
    setDisplayText(eval(result))
    setOperandA(0)
    setDecimal(false)
    setOperator(null)
    setSecondOperator(null)
  }

  return <>
    <Row>
      <div className="display">{displayText}</div>
    </Row>
    {configArray.map(row => <Row>
      {row.map((el, idx) => <>
        <Button
          key={idx}
          clickHandler={() => numberHandler(el)}
          text={el}
        >
        </Button>
      </>)}
    </Row>)}

    {configArray2.map(row => <Row>
      {row.map((el, idx) => <>
        <Button
          key={idx}
          clickHandler={el.fn}
          text={el.display}
        >
        </Button>
      </>)}
    </Row>)}
    {configArray3.map(row => <Row>
      {row.map((el, idx) => <>
        <Button
          key={idx}
          className={'large-btn'}
          clickHandler={() => operatorHandler(el)}
          text={el}
        >
        </Button>
      </>)}
    </Row>)}
    <Row>
      <Button 
      text={'='}
      clickHandler={() => solutionHandler('=')}
      className= {'x-large-btn'}
      >
      </Button>
    </Row>
  </>
}
export default Calculator