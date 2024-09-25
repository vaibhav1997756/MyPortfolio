// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company:'',
//     message: ''
//   });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/send-email', formData);
//       setStatus('Email sent successfully!');
//     } catch (error) {
//       setStatus('Failed to send email.');
//     }
//   };
//   return (
//     <div class="container space">
//   <div class="form-container">
//     <div class="left-container">
//       <div class="left-inner-container">
//       <h2>Let's Chat</h2>
//       <p>Whether you have a question, want to start a project or            simply want to connect.</p>
//         <br />
//         <p>Feel free to send me a message in the contact form</p>
//     </div>
//       </div>
//     <div class="right-container">
//       <div class="right-inner-container">
      
// 			<h2 class="lg-view">Contact</h2>
//       <h2 class="sm-view">Let's Chat</h2>
//            <p>* Required</p>
// 			<div class="social-container">
// 				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
// 				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
// 				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
// 			</div>
// <div className='contact-input'>
// <form action="#"  onSubmit={handleSubmit}>

//           <input 
//           type="text" 
//           placeholder="Name *" 
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//            />
//       <input 
//       type="email"
//        placeholder="Email *" 
//        name="email"
//        value={formData.email}
//        onChange={handleChange}
//        required
//       />
// 			<input
//        type="text"
//         placeholder="Company" 
//         name="company"
//         value={formData.company}
//         onChange={handleChange}
//         required
//       />
// 			<input 
//       type="phone"
//        placeholder="Phone"
//        name="phone"
//        value={formData.phone}
//        onChange={handleChange}
//        required
//        />
//           <textarea 
//           rows="4"
//            placeholder="Message" 
//            name="message"
//            value={formData.message}
//            onChange={handleChange}
//            required >

//            </textarea>
// 			<button type='submit'>Submit</button>
//       </form>
//       </div>
		

//     <p>{status}</p>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }


// export default Contact



import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(BASE_URL+'/send-email', formData);
      setStatus('Email sent successfully!');
    } catch (error) {
      setStatus('Failed to send email.');
    }
  };

  return (
    <div className="container space">
      <div className="form-container">
        <div className="left-container">
          <div className="left-inner-container">
            <h2>Let's Chat</h2>
            <p>Whether you have a question, want to start a project, or simply want to connect.</p>
            <br />
            <p>Feel free to send me a message in the contact form.</p>
          </div>
        </div>
        <div className="right-container">
          <div className="right-inner-container">
            <h2 className="lg-view">Contact</h2>
            <h2 className="sm-view">Let's Chat</h2>
            <p>* Required</p>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="contact-input">
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Name *" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="email"
                  placeholder="Email *" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Company" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
                <input 
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea 
                  rows="4"
                  placeholder="Message *" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            <p>{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
