import React, { Component } from "react";
import * as HPS from "./HomePageStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MidLogo from "../Images/transparentreddit3.png"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import Paper from '@material-ui/core/Paper';

class HomePage extends Component {
  render() {
    return (
      <HPS.MainDiv>

        <Paper elevation={3}>
        <HPS.CustomHeader>
          <HPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <HPS.MidLogo src={MidLogo}/>
        </HPS.CustomHeader>
        </Paper>

        <HPS.BodyTitle>
          Olá e seja bem vindo ao 4Reddit!
        </HPS.BodyTitle>

        <HPS.BigLogo src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c531.png" />

        <HPS.BodyDisclaimer>
          Ainda estamos em construção, mas fique a vontade para acessar outras partes de nosso site :)
        </HPS.BodyDisclaimer>

        <HPS.LinksContainer>
          <Button size="small" variant="contained">Ler disclaimer do site</Button>
          <Button onClick={this.props.goToLoginPage} size="small" variant="contained" color="primary">Pagina de Login</Button>
          <Button onClick={this.props.goToFeedPage} size="small" variant="contained">Dar uma olhada no feed</Button>
        </HPS.LinksContainer>

        <Paper elevation={3}>
        <HPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <HPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <HPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <HPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <HPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <HPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </HPS.Footer>
        </Paper>

      </HPS.MainDiv>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return{
    goToLoginPage: () =>dispatch(push(routes.LoginPage)),
    goToFeedPage: () => dispatch(push(routes.FeedPage)),
  }
}

export default connect(null, mapDispatchToProps) (HomePage)