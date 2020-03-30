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