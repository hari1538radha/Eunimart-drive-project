import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <label>UserName:</label>
        <input type="Text" />
      </div>
      <div>
        <label>PhoneNumber:</label>
        <input type="Number" />
      </div>
      <div>
        <label>Email:</label>
        <input type="Email" />
      </div>
    </div>
  );
};

export default Login;
