import React, {useEffect, useState} from 'react'
import styles from './Home.module.css'
function Home() {
     const [videoUrl, setVideoUrl] = useState('')
     const [title, setTitle] = useState('')
     let DEVBASEURL = 'http://localhost:8009'
     useEffect(() => {
          fetch(`${DEVBASEURL}/api/v1/home`).then(res => {return res.json()}).then((result) => {
               let data = result.data;
               setVideoUrl(data.videoUrl)
               setTitle(data.title)
          })
          
     }, [])
     function handleDownload(){
          fetchFile(videoUrl)
     }
     
     function fetchFile(url){
          let aTag = document.createElement("a")
          aTag.href = `${url}?dl=`;// specific to sanity
          aTag.download= url.replace(/^.*[\\\/]/, '');
          document.body.appendChild(aTag)
          console.log(aTag)
          aTag.click();
          aTag.remove();
          
     }
     return (
          <main className='container'>
               <div className={styles.videoDiv}>
                    <h1>{title}</h1>
                    <video controls src={videoUrl}></video>
                    <button id='download' onClick={handleDownload}>Download</button>
               </div>
          </main>
     )
}

export default Home