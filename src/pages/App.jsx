import React from 'react'
import { Header } from '../components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Products } from './Products'
import { Services } from './Services'
import { Contact } from './Contact'
import { LogIn } from './LogIn'
import { GetAccess } from './GetAccess'
import Background from '../assets/background.png'

export const App = () => {
  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${Background})`,
      backgroundSize: '100vw 100vh',
      backgroundRepeat: 'no-repeat',
    },
    contents: {
      width: '514px',
      height: '326px',
      marginTop: '19vh',
      marginLeft: '9vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    input: {
      width: '317px',
      height: '56px',
      border: 'none',
      borderRadius: '3px',
      boxSizing: 'border-box',
      paddingLeft: '20px',
      fontSize: '20px',
    },
    button: {
      width: '163px',
      height: '56px',
      border: 'none',
      backgroundColor: '#0BBEF2',
      marginLeft: '15px',
      borderRadius: '5px',
      fontSize: '18px'
    }
  }
  return (
    <div style={styles.container}>
      <BrowserRouter>
        <Header />
        <div style={styles.contents}>
          <div>
            <p style={{fontSize: '48px', margin: '0', color: 'white', lineHeight: '50px'}}>Instant <br/> collaborations for <br /> remote teams</p>
            <p style={{fontSize: '18', margin: '0', color: 'white'}}>All in one for your remote team chats, <br /> 
            collaboration and track projects</p>
          </div> 
          <div>
            <input style={styles.input} type="text" placeholder='Email' />
            <button style={styles.button}>Get early access</button>
          </div>
        </div>
        <Routes>
          <Route path='/' element=''/>
          <Route path='/Products' element={<Products />}/>
          <Route path='/Services' element={<Services />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/LogIn' element={<LogIn />}/>
          <Route path='/GetAccess' element={<GetAccess />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

