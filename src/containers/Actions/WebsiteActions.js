import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../Router';

const baseURL = 'https://us-central1-future-apis.cloudfunctions.net/fourEddit'
const baseAuth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlphR1dLRWRjZXlaWjlORkxPUGgxIiwiZW1haWwiOiJwZWRyby5kYXJ2YXNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJkYXJ2YXMiLCJpYXQiOjE1NzM1Nzk5MTd9.sKiIIRgiQm2qesnrNmFujNlXF02ytx-IvLKnNFHqXgA'

const setPosts = (posts) => ({
	type: 'SET_POSTS',
	payload: {
		posts
	}
})

export const getPosts = () => async (dispatch) => {
	try {
        const response = await axios.get(`${baseURL}/posts`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
		dispatch(setPosts(response.data.posts))
	} catch (error) {
		console.log(error)
		alert('Erro ao tentar adquirir lista de posts')
	}
}

export const createPost = (postData) => async (dispatch) => {
	try{
		await axios.post(`${baseURL}/posts`, postData, {
			headers: {
				auth: localStorage.getItem("token")
			}, 
		})
		alert('Post criado com sucesso!')
		dispatch(getPosts())
	}
	catch (error){
		console.error(error)
		alert('Erro ao tentar criar post')
	}
}

export const setSelectedPostIDAndPush = (postID) => async (dispatch) => {
	dispatch(setSelectedPost(postID))
	dispatch(push(routes.PostPage))
}

const setSelectedPost = (postID) => ({
	type: 'SET_SELECTED_POST',
	payload: {
		postID
	}
})

const setPostDetails = (postDetails) => ({
	type: 'SET_POST_DETAILS',
	payload: {
		postDetails
	}
})

export const getPostDetails = (postID) => async (dispatch) => {
	try {
        const response = await axios.get(`${baseURL}/posts/${postID}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
		})
		console.log(response.data.post)
		dispatch(setPostDetails(response.data.post))
	} catch (error) {
		console.log(error)
		alert('Erro ao tentar adquirir detalhes sobre o post')
	}
}

export const setSelectedPostID = (postID) => async (dispatch) => {
	dispatch(setSelectedPost(postID))
}

const setAddScore = (postID) => ({
	type: 'ADD_SCORE',
	payload: {
		postID
	}
})

export const addScore = (postID,userVoteDirection) => async (dispatch) => {
	debugger
	let direction = 1;
	console.log(userVoteDirection)
	if(userVoteDirection === 1){
		direction = 0;
   }
	
	try {
		console.log(postID)
		 await axios.put(`${baseURL}/posts/${postID}/vote`, 
		{
			direction	
		},{
            headers: {
                auth: localStorage.getItem("token")
            }
		})
		alert('Like dado com sucesso!')
		dispatch(getPosts())
	} catch (error) {
	
		console.log(error);
		alert('Erro ao tentar dar like')
	}
}
const setSubScore = (postID) => ({
	type: 'SUB_SCORE',
	payload: {
		postID
	}
})

export const subScore = (postID,userVoteDirection) => async (dispatch) => {
	let direction = -1
	debugger
	console.log(userVoteDirection)
	if(userVoteDirection === -1){
		 direction = 0;
	}
	
		
	
	
	try {
		console.log(postID)
		 await axios.put(`${baseURL}/posts/${postID}/vote`, 
		{
			direction	
		},{
            headers: {
                auth: localStorage.getItem("token")
            }
		})
		alert('Like dado com sucesso!')
		dispatch(getPosts())
	} catch (error) {
	
		console.log(error);
		alert('Erro ao tentar dar like')
	}
}