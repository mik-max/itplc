import React, {useState} from 'react'
import styles from './Login.module.css'
import SweetAlert from 'sweetalert-react/lib/SweetAlert'
function Login() {
     const [church, setChurch] = useState('')
     const [code, setCode] = useState('')
     const [alertText, setAlertText] = useState('')
     const [alertTitle, setAlertTitle] = useState('')
     const [showAlert, setShowAlert] = useState(false)
     let DEVBASEURL = 'http://localhost:8009'
     const handleLogin = (e) => {
          e.preventDefault()
          if(code !== '' && church !== ''){
               let payload = {
                    church: church,
                    code: code
               }

               fetch(`${DEVBASEURL}/api/v1/login`, {
                    headers:{
                         'Content-Type': 'application/json'
                    },
                    method: 'post',
                    body: JSON.stringify(payload)
               }).then( res => { return res.json()}).then((data) => {
                    if(data.status === 'Ok'){
                         console.log(data)
                         sessionStorage.setItem('isLoggegIn', 'true')
                         setAlertText(data.message);
                         setAlertTitle('Success!')
                         setShowAlert(true)
                    }else{
                         setAlertText(data.message);
                         setAlertTitle('Error!')
                         setShowAlert(true)
                    }
               })
          }else{
               setAlertText("Kindly fill out all fields.");
               setAlertTitle('Incomplete! 😒')
               setShowAlert(true)
          }
          
     }
     return (
          <div className='container'>
                <div className={styles.formDiv}>
                    <h1>Kindly enter login code below</h1>
                    <form className={styles.form}>
                         <input type='text' required onChange={(e) => {setChurch(e.target.value)}} placeholder = 'Church Name' />
                         <input type='password' required onChange={(e) => {setCode(e.target.value)}} placeholder = 'Password' />
                         <button onClick={handleLogin}>Login</button>
                    </form>
                    <SweetAlert
                    show={showAlert}
                    title={alertTitle}
                    text={alertText}
                    onConfirm={() => {setShowAlert(false); window.location.href = '/'}}>

                    </SweetAlert>
               </div>
          </div>
     )
}

export default Login