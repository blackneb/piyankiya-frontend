import React, {useState} from 'react'
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Loading from '../../icons/loading.gif';


const Contact = () => {
  const baseURL="http://blackneb.com/piyankiya/api/post/contact_mail.php"
  const [post, setPost] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [loading, setloading] = useState(false);
  const [ud,setud] = useState("");
  const [serv,setserv] = useState("");
  const [values, setValues] = useState({
    name: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });



  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "text",
      placeholder: "Phone Number",
      errorMessage: "Please enter the field",
      label: "phone",
      required: true,
    },
    {
      id: 3,
      name: "subject",
      type: "text",
      placeholder: "Subject",
      label: "Subject",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage:"Please Enter the correct email",
      label: "E-mail",
      required: true,
    },
    {
      id: 5,
      name: "message",
      type: "textarea",
      placeholder: "Message",
      errorMessage: "Please Enter thr price",
      label: "Message",
      required: true,
    },
  ];

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleloading = (e) => {
    setloading(true);
  }
  const handleloadingclose = (e) => {
    setloading(false);
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleloading();
    axios.post(baseURL,{
      name:values.name,
      phone:values.phone,
      email:values.email,
      subject:values.subject,
      message:values.message
    }).then((response) => {
      setPost(response.message);
      if(response.data.message === "success"){
        setud("Message Sent");
        setserv("success");
        handleClick();
      }
      else{
        setud("Message not sent, please try again later!");
        setserv("error");
        handleClick();
      }
      handleloadingclose();
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };




  return (
    <div>
      <div className='main_contact'>
        <h1>Contact us</h1>
        <div className='contactmail'>
        <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
                <div className='withloading'>
                    <img className={loading? 'loadingimage' : 'loadingimageclose'} src={Loading}/>
                    <input className='submail' type="submit" value="send"></input>
                </div>  
      </form>
              </div>
      </div>
      <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={serv} sx={{ width: '100%' }}>
                    {ud}
              </Alert>
            </Snackbar>
          </Stack>
    </div>
  )
}

export default Contact
