import React, { Component } from "react";
import * as PPS from "./PostPageStyles";
import MidLogo from "../Images/transparentreddit3.png"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import Paper from '@material-ui/core/Paper';
import { getPostDetails } from "../Actions/WebsiteActions";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { getPostDetails, goToLoginPage, goToHomePage, selectedPostID } = this.props
  

    const token = window.localStorage.getItem("token");

    if (token === null) {
      goToLoginPage();
    }

    if (selectedPostID === null) {
      goToHomePage();
    }

    getPostDetails(selectedPostID)
  }

  render() {
    return (
      <PPS.MainDiv>

        <Paper elevation={3}>
        <PPS.CustomHeader>
          <PPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <PPS.MidLogo src={MidLogo}/>
        </PPS.CustomHeader>
        </Paper>

      <div>
        essa eh a post page
      </div>


        <Paper elevation={3}>
        <PPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <PPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <PPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <PPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <PPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <PPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </PPS.Footer>
        </Paper>

      </PPS.MainDiv>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedPostID: state.posts.selectedPostID,
  postDetails: state.posts.postDetails,
})


function mapDispatchToProps(dispatch) {
  return{
    goToHomePage: () => dispatch(push(routes.HomePage)),
    goToLoginPage: () => dispatch(push(routes.LoginPage)),
    goToDisclaimerPage: () => dispatch(push(routes.DisclaimerPage)),
    goToFeedPage: () => dispatch(push(routes.FeedPage)),
    getPostDetails: (postID) => dispatch(getPostDetails(postID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (PostPage)