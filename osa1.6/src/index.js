import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const countAverage = (a,b,c) => {
  	if ((a + b + c)===0) {
  		return 0
  	}
  	return (a-b) / (a+b+c)
  }

const countPositive = (a, b, c) => {
  	if ((a + b + c)===0) {
  		return 0
  	}
  	return (a / (a+b+c))*100
  }



const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = (props) => (
	<h1>{props.text}</h1>
)

const StaticticsLine = (props) => (
	
	<tr>
	<td>{props.text}</td>
	<td>{props.value}</td>
	</tr>
	
	
)

const Statictics = (props) => {

	if((props.good+props.bad+props.neutral) > 0) {
		return(
		<table>
		<tbody>
	          <StaticticsLine text="good" value={props.good}/>
              <StaticticsLine text="neutral" value={props.neutral}/>
             
              <StaticticsLine text="bad" value={props.bad}/>

              <StaticticsLine text="all" value={props.good+props.bad+props.neutral}/>
              <StaticticsLine text="average" value={countAverage(props.good, props.bad, props.neutral)}/>
              <StaticticsLine text="positive" value={countPositive(props.good, props.bad, props.neutral) + '%'}/>
           </tbody>
           </table> 

			)
	}

	return (
		<p>No feedback given</p>
		)
	
}
    	

	


const App = () => {
  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)

  const setToGood = newValue => {
  	setGood(newValue)
  }

  const setToNeutral = newValue => {
  	setNeutral(newValue)
  }

  const setToBad = newValue => {
  	setBad(newValue)
  }


  return (
    <div>

      <Header text="give feedback"/>
      <Button handleClick={() => setToGood(good + 1)} text="good"/>
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
      <Header text="statistics"/>
      <Statictics good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)