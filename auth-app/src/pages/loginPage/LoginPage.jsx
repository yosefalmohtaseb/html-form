import React from "react";
import LoginLogo from "../../components/loginLogo/LoginLogo";
import Container from "../../components/container/Container";
import * as T from "../../components/typograhy/Typography";
import Img from "../../assets/login.png";
import "./style.css";
import InsideContainer from "../../components/insideContainer/InsideContainer";
import FormField from "../../components/formfield/Formfield";
import Button from "../../components/button/Button";
import SocialMediaButton from "../../components/socialMediaButtons/SocialMediaButton";

function LoginPage({onButtonClick}) { 
  return (
    <Container>
      <div className="left-login">
        <div className="login-l-u">
          <LoginLogo />
          <T.LDiscreption>
            I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them.
          </T.LDiscreption>
          <div className="login-l-d"></div>
          <T.LDiscreption>Hideo Kojima</T.LDiscreption>
          <img className="log-img" src={Img} alt="" />
        </div>
      </div>
      <div className="right-login">
        <InsideContainer>
          <div>
            <T.FormTittel>Join the game!</T.FormTittel>
            <T.Labaliscreption>
              Go inside the best gamers social network!
            </T.Labaliscreption>
          </div>
          <SocialMediaButton/>
          
          <div>
            <form>
              <FormField
                label="Youre Email"
                type="email"
                placeholder="Enter email address"
                id="email"
                value=""
              />
              <FormField
                label="Enter your password"
                type="password"
                placeholder="password"
                id="Password"
                value=""
              />
              <Button color={"#1565D8"} type="submit" onClick={onButtonClick}>
                Login
              </Button>
            </form>
          </div>
        </InsideContainer>
      </div>
    </Container>
  );
}

export default LoginPage;
