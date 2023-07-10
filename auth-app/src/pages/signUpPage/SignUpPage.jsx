import React, { useState } from "react";
import "./style.css";
import Container from "../../components/container/Container";
import SignUpLogo from "../../components/signUpLogo/SignUpLogo";
import * as T from "../../components/typograhy/Typography";
import InsideContainer from "../../components/insideContainer/InsideContainer";
import FormField from "../../components/formfield/Formfield";
import Button from "../../components/button/Button";

function SignUpPage({onButtonClick}) {
  const [agreed, setAgreed] = useState(false);

  const handleInputChange = (e) => {};
  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  return (
    <Container>
      <div className="ba-img-container">
        <div className="overlay">
          <div className="contant-container">
            <SignUpLogo />
            <T.Discreption>
              I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them.
            </T.Discreption>
          </div>
        </div>
      </div>
      <div className="signup-form-side">
        <InsideContainer>
          <T.FormTittel>Register Individual Account!</T.FormTittel>
          <T.Labaliscreption>
            For the purpose of gamers regulation, your details are required.
          </T.Labaliscreption>
          <form>
            <FormField
              label="Email address*"
              type="email"
              placeholder="Enter email address"
              id="email"
              value=""
              onChange={handleInputChange}
            />
            <FormField
              label="Create password*"
              type="password"
              placeholder="password"
              id="Password"
              value=""
              onChange={handleInputChange}
            />
            <FormField
              label="Repeat password*"
              type="password"
              id="r-pass"
              placeholder="Repeate password"
              value=""
              onChange={handleInputChange}
            />
            <div>
              <T.Labaliscreption>
                <input
                  className="ch-box"
                  type="checkbox"
                  checked={agreed}
                  onChange={handleCheckboxChange}
                />
                I agree to terms & conditions
              </T.Labaliscreption>
            </div>
            <Button color={"#1565D8"} type="submit" disabled={!agreed}>
              Register
            </Button>
            <Button color={"#fff"} type="submit" onClick={onButtonClick}>
              LogIn
            </Button>
          </form>
        </InsideContainer>
      </div>
    </Container>
  );
}

export default SignUpPage;
