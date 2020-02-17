import React, { Component } from 'react';
import Gallery from '../../components/Gallery';


export default class Listing extends Component {
     constructor(props) {
          super(props)
          this.state = {
               user: props.user,
               styleProp: 'absolute'
          }
     }

     componentDidMount() {

     }

     render() {
          return (
          <div>
               
               <Gallery />
               
          </div>
          )
     }

};