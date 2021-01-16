import React, { useState } from "react";

const Contact = () =>{
  console.log("contact");
  const [myDetails, setName] = useState({
    fname:"",
    lname:"",
    mail:"",
    comments:""
  });
// fat arrow function can be used only for declaration of function. It cannot be used for reutilisation or reinitialization.
  const callDetails = (event) =>{
    const {name, value} = event.target;

     setName ( (preValue) => {
      return({
      ...preValue,
      [name] :value
      }
      )

    }
     )
  }
  
  

  const Details = (event) =>{
    event.preventDefault();
    alert(`   Your entered details: 
          Name: ${myDetails.fname} ${myDetails.lname}
          Email: ${myDetails.mail}
          Comments: ${myDetails.comments}
          `);
  }
  return(
    <React.Fragment>
    <p className="heading"> Contact Us</p><br/><br/>
    <div className="container">
    <form onSubmit={Details}>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  <input type="text"  onChange={callDetails} class="form-control"  placeholder="Enter first name" name="fname" value={setName.fname}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
  <input type="text"  onChange={callDetails} class="form-control"  placeholder="Enter last name" name="lname" value={setName.lname}/>
</div>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" onChange={callDetails} class="form-control"  placeholder="name@example.com" name="mail" value={setName.mail}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Feedback</label>
  <textarea  onChange={callDetails} class="form-control"  rows="3" placeholder="Enter comments" name="comments" value={setName.comments}></textarea>
</div>

<button type="submit" class="btn btn-outline-primary">Submit</button>
</form>
</div>
</React.Fragment>
  );
}

export default Contact;