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
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { getPosts } from '../Actions/WebsiteActions';


class FeedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getPosts();
  }


  render() { 
    return (
      <FPS.MainDiv>
          
        <Paper elevation={3}>
        <FPS.CustomHeader>
          <FPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <FPS.MidLogo src={MidLogo}/>
        </FPS.CustomHeader>
        </Paper>

        <FPS.NewPostDisclaimer>
          CRIE SEU PROPRIO POST! :D
        </FPS.NewPostDisclaimer>

        <FPS.NewPostContainer>
          <TextField 
            required
            label="Titulo do Post"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            required
            label="Conteudo do Post"
            fullWidth
            multiline="true"
            rows="4"
            margin="normal"
            variant="outlined"
          />

          <Button variant="contained" color="primary" size="small">Postar</Button>
        </FPS.NewPostContainer>

        <Divider />

        <FPS.FeedContainerDisclaimer>
          Ultimos Posts:
        </FPS.FeedContainerDisclaimer>

 
          {this.props.posts.map(post => (
            <FPS.FeedContainer>
              <FPS.DivTeste1>{post.title}</FPS.DivTeste1>
              <FPS.DivTeste2>{post.votesCount}</FPS.DivTeste2>
              <FPS.DivTeste3>{post.username}</FPS.DivTeste3>
            </FPS.FeedContainer>
          ))}

        <Paper elevation={3}>
        <FPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <FPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <FPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <FPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <FPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <FPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </FPS.Footer>
        </Paper>

      </FPS.MainDiv>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.postList
})

function mapDispatchToProps(dispatch){
    return{
        goToHomePage: () => dispatch(push(routes.HomePage)),
        getPosts: () => dispatch(getPosts()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (FeedPage)