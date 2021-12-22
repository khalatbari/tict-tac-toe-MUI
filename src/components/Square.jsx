//import React, { Component } from 'react';
import {Button} from '@mui/material';

function Square(props) {
  return (
    <Button 
    sx={{border:2, fontSize:70}}  variant = "outlined" fontSize = "inherit" Height={100} Width={100} size = "large" Style="font_size:4em; Width:100px; Height:100px"
    onClick={props.onClick}>
      {props.value}
    </Button>
  );
}

//class Square extends React.Component {
    /*constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }*/

//    render() {
//     return (
       // <button className="square">//{/* TODO */}//</button>//<IconButton><LocationOnIcon/></IconButton>
//      <Button variant = "outlined" size = "large" onClick={() => this.props.onClick()}>
//        {this.props.value}
//      </Button>
//      );
//    }
//  }

  export default Square;