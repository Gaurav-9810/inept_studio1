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

    
  <h1 className='text-4xl text-center font-bold my-4  bg-transparent text-white'>App Development Process</h1>
  <p className='text-center   mx-4 sm:mx-48 lg:mx-56 xl:mx-96 xl:px-11 bg-transparent text-white '>Your mobile device has quickly become the easiest portal into your digital self.</p>
   
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
            <h2 className='text-xl pt-4  mb-2 font-semibold text-white  text-left hover:text-pink 2xl:text-lg '>Creative Breaf</h2>
            <p className='text-left text-white  text-xs lg:text-sm 2xl:text-xs'>Creative Brief will capture all of your client’s wants and needs and other key project specifications. </p>
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
        <div className='w-2/3 bg-transparent'>
            <h2 className='text-xl  pt-4   mb-2 font-semibold text-white bg-transparent text-left 2xl:text-lg '>Research the Design</h2>
            <p className='text-left  bg-transparent text-white text-xs lg:text-sm 2xl:xs'>We will use your findings to inspire original ideas, solidify the overall design approach with other stakeholders and back up the design decisions you make later on. </p>
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
            <h2 className='text-xl   pt-4  mb-2 font-semibold text-white bg-transparent text-left 2xl:lg '>Develop and refine </h2>
            <p className='text-left  bg-transparent text-white text-xs lg:text-sm 2xl:xs'>The development and refinement stage may involve sketching out thumbnails, mockups or graphic elements, like logo development and web design.</p>
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
            <h2 className='text-xl  pt-4   mb-2  font-semibold text-white bg-transparent text-left 2xl:text-lg'>Create the design</h2>
            <p className='text-left text-xs lg:text-sm text-white bg-transparent 2xl:text-xs'>During the design stage, a graphic designer will be expected to implement best practices related to the use of color, typography, the hierarchy of information and space.</p>
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
            <h2 className='text-xl  pt-4   mb-2 font-semibold text-white bg-transparent text-left 2xl:lg'>Implement feedback</h2>
            <p className='text-left  text-xs lg:text-sm text-white bg-transparent 2xl:xs'>The feedback stage involves a series of smaller steps that ensure quality control and perfect alignment with stakeholders’ vision.</p>
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
            <h2 className='text-xl  pt-4  mb-2  font-semibold text-white bg-transparent text-left 2xl:lg'>Deliver the design </h2>
            <p className='text-left  text-xs lg:text-sm bg-transparent text-white 2xl:xs'>You’ve gotten final approval from all stakeholders, you’re ready to deliver the assets in the appropriate formats.</p>
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