import React, {useEffect, useState} from 'react'
import styles from './Home.module.css'
function Home() {
     const [videoUrl, setVideoUrl] = useState('')
     const [title, setTitle] = useState('')
     const [videos, setVideos] = useState([])
     let DEVBASEURL = 'https://itplc-api.onrender.com'
     useEffect(() => {
          fetch(`${DEVBASEURL}/api/v1/home`).then(res => {return res.json()}).then((result) => {
               let data = result.data;
               console.log(data)
               setVideos(data)
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
               <div className={styles.VideoContainer}>
                    {
                         videos.map((video, index) => (
                              <div key={index} className={styles.videoDiv}>
                                   <h1>{video.title}</h1>
                                   <video controls src={video.videoUrl}></video>
                                   {/* <button id='download' onClick={handleDownload}>Download</button> */}
                              </div>
                         ))
                    }
               </div>
               
          </main>
     )
}

export default Home