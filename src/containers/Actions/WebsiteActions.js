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
                auth: `${baseAuth}`
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

export const getPostDetails = (postID) => async (dispatch) => {
	try {
		console.log(postID)
        const response = await axios.get(`${baseURL}/posts/${postID}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
		})
		console.log(response.data)
	} catch (error) {
		console.log(error)
		alert('Erro ao tentar adquirir detalhes sobre o post')
	}
}