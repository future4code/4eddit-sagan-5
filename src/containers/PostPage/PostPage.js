import React, { Component } from "react";
import * as PPS from "./PostPageStyles";
import MidLogo from "../Images/transparentreddit3.png"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import Paper from '@material-ui/core/Paper';
import { getPostDetails, addScore,subScore, addScoreComment,subScoreComment} from "../Actions/WebsiteActions";
import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { getPostDetails, goToLoginPage, goToFeedPage, selectedPostID, addScore } = this.props


    const token = window.localStorage.getItem("token");

    if (token === null) {
      goToLoginPage();
    }

    if (selectedPostID === null) {
      goToFeedPage();
    }

    getPostDetails(selectedPostID)
  }

  render() {
    return (
      <PPS.MainDiv>

        <Paper elevation={3}>
          <PPS.CustomHeader>
            <PPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png" />
            <PPS.MidLogo src={MidLogo} />
          </PPS.CustomHeader>
        </Paper>

        <div>
          {console.log(this.props.postDetails)}
    
          <h3>{this.props.postDetails && this.props.postDetails.title}</h3>

          <PPS.FeedContainer>

            <PPS.DivTeste1>{this.props.postDetails && this.props.postDetails.text} </PPS.DivTeste1>

            <PPS.DivTeste3> {this.props.postDetails && this.props.postDetails.username}</PPS.DivTeste3>

            <PPS.DivTeste2>
              <IconButton aria-label="delete" size="small"  onClick={() => this.props.addScore(this.props.postDetails.id,this.props.postDetails.userVoteDirection)}>
                <ThumbUpIcon fontSize="inherit" color={this.props.postDetails.userVoteDirection === 1 ? "primary": ""} />
              </IconButton>

              {this.props.postDetails && this.props.postDetails.votesCount}

              <IconButton aria-label="delete" size="small"onClick={() => this.props.subScore(this.props.postDetails.id,this.props.postDetails.userVoteDirection)}>
                <ThumbDownIcon fontSize="inherit" color={this.props.postDetails.userVoteDirection === -1 ? "secondary": ""} />
              </IconButton>

            </PPS.DivTeste2>


          </PPS.FeedContainer>


        </div>
        <h3>Comentarios</h3>
        <Divider />

        <div>{this.props.postDetails.comments && this.props.postDetails.comments.map(comment =>(
        <PPS.FeedContainer>
              <PPS.DivTeste1 >{comment.text}</PPS.DivTeste1>

              <PPS.DivTeste2>
              <IconButton onClick={() => this.props.addScoreComment(this.props.selectedPostID,comment.userVoteDirection,comment.id)} aria-label="delete" size="small">
                <ThumbUpIcon  fontSize="inherit" color={comment.userVoteDirection === 1 ? "primary": ""}/> 
              </IconButton>

                {comment.votesCount ? comment.votesCount : "0"}

              <IconButton onClick={() => this.props.subScoreComment(this.props.selectedPostID,comment.userVoteDirection,comment.id)} aria-label="delete" size="small">
                <ThumbDownIcon  fontSize="inherit" color={comment.userVoteDirection === -1 ? "secondary": ""} />
              </IconButton>

              </PPS.DivTeste2>

              <PPS.DivTeste3>{comment.username}</PPS.DivTeste3>
            </PPS.FeedContainer>
         ))}
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
  return {
    goToHomePage: () => dispatch(push(routes.HomePage)),
    goToLoginPage: () => dispatch(push(routes.LoginPage)),
    goToDisclaimerPage: () => dispatch(push(routes.DisclaimerPage)),
    goToFeedPage: () => dispatch(push(routes.FeedPage)),
    getPostDetails: (postID) => dispatch(getPostDetails(postID)),
    addScore: (postID,userVoteDirection) => dispatch(addScore(postID,userVoteDirection)),
    subScore: (postID,userVoteDirection) => dispatch(subScore(postID,userVoteDirection)),
    addScoreComment:(postID,userVoteDirection,commentID) => dispatch(addScoreComment(postID,userVoteDirection,commentID)),
    subScoreComment:(postID,userVoteDirection,commentID) => dispatch(subScoreComment(postID,userVoteDirection,commentID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)