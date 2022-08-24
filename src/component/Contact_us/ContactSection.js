import React from 'react'
import './ContactSection.css';
import img1 from '../../images/location.png';
import img2 from '../../images/mail.png';
import img3 from '../../images/call.jpg'
// import img3 from '../Images/call.jpg';
import img4 from '../../images/facebook-icon.png';
import img5 from '../../images/linkedin-icon.png';
import img6 from '../../images/instagram-icon.png';
import img7 from '../../images/whatsapp-icon.png';
import img25 from '../../images/contact.jpg';

function ContactSection() {
  return (
    <div className="back">
      <div className="ccontainer">
      
        <div className="ccontactInfo">
          
            <div className='ContactIn'>
            <h2>Contact Info</h2>
            </div>
            
            <div className= 'outer_profile'>
            <div className="profileimg">
            <img src={img25}  width="120" height= "120" alt="" />
            </div>

             <div className='social_m'>
            <ul className="iinfo">
              <li>
              <span><img src={img1}  width="120" alt="" /></span>
              <span>
                Sant Nagar,Burari<br />Delhi <br />110084
              </span>
              </li>
              <li>
              <span><img src={img2}  width="120" alt="" /></span>
              <span>
                harshittyagi@gmail.com
              </span>
              </li> <li>
              <span><img src={img3}  width="120" alt="" /></span>
              <span>
              110-249-1234
              </span>
              </li>
            </ul>
            </div>
            
          </div>
          {/* to go to facebook */}
          <ul className="llogo">
            <li><a href="#"><img src={img5} alt="" /></a></li>
            <li><a href="#"><img src={img6} alt="" /></a></li>
            <li><a href="#"><img src={img7} alt="" /></a></li>
            <li><a href="#"><img src={img4} alt="" /></a></li>
          </ul>
        </div>



        <div className="ccontactForm">
        <h2>Send Us Message</h2>
        <div className="fformbox">

        <label htmlFor="name">Your Name</label>
           <div className="item1">
            <input type="text" name="myname" id="name" placeholder=''/>
            </div> 
             <br />
             <label htmlFor="phone">Your Mobile No.</label>
           <div className="item1">
          <input type="text" name="phone" id="phone" placeholder=' '/>
           </div>
           <br />

          <label htmlFor="email">Your Email</label>
          <div className="item1">
            <input type="email" name="email" id="email"  placeholder=''/>
            </div>
            <br />
         <label htmlFor="message">Message</label>
         <div className="item1">
             <textarea name="message" id="message" cols="50" rows="5"></textarea>
             </div>
             <br />
           <button className="bbtn">Send</button>

          {/* <div className="inputbox w">
            <input type="text" required />
            <span>First Name</span>
            </div>

            <div className="inputbox w">
            <input type="text" required />
            <span>Last Name</span>
            </div>

            <div className="inputbox w">
            <input type="email" required />
            <span>Email Address</span>
            </div>

            <div className="inputbox w">
            <input type="text" required />
            <span>Mobile Number</span>
            </div>

            <div className="inputbox w100">
            <textarea name="" id="" cols="60" rows="4"></textarea>
            <span>Write your Messge here...</span>
            </div>

            <div className="inputbox w100">
              <input type="Submit" value="Send Message" />
            </div>
  */}
          
        </div>

        </div>
      </div>
    </div>
    // <div className='contact-box'> 
    //   <h1 className="h-primary">Contact Us</h1>
      
      
    //   <div className="container">
      
    //     <form action="">
    //   <label htmlFor="name">Your Name</label>
    //       <div className="item1">
    //         <input type="text" name="myname" id="name" placeholder='Enter your Name'/>
    //         </div>
    //         <br />

          


    //       <label htmlFor="phone">Your Mobile No.</label>
    //       <div className="item1">
    //         <input type="text" name="phone" id="phone" placeholder='Enter your phone nuber'/>
    //         </div>

          
          
    //       c
          
          
    //       <br />
    //       <label htmlFor="message">Message</label>
    //       <div className="item1">
    //         <textarea name="message" id="message" cols="50" rows="10"></textarea>
    //         </div>
    //         <br />
    //        <button className="btn">Submit</button>

      
            
          
    //     </form>
    //   </div>
    // </div>
  );
}

export default ContactSection