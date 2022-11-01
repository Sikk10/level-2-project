import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    const styles = {
        container: {
            width: '100vw',
            height: '10vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        team: {
            textDecoration: 'none',
            color: 'white',
            boxSizing: 'border-box',
            fontSize: '30px',
            fontWeight: 'bolder',
        },
        link: {
            textDecoration: 'none',
            color: 'white',
            marginRight: '20px',
            fontWeight: 'bold',
            fontSize: '16px',
        },
        button: {
            width: '128px',
            height: '70px',
            color: 'white',
            border: '1px solid gray',
            borderRadius: '4px',
            marginRight: '10vw',
            fontWeight: 'bold',
            fontSize: '16px',
            textDecoration: 'none',
        },
        
    }
  return (
    <div style={styles.container}>
        <div style={{marginTop: '-20px', marginLeft: '9vw'}}>
            <Link style={styles.team} to=''>
                <span>team</span>
                <span style={{color: '#0BBEF2', fontSize: '48px' }}>.</span>
            </Link>
        </div>
        <div>
            <Link style={styles.link} to='/Products' >Products</Link>
            <Link style={styles.link} to='/Services' >Services</Link>
            <Link style={styles.link} to='/Contact' >Contact</Link>
            <Link style={styles.link} to='/LogIn' >Log in</Link>
            <Link style={styles.button} to='/GetAccess' >Get Access</Link>
        </div>  
    </div> 
  )
}
