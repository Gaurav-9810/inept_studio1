import React,{useState} from 'react';
import threeEnvironment1 from '../../images/3d_Work/3d_Enviornment/HOUSE.png';
import threeEnvironment2 from '../../images/3d_Work/3d_Enviornment/HalloweenCastle.png';
import threeEnvironment3 from '../../images/3d_Work/3d_Enviornment/Halloween_Closet.png';
import threeEnviornment4 from '../../images/3d_Work/3d_Enviornment/Halloween_Dinning.png';
import threeEnviornment5 from '../../images/3d_Work/3d_Enviornment/Halloween_Garden.png';
import threeEnviornment6 from '../../images/3d_Work/3d_Enviornment/Hand_Pump.jpg';
import outfits1 from '../../images/3d_Work/3doutfits/3d_Character.webp';
import outfits2 from '../../images/3d_Work/3doutfits/3d_envirnoment.jpg';
import outfits3 from '../../images/3d_Work/3doutfits/Red_Golden_Dress.png';
import outfits4 from '../../images/3d_Work/3doutfits/outfits.webp';
import props2 from '../../images/3d_Work/3dprops/Sword_Trial1.jpg';
import CloseIcon from '@mui/icons-material/Close';
import './Gallery.css'; 
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Gallery({filterArr}) {
     

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

      const getImg=(imgSrc)=>{
            setTempImgSrc(imgSrc);
            setModel(true);
      }
  return (
      <>
      <div className={model?"model open":"model"}>
            <img src={tempimgSrc}></img>
            <CloseIcon onClick={()=>{setModel(false)}}/> 
      </div>
      <div className='gallery '>
            {
                  data.map((items,index)=>{
                        return(
                              <div className='pics border-2 border-black' key={index} onClick={()=>getImg(items.imgSrc)}>
                                    <img src={items.imgSrc}></img>
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

export default Gallery