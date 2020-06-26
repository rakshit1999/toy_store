import React from 'react';
import {Redirect} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import CardContent from '@material-ui/core/CardContent';

export default class ToyDetails extends React.Component{

  render()
  {

    console.log(this.props.location.toy)
    
    if(!this.props.location.toy)
        return <Redirect to="/"/>

    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px",flexDirection:"column"}}>
            <Card onClick={this.handleButton} style={{width:"80%",marginTop:"30px"}}> 
        
                <img className="imgDetail" style={{width:"100%",height:"400px"}} src={this.props.location.toy.image} alt="pic" />
                <div style={{position:"absolute",marginTop:"-100px",marginLeft:"30px"}}>
                    <div style={{display:"flex",height:"30px",marginRight:"20px"}}>
                        <IconButton onClick={this.handleLikes} style={{color:"black"}} aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <p style={{color:"white",marginLeft:"-10px",marginTop:"10px"}}>{this.props.location.toy.likes} Favourite(s)</p>
                    </div>
                </div>
            </Card>
            <h4>{this.props.location.toy.description}</h4>
        </div>
    )

  }
}

