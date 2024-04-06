import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/Card.css"
export const Card =(props) => {
 return(

    <div className="card">
        <img src= {props.imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="title">{props.title}</h5>
            <p className="content"> {props.content}</p>
            
            
         </div>
    </div>
 )

};
Card.propTypes={
   imgurl: PropTypes.string,
   title: PropTypes.string,
   content:PropTypes.string,

}