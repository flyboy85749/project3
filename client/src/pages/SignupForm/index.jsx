import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './signup.css';
import Footer from "../../components/Footer";

export default class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			admin: false,			
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleCheck = this.handleCheck.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleCheck (event) {
		this.setState((prevState) => {
		   return {
			  ...prevState,
			  status: !prevState.status
		   }
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password,
				admin: this.state.admin
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('you are good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
				<h1>Signup form</h1>
				<br />
				<br />
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<br />
				<br />
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<br />
				<br />
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<br />
				<br />
				<label htmlFor="admin">Landlord or Industry Professional? </label>
				<input
					type="checkbox"
					name="admin"
					value={this.state.admin}
					onChange={this.handleCheck}
				/>
				<br />
				<br />
				<button onClick={this.handleSubmit}>Sign up</button>
				<Footer/>
			</div>
		)
	}
}
