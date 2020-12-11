import React from "react";

class Input extends React.Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthday: "",
  };
  render() {
    return (
      <div>
      <h2>Working with Form in React</h2>
        <input className = 'form-control my-2' type="text" name="name" placeholder="Enter your name"></input>
        <select className='form-control my-2' name="country">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="Bhutan">India</option>
        </select>
        <textarea className = 'form-control my-2'  name="bio" placeholder="Tell me about yourself"></textarea>
        <input className = 'form-control my-2'  type="date" name="birthday" />
      </div>
    );
  }
};

export default Input ;
