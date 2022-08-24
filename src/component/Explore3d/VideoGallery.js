import React,{useState} from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import video1 from '../../images/3d_Work/3dVideo/Angry_Bee_Movie.mp4';
import video2 from '../../images/3d_Work/3dVideo/Waving_Girl.mp4';
import video3 from '../../images/3d_Work/3dVideo/Hiding_Robot_Animation.mkv';
import video4 from '../../images/3d_Work/3dVideo/Mountains_Call.mp4';
import video5 from '../../images/3d_Work/3dVideo/Cubical_Beats.mp4';
import video6 from '../../images/3d_Work/3dVideo/Phone_Ad_Demo.mp4';
// import vid from "../../../public/3dVideo/Angry_Bee_Movie"

import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import './Gallery.css'; 

function VideoGallery({filterArr}) {

      
      const[page,setPage]=useState('1');
      const limit=6;


      let Pages=Math.ceil(filterArr.length/limit);
      let PageArr=[];
      for(let i=1;i<=Pages;i++){
          PageArr.push(i);
      }

      let si=(page-1)*limit;
      let ei=si+limit;
     let data=filterArr.slice(si,ei);
     
      

     
     const handleChange = (event, value) => {
      setPage(value);
    };
      

      const [model,setModel]=useState(false);
      const [tempimgSrc,setTempImgSrc]=useState('');

      const getImg=(videoSrc)=>{
            console.log(videoSrc);
            setTempImgSrc(videoSrc);
            setModel(true);
      }
      const handleclose=()=>{
            setModel(false);
            setTempImgSrc("");
      }
  return (
      <>
      <div className={model?"model open":"model"}>
            
            <video  autoPlay  controls src={`${tempimgSrc}`} />
                  {/* {console.log("in video",tempimgSrc, typeof tempimgSrc)} */}
                   {/* <source src={`/static/media/${tempimgSrc}`} type="video/mp4"/> */}
            <CloseIcon onClick={()=>{handleclose()}} /> 
      </div>
      <div className='gallery'>
            {
                  data.map((items,index)=>{
                        return(
                              <div className='pics relative ' key={index} onClick={()=>getImg(items.videoSrc)}>
                                    
                                        <img src={items.imgSrc}></img>
                                         <h1 className='text-center  text-white'>{items.name}</h1>  
                                          <PlayCircleIcon className=" pics-data text-white bg-black rounded-full"/>
                                    
                              </div>
                        )
                  })
            }
      </div>
      <div className=' flex justify-center mt-16' >
                           

                        <Stack spacing={2}>
                              <Typography className="font-extrabold text-center">Page: {page}</Typography>
                              <Pagination count={PageArr.length} page={page} color="secondary" onChange={handleChange} />
                        </Stack>
                               
                                
      
      </div>
      </>
    
  )
}

export default VideoGallery