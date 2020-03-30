import React, { Component } from "react";
import * as UPS from "./UserPageStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MidLogo from "../Images/transparentreddit3.png"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';


class UserPage extends Component {
  render() {
    return (
      <UPS.MainDiv>
          
        <UPS.CustomHeader>
          <UPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <UPS.MidLogo src={MidLogo}/>
        </UPS.CustomHeader>

        <div>
            Eu sou a pagina do usuario
        </div>
        

        <UPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <UPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <UPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <UPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <UPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <UPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </UPS.Footer>

      </UPS.MainDiv>
    );
  }
}

function mapDispatchToProps(dispatch){
    return{
        goToHomePage: () => dispatch(push(routes.HomePage)),
    }
}
export default connect(null, mapDispatchToProps) (UserPage)