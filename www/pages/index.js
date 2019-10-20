import React from 'react'
import Layout from '../components/layout'
import { Component } from 'react';
import DisplayState from '../components/displayState'
import Form from '../components/form';
import fetch from 'isomorphic-unfetch';

class Home extends Component {

  constructor(props) {
    super(props)
    this.callDevApi = true;
    
    this.state = {
      loggedIn: 'none',
      results: 'no request made',
      passCreds: 'credsTwo',
      apiUrl: this.callDevApi ? process.env.LOCAL_USERAUTHAPI : process.env.USERAUTHAPI
    }
    this.cookies = 'No cookies set'
    this.showTestContent = true;
    this.testContent = {
      credsOne: {
        name: 'Cliff',
        email: 'cliff@cliff.cliff',
        password: 'somepasswordthatisstrong'
      },
      credsTwo: {
        name: 'test',
        email: 'test@test.test',
        password: 'testpassword'
      }
    }
  }

  componentDidMount = () => {
    document.addEventListener('submit', this.handleSubmit);
    this.showTestContent && this.populateTestContent();
  }

  handleSubmit = (ev) => {
    console.log('ev: ', ev);
    ev.preventDefault();
    this.postLoginCredentials({
      encoding: ev.target.encoding
    }, {
      email: ev.target.elements['email'].value,
      password: ev.target.elements['password'].value
    })
  }

  postLoginCredentials(headers, body) {
    
    
    const setHeaders = new Headers({
      'Content-Type': 'multipart/form-data',
      encoding: headers.encoding
    })
    console.log(body, setHeaders)
    console.log('body: ', body);
    fetch(`${this.state.apiUrl}/user/login`, {
      method: 'POST',
      body: body,
    }).then(ret => console.log(ret));
    console.log('fetch: ', fetch);


  }

  populateTestContent() {
    const inputs = document.getElementsByTagName('input');
    inputs['email'].value = this.testContent[this.state.passCreds].email;
    inputs['password'].value = this.testContent[this.state.passCreds].password;
  }

  render() {
    return (
      <Layout>
        <div className="d-flex">
          <Form callResource={this.state.apiUrl}/>
          <DisplayState state={this.state} cookies={this.cookies}/>
        </div>
      </Layout>
    )
  }
}

export default Home
