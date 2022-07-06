import React, {useState} from 'react'
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null,2))
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
        <input className='submail' type="submit" value="Send"></input>
      </form>
              </div>
      </div>
    </div>
  )
}

export default Contact
