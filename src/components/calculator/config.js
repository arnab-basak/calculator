// import {
//   operatorHandler,
//   numberHandler,
//   solutionHandler
// } from './Calculator'

// const configArray = [
//   [
//     {
//       display: '1',
//       fn: () => numberHandler(1)
//     },
//     {
//       display: '2',
//       fn: () => numberHandler(2)
//     },
//     {
//       display: '3',
//       fn: () => numberHandler(3)
//     }
//   ],
//   [
//     {
//       display: '4',
//       fn: () => numberHandler(4)
//     },
//     {
//       display: '5',
//       fn: () => numberHandler(5)
//     },
//     {
//       display: '6',
//       fn: () => numberHandler(6)
//     }
//   ],
//   [
//     {
//       display: '7',
//       fn: () => numberHandler(7)
//     },
//     {
//       display: '8',
//       fn: () => numberHandler(8)
//     },
//     {
//       display: '9',
//       fn: () => numberHandler(9)
//     }
//   ],
//   [
//     {
//       display: 'C',
//       fn: () => {
//         setDecimal(false)
//         setOperator(null)
//         setOperandA(0)
//         // setOperandB(0)
//         setDisplayText(0)
//         setClearDisplay(false)
//       }
//     },
//     {
//       display: '0',
//       fn: () => numberHandler(0)
//     },
//     {
//       display: '.',
//       fn: () => numberHandler('.')
//     }
//   ],
//   [
//     {
//       display: '+',
//       className: 'large-btn',
//       fn: () => operatorHandler('+')
//     },
//     {
//       display: '-',
//       className: 'large-btn',
//       fn: () => operatorHandler('-')
//     }
//   ],
//   [
//     {
//       display: 'x',
//       className: 'large-btn',
//       fn: () => operatorHandler('*')
//     },
//     {
//       display: '/',
//       className: 'large-btn',
//       fn: () => operatorHandler('/')
//     }
//   ],
//   [
//     {
//       val: '=',
//       display: '=',
//       className: 'x-large-btn',
//       fn: () => solutionHandler('=')
//     }
//   ]
// ]

// export default configArray