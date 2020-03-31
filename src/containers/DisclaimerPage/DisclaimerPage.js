import React, { Component } from "react";
import * as DPS from "./DisclaimerPageStyles";
import Button from "@material-ui/core/Button";
import MidLogo from "../Images/transparentreddit3.png"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import Paper from '@material-ui/core/Paper';

class DisclaimerPage extends Component {
  render() {
    return (
      <DPS.MainDiv>

        <Paper elevation={3}>
        <DPS.CustomHeader>
          <DPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <DPS.MidLogo src={MidLogo}/>
        </DPS.CustomHeader>
        </Paper>

        <DPS.BodyTitle>
          Esperamos que goste do site!
        </DPS.BodyTitle>

        <DPS.BigLogo src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c531.png" />

        <DPS.BodyDisclaimer>
          Esse foi um projeto semanal da Future4 feito pelos seguintes membros:
        </DPS.BodyDisclaimer>

        <DPS.LinksContainer>
          <li>Leonardo Crispim</li>
          <li>Dennis</li>
          <li>Henrique</li>
        </DPS.LinksContainer>

        <Button onClick={this.props.goToHomePage} variant="contained" size="small" color="primary">Voltar para Home</Button>

        <Paper elevation={3}>
        <DPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <DPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <DPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <DPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <DPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <DPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </DPS.Footer>
        </Paper>

      </DPS.MainDiv>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return{
    goToLoginPage: () => dispatch(push(routes.LoginPage)),
    goToFeedPage: () => dispatch(push(routes.FeedPage)),
    goToHomePage: () => dispatch(push(routes.HomePage)),
  }
}

export default connect(null, mapDispatchToProps) (DisclaimerPage)