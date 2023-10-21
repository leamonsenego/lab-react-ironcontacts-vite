import { useState } from "react";
import { Form, FormGroup, Label, Input, FormFeedback, Col, Row } from "reactstrap";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");

  const emailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const passwordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const nationalityChange = (e) => {
    const newNationality = e.target.value;
    setNationality(newNationality);
  };

  const isEmailValid = () => {
   
    return email.includes("@");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  const isPasswordStrong = () => {
    
    return password.length >= 6; 
  }
  const greetings = {
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
  };

  return (
    <div className="d-flex signup m-4 border  p-5">
      <Form className="w-100" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
  type="email"
  name="email"
  id="email"
  placeholder="Enter your email"
  value={email}
  onChange={emailChange}
  valid={isEmailValid()}
  invalid={!isEmailValid()}
/>
<FormFeedback valid={isEmailValid()}>You typed a valid email</FormFeedback>
<FormFeedback invalid={!isEmailValid()}>Please enter a valid email</FormFeedback>

        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
  type="password"
  name="password"
  id="password"
  placeholder="Enter your password"
  value={password}
  onChange={passwordChange}
  valid={isPasswordStrong().to}
  invalid={!isPasswordStrong()}
/>
<FormFeedback valid={isPasswordStrong()}>Your password is strong enough</FormFeedback>
<FormFeedback invalid={!isPasswordStrong()}>Your password is too weak</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="nationality">Select Nationality</Label>
          <Input
            type="select"
            name="select"
            id="nationality"
            value={nationality}
            onChange={nationalityChange}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </Input>
        </FormGroup>

        <p>
          {greetings[nationality]}<br/>
          Your email is {email}<br/>
         
        </p>

        <Row>
          <Col>
            <button className="btn btn-info" type="submit">Signup</button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SignupPage;
