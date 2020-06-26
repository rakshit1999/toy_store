import React from 'react';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


export default class ToyCard extends React.Component{

  state={
    likes:this.props.imageData.likes,
    showButtons:false
  }

  handleLikes = () =>{
    this.setState({likes:this.state.likes+1})
  }

  handleButton = ()=>{
    this.setState({showButtons:true})
  }


  render()
  {

    return(
      <Card onClick={this.handleButton} style={{width:"300px",height:"300px",marginRight:"35px",marginTop:"30px"}}>

        {this.state.showButtons?<div style={{position:"relative",marginBottom:"-50px",zIndex:21}}>
          <IconButton>
            <EditOutlinedIcon />
          </IconButton>
          <IconButton onClick={()=>{this.props.deleteToy(this.props.imageData.id)}} style={{marginLeft:"-20px"}}>
            <DeleteOutlinedIcon />
          </IconButton>
        </div>:null}
          

        <div style={{width:"300px",position:"absolute"}}>
          <div style={{width:"60px",display:"flex",backgroundColor:"rgb(0,0,0,0.5)",borderRadius:"20px",height:"30px",float:"right",marginRight:"20px",marginTop:"20px"}}>
            <IconButton onClick={this.handleLikes} style={{color:"white"}} aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <p style={{color:"white",marginLeft:"-10px",marginTop:"10px"}}>{this.state.likes}</p>
          </div>
        </div>

        <div style={{position:"absolute",marginLeft:"25px",marginTop:"80px",color:"white"}}>
        {this.props.imageData.featured?<p style={{backgroundColor:"DeepPink",padding:"5px",fontSize:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"2px"}}>FEATURED</p>:null}
          <p style={{fontSize:"20px"}}>{this.props.imageData.name}</p>
        </div>
      
        <img style={{width:"100%",height:"200px"}} src={this.props.imageData.image} alt="pic1" />
        <CardContent>
        <Rating
          name="read-only"
          readOnly
          value={this.props.imageData.rating}
        />
        <div style={{width:"270px",backgroundColor:"black",height:"30px",display:"flex",alignItems:"center",borderRadius:"10px"}}>
          <Link style={{textDecoration:"none",color:"white",paddingLeft:"90px",paddingRight:"90px"}} to={{pathname:"/details",toy:this.props.imageData}}>More Details</Link>
        </div>
        </CardContent>
      </Card>
    )

  }
}

