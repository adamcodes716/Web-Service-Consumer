import React from 'react';
import ItemList from './ItemList';
// import { Dropdown } from 'office-ui-fabric-react';
//import axios from 'axios';

export default class ListHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:false,
      url: 'https://dummyapi.io/data/v1/user?page=1',
      prevUrl: null,
      prevLayout: null,
      layout: "Cards",  // default layout
      randomNumber : 20  // used for URL randomizer
    };

    this.handleLayoutChange = this.handleLayoutChange.bind(this);

  }  

  handleLayoutChange (event) { 
    //console.log("current layout in change ", this.state.layout); 
    var curLayout = this.state.layout;  // no idea why this step was necessary
    //this.setState( {prevLayout: this.state.layout} );
    this.setState( {prevLayout: curLayout} );
   // console.log ("changing the layout - target:", event.target.value);
    // this.setState( {prevLayout: this.state.layout} );
   //  console.log("Layout change PREV:  ", this.state.prevLayout);
     this.setState({layout: event.target.value }); 
      }

  render() {
    return (
      <React.Fragment>
        <h1>List Home</h1>
        < br />
        Both of these buttons will change state and thus 'render' is re-executed.  This includes URL change.
        <br /><br />
        <div className="row">
          <button onClick={this.handleUrlChange.bind(this)}> Change URL </button> 
        </div>
        <br /> 
        {/* The DropDown causes the "unsafe props" message in console but not when used in SP environment */}
          Layout:  <select  
            value={this.state.layout}   onChange={this.handleLayoutChange}>
            <option value="List">List</option>
            <option value="Cards">Cards</option>
          </select>
   
        <br />
        <ItemList {...this.state}  />
       </React.Fragment> 

    )}  

    componentDidMount()
  {
    this.getListing();
  }

  componentDidUpdate() {
      console.log ("component did update - ListHome");
      // ideally we would not get new data if only the layout changed
      if (this.state.prevUrl !== null && this.state.url !== this.state.prevUrl){
       // console.log ("in the if in the update - getting new listing");
        this.getListing();
        this.setState( {prevUrl: null} )
      }

      // ideally we would not get new data if only the layout changed
      if (this.state.prevLayout !== null && this.state.layout !== this.state.prevLayout){
     //   console.log ("in the layout update - getting new listing");
        this.getListing();
        this.setState( {prevLayout: null} )
      }
     }

    getListing() {
      let url = this.state.url;
      console.log ("URL being used", url);
      // let url = "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca";
       fetch(url, {
         method:'GET',
         headers:{
           'Accept':'application/json',
           'Content-Type':'application/json',
           'app-id': '61fb36655804c4d6f3f6bd6b'
         }
       }).then((result) => {
         result.json().then((resp)=>{
           //console.warn(resp);
           this.setState( {data:resp.data })
       })
       })
    }

    handleUrlChange() {
     // console.log ("changing the url");
      this.setState( {prevUrl: this.state.url } )
      var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
      var newURL = 'https://dummyapi.io/data/v1/user?page=1&limit=' + RandomNumber.toString() ;
     // console.log ("new URL", newURL);
      this.setState( {url: newURL } )
    }

    
   

}

