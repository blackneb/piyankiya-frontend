import React, {useState} from 'react'
import Photo from '../../Images/imageone.jpg'
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'
import { useLocation } from 'react-router-dom'
import axios from "axios";

const Detailed = () => {
  const baseURL="http://localhost/piyankiya/api/post/createbooking.php"
  const [post, setPost] = React.useState(null);
  const location = useLocation();
  const { fname } = location.state
  const { fphoto } = location.state
  const { fdescription } = location.state
  const { fprice } = location.state
  const { fid } = location.state
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
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const Book = (e) => {
      axios.post(baseURL,{
      cid:values.id,
      email:values.email,
      name:values.name,
      phone:values.phone
    }).then((response) => {
      setPost(response.message);
    });
    alert("Booked")
    
  }




  return (
    <div>
        <div className='detailedmain'>
          <div className='detailedfirst'>
            <img src={Photo} alt='' className='detailedpic'/>
          </div>
          <div className='detailedsecond'>
          <h2 className='conlabel'>Detailed View</h2>
            <table>
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
                  {fprice}
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
        <input className='submail' type="submit" value="Book" onClick={Book}></input>
      </form>
          </div>


        </div>
    </div>
  )
}

export default Detailed