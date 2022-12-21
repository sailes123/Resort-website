import { PhoneFilled } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons/lib/icons';
import { Input } from 'antd';
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Contact Us</h1>
        <div className='contact-information'>
            <div className='contact-info'>
                <h2>Contact Information</h2>
                <p>For any kind of information or help, You can contact us.</p>
                <p>Our details are provided below.</p>
                <p>We are available any time</p>
                <div className='contact-details'>
                <PhoneFilled rotate={100} style={{color:"black"}}/> 9864224868
                </div>
                <div className='contact-details'>
                <MailOutlined />        saileshbajgain056@gmail.com
                </div>
                <div className='contact-details'>
                    <p>Our location:</p>
                         Kathmandu,Manamaiju
                </div>
            </div>  
            <div className='contact-form'>
                 <div className='input'>
                      <label>Name</label>
                      <Input
                  size="small"
                  style={{marginTop:"5px", height: "45px", border: "1px solid #3E3D4B", textAlign: "left", borderRadius: "5px" }}
                />
                 </div>
                 <div className='input'>
                      <label>Email</label>
                      <Input
                  size="small"
                  style={{marginTop:"5px", height: "45px", border: "1px solid #3E3D4B", textAlign: "left", borderRadius: "5px" }}
                />
                 </div>
                 <div className='input'>
                      <label>Phone Number</label>
                      <Input
                  size="small"
                  style={{marginTop:"5px", height: "45px", border: "1px solid #3E3D4B", textAlign: "left", borderRadius: "5px" }}
                />
                 </div>
                 <div className='input'>
                      <label>Message</label>
                      <Input.TextArea rows={4}
                      style={{marginTop:"5px", border: "1px solid #3E3D4B", textAlign: "left", borderRadius: "5px" }}
                      />
                 </div>
                 <button type='submit'>Send</button>
            </div>  
        </div>
        <div className='Map'>
          <h1>Map will be added here</h1>
{/* <iframe style={{width: "100%", height:"500px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14125.052854787064!2d85.30319426931152!3d27.740026366080198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1671037526170!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        
    </div>
  )
}

export default Contact;

