import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Page from './components/Page'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import HomePage from './pages/Home'
import { NavBar } from './components'
import AddTenant from './components/AddTenant'
import ContactForm from './components/ContactForm'
import Newproperty from './components/Newproperty'
import BlackList from './pages/BlacklistPage'
import TenantCard from './components/Tenant'
import Footer from './components/Footer'
import Resources from './pages/Resources'

import Property from './components/Property'
// import {db} from './db/db'
import Gallery from './components/Gallery'
// import Dropzone from './components/Upload/index'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: 1,
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
	};

	componentDidMount() {
		axios.get('/auth/user').then(response => {
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	};

	_logout(event) {
		event.preventDefault()
		axios.post('/auth/logout').then(response => {
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				if (response.status === 200) {
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div className="">

				{/* Navbar on every page */}
				<NavBar
					_logout={this._logout}
					loggedIn={this.state.loggedIn}
				/>
				<Footer />
				{/*  Individual Things */}
				<Route
					exact
					path="/"
					render={props => (
						<Page {...props} component={HomePage} title="Slumlords R Us - Home" />
					  )}
				/>

{/* exact
  path="/"
  render={props => (
    <Page {...props} component={HomePage} title="Slumlords R Us - Home" />
  )} */}
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route
					exact path="/signup"
					render={props => (
						<Page {...props} component={SignupForm} title="Slumlords R Us - Signup" />
					  )}
				/>
				<Route
					exact path="/resources"
					render={props => (
						<Page {...props} component={Resources} title="Slumlords R Us - Resources" />
					  )}
				/>
				<Route
					exact path="/listings"
					render={props => (
						<Page {...props} component={Property} title="Slumlords R Us - Current Listings" />
					  )}
				/>
				<Route
					exact path="/Test"
					render={() => <Gallery />
					}
				/>
				<Route
					exact path="/ManageTenants"
					render={props => (
						<Page {...props} component={AddTenant} title="Slumlords R Us - Add Tenant" />
					  )}
				/>
				<Route
					exact path="/ManageProperties"
					render={() => <Newproperty title="Slumlords R Us - Manage Properties" />}
				/>
				<Route
					exact path="/Blacklist"
					render={() => <BlackList title="Slumlords R Us - Blacklist" />}
				/>

				<Route
					exact path="/api/tenants"
					render={() => <TenantCard />}
				/>
				<Route
					exact path="/Properties"
					render={() => <Property />}
				/>
				<Route
					exact path="/Resources"
					render={() => <Resources title="Slumlords R Us - Resources" />}
				/>
				<Route
					exact path="/Contact"
					render={props => (
						<Page {...props} component={ContactForm} title="Slumlords R Us - Contact Us" />
					  )}
				/>
				{/* {db.properties.mapi((item, index) => {
					return <PropertyCard key={index} data={item}/>
				})} */}
			</div>
		)
	}
}

export default App
