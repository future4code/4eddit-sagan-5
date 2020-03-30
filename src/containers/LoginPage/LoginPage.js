import React, { Component } from "react";
import * as LPS from "./LoginPageStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MidLogo from "../Images/transparentreddit3.png"

class LoginPage extends Component {
  render() {
    return (
      <LPS.MainDiv>

        <LPS.CustomHeader>
          <LPS.SmallLogo src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <LPS.MidLogo src={MidLogo}/>
        </LPS.CustomHeader>

        <LPS.LoginWrapper>
          <TextField
            name="email"
            type="email"
            label="E-mail"
            required
          />

          <TextField
            name="password"
            type="password"
            label="Password"
            required
          />

          <Button type="submit">Login</Button> <Button type="submit">Cadastrar</Button>

        </LPS.LoginWrapper>

        <LPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <LPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <LPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <LPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <LPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <LPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </LPS.Footer>

      </LPS.MainDiv>
    );
  }
}

export default LoginPage;
