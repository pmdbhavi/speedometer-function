import {useState} from 'react'

import {Container,Heading,Image,Head,Para,Con,Button1,Button2} from './styledComponents'

const App=()=>{
  const [speed,setSpeed]=useState(0)

  const onClickAccelerate=()=>{
    if (speed<200){
      setSpeed(prevState=>(prevState+10))
      }
  }

  const onClickBrake=()=>{
    if(speed>0){
      setSpeed(prevState=>(prevState-10))
    }
  }

return(
  <Container>
    <Heading>SPEEDOMETER</Heading>
    <Image src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer"/>
    <Head>Speed is {speed}mph</Head>
    <Para>Min Limit is 0mph, Max Limit is 200mph</Para>
    <Con>
      <Button1 onClick={onClickAccelerate}>Accelerate</Button1>
      <Button2 onClick={onClickBrake}>Apply Brake</Button2>
    </Con>
  </Container>
)
}

export default App;
