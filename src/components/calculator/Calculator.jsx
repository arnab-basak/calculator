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

  useEffect(() => {
    if (secondOperator) {
      const result = `${operandA} ${operator} ${displayText}`
      setDisplayText(eval(result))
      setOperandA(eval(result))
      setOperator(secondOperator)
    }
  }, [secondOperator])

  const numberHandler = number => {
    if(secondOperator) {
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
    // setOperandB(displayText)
    setDecimal(false)
    const result = `${operandA} ${operator} ${displayText}`
    setDisplayText(eval(result))
    setOperandA(0)
    // setOperandB(0)
    setDecimal(false)
    setOperator(null)
    setSecondOperator(null)
  }
  return (<>
    <Row>
      <div className="display">{displayText}</div>
    </Row>
    <Row>
      <Button
        className={className}
        clickHandler={() => numberHandler(1)}
        text={1}
      ></Button>
      <Button
        className={className}
        clickHandler={() => numberHandler(2)}
        text={2}
      ></Button>
      <Button
        className={className}
        clickHandler={() => numberHandler(3)}
        text={3}
      ></Button>
    </Row>
    <Row>
      <Button
        className={className}
        clickHandler={() => numberHandler(4)}
        text={4}
      ></Button>
      <Button
        className={className}
        clickHandler={() => numberHandler(5)}
        text={5}
      ></Button>
      <Button
        className={className}
        clickHandler={() => numberHandler(6)}

        text={6}
      ></Button>
    </Row>
    <Row>
      <Button
        className={className}
        clickHandler={() => numberHandler(7)}
        text={7}
      ></Button>
      <Button
        className={className}
        clickHandler={() => numberHandler(8)}
        text={8}
      ></Button>
      <Button
        className={className}
        clickHandler={() => numberHandler(9)}
        text={9}
      ></Button>
    </Row>
    <Row>
      <Button
        className={className}
        clickHandler={() => {
          setDecimal(false)
          setOperator(null)
          setOperandA(0)
          // setOperandB(0)
          setDisplayText(0)
          setClearDisplay(false)
        }}
        text={'C'}
      ></Button>
      <Button
        className={className}
        clickHandler={() => numberHandler(0)}
        text={0}
      ></Button>
      <Button
        className={className}
        clickHandler={() => numberHandler('.')}
        text={'.'}
      ></Button>
    </Row>
    <Row>
      <Button
        className={'large-btn'}
        clickHandler={() => operatorHandler('+')}
        text={'+'}
      ></Button>
      <Button
        className={'large-btn'}
        clickHandler={() => operatorHandler('-')}
        text={'-'}
      ></Button>
    </Row>
    <Row>
      <Button
        className={'large-btn'}
        clickHandler={() => operatorHandler('*')}
        text={'x'}
      ></Button>
      <Button
        className={'large-btn'}
        clickHandler={() => operatorHandler('/')}
        text={'/'}
      ></Button>
    </Row>
    <Row>
      <Button
        className={'x-large-btn'}
        clickHandler={() => solutionHandler('=')}
        text={'='}
      ></Button>
    </Row>
  </>)
}
export default Calculator