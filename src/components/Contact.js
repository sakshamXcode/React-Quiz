import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });
    
    e.target.reset(); // Reset form after submission
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={formStyles}>
      <label style={labelStyles}>Name:</label>
      <input type="text" placeholder='Your Name?' name="user_name" style={inputStyles} required />

      <label style={labelStyles}>Email:</label>
      <input type="email" placeholder='Your Email?' name="user_email" style={inputStyles} required />

      <label style={labelStyles}>Message:</label>
      <textarea name="message" placeholder='Your Message For Me?' style={textareaStyles} required />

      <input type="submit" value="Send" style={buttonStyles} />
    </form>
  );
}

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '800px', // Increased from 600px to 800px for more width
  width: '90%', // Ensures it takes up 90% of the container width
  margin: '50px auto', // Increased margin for better positioning
  padding: '40px', // Increased padding for more space
  border: '1px solid #ddd',
  borderRadius: '10px', // Slightly increased border radius for a smoother look
  backgroundColor: 'transparent',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)', // Added box-shadow for better visual appeal
};

const labelStyles = {
  marginBottom: '10px', // Increased margin for better spacing
  fontWeight: 'bold',
  fontSize: '2.3rem',
  color:'white' // Increased font size for better readability
};

const inputStyles = {
  marginBottom: '20px', // Increased margin for more space between elements
  padding: '15px', // Increased padding for larger input fields
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '1.6rem', // Increased font size for better readability
};

const textareaStyles = {
  marginBottom: '20px', // Increased margin for more space between elements
  padding: '15px', // Increased padding for larger textarea
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '1.6rem', // Increased font size for better readability
  minHeight: '150px', // Increased height for a larger textarea
};

const buttonStyles = {
  padding: '15px 20px', // Increased padding for a larger button
  backgroundColor: 'transparent',
  color: 'white',
  border: 'solid  white',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '2.3rem', // Increased font size for the button text
};

export default Contact;
