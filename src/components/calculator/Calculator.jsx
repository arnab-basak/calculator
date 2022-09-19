import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from '../button/Button'
import Row from '../row/Row'

const Calculator = ({
  className
}) => {

  const [displayText, setDisplayText] = useState('0')
  const [operandA, setOperandA] = useState(0)
  // const [operandB, setOperandB] = useState(0)
  const [operator, setOperator] = useState(null)
  const [decimal, setDecimal] = useState(false)
  const [clearDisplay, setClearDisplay] = useState(false)
  const [secondOperator, setSecondOperator] = useState(null) //tells us to evaluate

  const configArray = [
    [
      {
        display: '1',
        fn: () => numberHandler(1)
      },
      {
        display: '2',
        fn: () => numberHandler(2)
      },
      {
        display: '3',
        fn: () => numberHandler(3)
      }
    ],
    [
      {
        display: '4',
        fn: () => numberHandler(4)
      },
      {
        display: '5',
        fn: () => numberHandler(5)
      },
      {
        display: '6',
        fn: () => numberHandler(6)
      }
    ],
    [
      {
        display: '7',
        fn: () => numberHandler(7)
      },
      {
        display: '8',
        fn: () => numberHandler(8)
      },
      {
        display: '9',
        fn: () => numberHandler(9)
      }
    ],
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
    [
      {
        display: '+',
        className: 'large-btn',
        fn: () => operatorHandler('+')
      },
      {
        display: '-',
        className: 'large-btn',
        fn: () => operatorHandler('-')
      }
    ],
    [
      {
        display: 'x',
        className: 'large-btn',
        fn: () => operatorHandler('*')
      },
      {
        display: '/',
        className: 'large-btn',
        fn: () => operatorHandler('/')
      }
    ],
    [
      {
        val: '=',
        display: '=',
        className: 'x-large-btn',
        fn: () => solutionHandler('=')
      }
    ]
  ]
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
      {row.map(el => <>
        <Button
          className={el.className}
          clickHandler={el.fn}
          text={el.display}
        >
        </Button>
      </>)}
    </Row>)}
  </>
}
export default Calculator