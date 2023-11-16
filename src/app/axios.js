// import axios from "axios";

import axios from "axios";

// const sendContactForm = async (data) => {
//   return axios({
//     method: "POST",
    // headers: {
    //   "Access-Control-Allow-Origin": origin || "*",
    //   "Content-Type": "application/json",
    // },
//     url: "/api/contact",
//     data,
//   });
// };

// export default sendContactForm;


const sendEmail = async (email, subject, message) => {
  return axios({
    method: 'POST',
    headers: {      
      "Content-Type": "application/json",
    },
    url: '/api/contact',
    data: {
      email: email,
      subject: subject,
      message: message,
    },
  });
};

export default sendEmail;
