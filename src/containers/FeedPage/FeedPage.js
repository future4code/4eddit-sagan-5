import React, { Component } from "react";
import * as FPS from "./FeedPageStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MidLogo from "../Images/transparentreddit3.png"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';


class FeedPage extends Component {
  render() {
    return (
      <FPS.MainDiv>
          
        <FPS.CustomHeader>
          <FPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <FPS.MidLogo src={MidLogo}/>
        </FPS.CustomHeader>

        <div>
            <TextField>Teste do post</TextField>
            <button>Postar!</button>
        </div>

        <FPS.FeedContainer>            
            <FPS.DivTeste1>Eu quero casar com a garota que segurou minha mao!</FPS.DivTeste1>
            <FPS.DivTeste2> <ThumbUpIcon color="primary" /> 50 <ThumbDownIcon color="secondary" /></FPS.DivTeste2>
            <FPS.DivTeste3>Ted Mosby</FPS.DivTeste3>
            <FPS.DivTeste1>Meu gato comeu meu dever de casa!</FPS.DivTeste1>
            <FPS.DivTeste2> <ThumbUpIcon color="primary" /> 15674 <ThumbDownIcon color="secondary" /></FPS.DivTeste2>
            <FPS.DivTeste3>Nerd Aleatorio 37</FPS.DivTeste3>
            <FPS.DivTeste1>Vrum Vrum na motoserra</FPS.DivTeste1>
            <FPS.DivTeste2> <ThumbUpIcon color="primary" /> 666 <ThumbDownIcon color="secondary" /></FPS.DivTeste2>
            <FPS.DivTeste3>DOOMSlayer</FPS.DivTeste3>
        </FPS.FeedContainer>

        <FPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <FPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <FPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <FPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <FPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <FPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </FPS.Footer>

      </FPS.MainDiv>
    );
  }
}

function mapDispatchToProps(dispatch){
    return{
        goToHomePage: () => dispatch(push(routes.HomePage)),
    }
}
export default connect(null, mapDispatchToProps) (FeedPage)