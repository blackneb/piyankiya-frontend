import React, {useState} from 'react'
import Photo from '../../Images/imageone.jpg'
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'
import { useLocation } from 'react-router-dom'
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Loading from '../../icons/loading.gif';

const Detailed = () => {
  const baseURL="http://blackneb.com/piyankiya/api/post/createbooking.php"
  const [post, setPost] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [loading, setloading] = useState(false);
  const location = useLocation();
  const [ud,setud] = useState("");
  const [serv,setserv] = useState("");
  const { fname } = location.state
  const { fphoto } = location.state
  const { fdescription } = location.state
  const { fprice } = location.state
  const { fid } = location.state
  const { fage } =location.state
  const { fgender } =location.state
  const { ftypes } = location.state

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
  
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "",
    id:fid,
  });
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9 ]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      errorMessage: "Please enter the field",
      label: "phone",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage:"Please Enter the correct email",
      label: "E-mail",
      required: true,
    },
    {
      id: 4,
      name: "quantity",
      type: "number",
      placeholder: "Quantity",
      errorMessage: "How much items do you want",
      label: "Quantity",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    handleloading();
      axios.post(baseURL,{
      cid:values.id,
      email:values.email,
      name:values.name,
      phone:values.phone
    }).then((response) => {
      setPost(response.message);
      if(response.data.message === "post created"){
        setud("Item Booked");
        setserv("success");
        handleClick();
      }
      else{
        setud("Item not booked Try again");
        setserv("error");
        handleClick();
      }
      handleloadingclose();
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const Book = (e) => {
      
    
  }




  return (
    <div>
        <div className='detailedmain'>
          <div className='detailedfirst'>
            <img src={fphoto} alt='' className='detailedpic'/>
          </div>
          <div className='detailedsecond'>
          <h2 className='conlabel'>Detailed View</h2>
            <table className='detailedtable'>
              <tr>
                <td>
                  Name:
                </td>
                <td>
                  {fname}
                </td>
              </tr>
              <tr>
                <td>
                  Price:
                </td>
                <td>
                  {fprice} Birr
                </td>
              </tr>
              <tr>
                <td>
                  Gender:  
                </td>
                <td>
                  For {fgender}
                </td>
              </tr>
              <tr>
                <td>
                  Age: 
                </td>
                <td>
                  For {fage}
                </td>
              </tr>
              <tr>
                <td>
                  Type:
                </td>
                <td>
                  {ftypes}
                </td>
              </tr>
              <tr>
                <td>
                  Description: 
                </td>
                <td>
                  {fdescription}
                </td>
              </tr>
            </table>
          </div>
          <div className='detailedthird'>
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
                    <input className='submail' type="submit" value="Book"></input>
                </div>        
            </form>
          </div>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Item Booked
              </Alert>
            </Snackbar>
          </Stack>

        </div>
    </div>
  )
}

export default Detailed