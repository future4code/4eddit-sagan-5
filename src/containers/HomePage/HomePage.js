import React, { Component } from "react";
import * as HPS from "./HomePageStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MidLogo from "../Images/transparentreddit3.png"

class HomePage extends Component {
  render() {
    return (
      <HPS.MainDiv>

        <HPS.CustomHeader>
          <HPS.SmallLogo src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <HPS.MidLogo src={MidLogo}/>
        </HPS.CustomHeader>
        <div>Oi sou a home</div>




        <HPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <HPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <HPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <HPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <HPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <HPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </HPS.Footer>

      </HPS.MainDiv>
    );
  }
}

export default HomePage;