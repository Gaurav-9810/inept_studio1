import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import '../Two_D_animation/Process.css';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import TvIcon from '@mui/icons-material/Tv';
import FilterIcon from '@mui/icons-material/Filter';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  })); 

function Process() {
  
  return (
    <>
    <div className='process_container pt-4  '>

    
  <h1 className='text-4xl text-center font-bold my-4  bg-transparent text-white'>Website Development Process</h1>
  <p className='text-center   mx-4 sm:mx-48 lg:mx-56 xl:mx-96 xl:px-11 bg-transparent text-white '>If your website is not setup for success or you'are not online , you're not in business.</p>
   
<Grid className="process-grid"  container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 4 }} >
  <Grid item xs={12} sm={6} md={4}  className="grid h-60 sm:h-64 px-3      ">
    <a href="https://www.marion.com/writing-graphic-design-brief-template/#:~:text=What%20Is%20a%20Design%20Brief,than%20the%20actual%20design%20itself.&text=It's%20your%20job%20to%20focus,guidance%20for%20the%20graphic%20designer" className='' >
    <AnimationOnScroll className='' style={{backdropFilter: "blur(100px)" }}   animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
     <Item className='item    hover:bg-current '  >
      <div className='container  flex h-48 sm:h-56 xl:h-48    ' >
        <div style={{height:"40%",width:"30%", display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
          <div style={{width:"70%",height:"70%",borderRadius:"50%",backgroundColor:"currentcolor", boxShadow:`rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`}}>
            <PermContactCalendarOutlinedIcon  style={{width:"50%" ,height:"100%",borderRadius:"50%",backgroundColor:"transparent",color:"white"}} />
          </div>
          
      </div>
        <div className='w-2/3  '>
            <h2 className='text-xl pt-4  mb-2 font-semibold text-white  text-left hover:text-pink 2xl:text-lg '>Gathering Information</h2>
            <p className='text-left text-white  text-xs lg:text-sm '>The most important task at this point is to get a clear understanding of your future website purposes, the main goals you wish to get, and the target audience you want to attract to your site.</p>
        </div>
      </div>
      
    </Item> 
    </AnimationOnScroll>
    
    </a>
    
  </Grid>
  <Grid item xs={12} sm={6} md={4} className="grid h-60 sm:h-64 px-3 " >
    <a href="https://segd.org/design-research-and-experiential-graphic-design" className='bg-transparent'>
    <AnimationOnScroll className='bg-transparent' style={{backdropFilter: "blur(100px)"}} animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
    <Item className='item    hover:bg-current'  >
      <div className='bg-transparent flex h-48 sm:h-56 xl:h-48  '>
      <div style={{height:"5rem",width:"30%", display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
          <div style={{width:"70%",height:"70%",borderRadius:"50%",backgroundColor:"currentcolor", boxShadow:`rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`}}>
            <EngineeringSharpIcon  style={{width:"50%" ,height:"100%",borderRadius:"50%",backgroundColor:"transparent",color:"white"}} />
          </div>
          
      </div>
        <div className='w-2/3 '>
            <h2 className='text-xl  pt-4   mb-2 font-semibold text-white bg-transparent text-left 2xl:text-lg '>Planning</h2>
            <p className='text-left   text-white text-xs lg:text-sm '>At this stage of the website development cycle, the developer creates the data that allows a customer to judge how the entire site will look like.</p>
        </div>
      </div>
      
    </Item>
    </AnimationOnScroll>
    </a>
    
  </Grid>
  <Grid item xs={12} sm={6} md={4} className="grid h-60 sm:h-64 px-3">
  <a href="https://www.creativebloq.com/advice/6-foolproof-ways-to-improve-your-graphic-design-skills" className='bg-transparent'>
  <AnimationOnScroll className='bg-transparent' style={{backdropFilter: "blur(100px)"}} animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
  <Item className='item    hover:bg-current'  >
    <div className='bg-transparent flex h-48 sm:h-56 xl:h-48 '>
    <div style={{height:"5rem",width:"30%", display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
          <div style={{width:"70%",height:"70%",borderRadius:"50%",backgroundColor:"currentcolor", boxShadow:`rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`}}>
            <TvIcon  style={{width:"50%" ,height:"100%",borderRadius:"50%",backgroundColor:"transparent",color:"white"}}  />
          </div>
          
      </div>
        <div className='w-2/3 bg-transparent  '>
            <h2 className='text-xl   pt-4  mb-2 font-semibold text-white bg-transparent text-left 2xl:lg '>Develop</h2>
            <p className='text-left  bg-transparent text-white text-xs lg:text-sm '>During the design phase, your website takes shape. All the visual content, such as images, photos, and videos is created at this step. Once again, all the info that was gathered through the first phase is crucial.</p>
        </div>
      </div>
      
    </Item>
    </AnimationOnScroll>
    </a>
    
  </Grid>
  <Grid item xs={12} sm={6} md={4} className="grid h-60 sm:h-64 px-3">
  <a href="https://www.rasmussen.edu/degrees/design/blog/what-is-graphic-design/" className='bg-transparent'>
  <AnimationOnScroll className='bg-transparent' style={{backdropFilter: "blur(100px)"}} animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
  <Item className='item    hover:bg-current'  >
    <div className='bg-transparent flex h-48 sm:h-56 xl:h-48 '>
    <div style={{height:"5rem",width:"30%", display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
          <div style={{width:"70%",height:"70%",borderRadius:"50%",backgroundColor:"currentcolor", boxShadow:`rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`}}>
            <FilterIcon  style={{width:"50%" ,height:"100%",borderRadius:"50%",backgroundColor:"transparent",color:"white"}}  />
          </div>
          
      </div>
        <div className='w-2/3 bg-transparent '>
            <h2 className='text-xl  pt-4   mb-2  font-semibold text-white bg-transparent text-left 2xl:text-lg'>Coding</h2>
            <p className='text-left text-xs lg:text-sm text-white bg-transparent '>At this step, developers finally start creating the website itself. Graphic elements that have been designed during the previous stages should be used to create an actual website.</p>
        </div>
      </div>
      
    </Item>
    </AnimationOnScroll>
    </a>
    
  </Grid>
  <Grid item xs={12} sm={6} md={4} className="grid h-60 sm:h-64 px-3">
  <a href="https://aira.net/blog/how-to-give-feedback-graphic-designer/" className='bg-transparent'>
  <AnimationOnScroll className='bg-transparent' style={{backdropFilter: "blur(100px)"}} animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
  <Item className='item    hover:bg-current'  >
    <div className='bg-transparent flex h-48 sm:h-56 xl:h-48  '>
    <div style={{height:"5rem",width:"30%", display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
          <div style={{width:"70%",height:"70%",borderRadius:"50%",backgroundColor:"currentcolor", boxShadow:`rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`}}>
            <ManageHistoryIcon  style={{width:"50%" ,height:"100%",borderRadius:"50%",backgroundColor:"transparent",color:"white"}}  />
          </div>
          
      </div>
        <div className='w-2/3 bg-transparent'>
            <h2 className='text-xl  pt-4   mb-2 font-semibold text-white bg-transparent text-left 2xl:lg'>Testing, Review, and Launch</h2>
            <p className='text-left  text-xs lg:text-sm text-white bg-transparent '>Every single link should be tested to make sure that there are no broken ones among them. After checking and testing the website, it’s time to upload it to a server. </p>
        </div>
      </div>
      
    </Item>
    </AnimationOnScroll>
    </a>
    
  </Grid>
  <Grid item xs={12} sm={6} md={4} className="grid h-60 sm:h-64 px-3">
  <a href="https://www.interaction-design.org/literature/topics/graphic-design#:~:text=Graphic%20design%20is%20a%20craft,to%20optimize%20the%20user%20experience." className='bg-transparent'>
  <AnimationOnScroll className='bg-transparent  ' style={{backdropFilter: "blur(100px)"}} animateOnce={true}  animateIn="animated animatedFadeInUp fadeInUp">
  <Item className='item   hover:bg-current   '  >
    <div className='bg-transparent flex h-48 sm:h-56 xl:h-48 '>
    <div style={{height:"5rem",width:"30%", display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
          <div style={{width:"70%",height:"70%",borderRadius:"50%",backgroundColor:"currentcolor", boxShadow:`rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`}}>
            <ChatBubbleIcon   style={{width:"50%" ,height:"100%",borderRadius:"50%",backgroundColor:"transparent",color:"white"}}  />
          </div>
          
      </div>
        <div className='w-2/3 bg-transparent'>
            <h2 className='text-xl  pt-4  mb-2  font-semibold text-white bg-transparent text-left 2xl:lg'>Maintenance and Support</h2>
            <p className='text-left  text-xs lg:text-sm bg-transparent text-white'>What’s important to remember is that a website is more of a service than a product. To avoid further inconvenience, we provide maintenance and support services.</p>
        </div>
      </div>
      
    </Item>
    </AnimationOnScroll>
    </a>
    
  </Grid>
</Grid>
</div>
</>
  )
}

export default Process