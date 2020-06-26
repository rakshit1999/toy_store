import React from 'react';
import ToyCard from './ToyCard'
import {Button} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

export default class Cards extends React.Component{

  state={
    value:1.5,
    images:this.props.images,
    search:"",
    checked1:false,
    checked2:false,
    featured:""
  }

  handleAdd = () =>{
    let toy = this.props.images[Math.floor(Math.random() * this.props.images.length)]
    let newToy = {...toy}
    newToy.id=this.state.images.length+1
    this.setState({images:[newToy,...this.state.images]})
  }

  deleteToy = (id)=>{
      let images = this.state.images.filter(img=>img.id!==id)
      this.setState({images})
  }

  handleSliderChange = (event, newValue) => {
    this.setState({value:newValue})
  }

  handleDropdown = (e) =>{
    this.setState({featured:e.target.value})
  }

  handleCheck1 = ()=>{
      this.setState({checked1:!this.state.checked1})
  }
  handleCheck2 = ()=>{
    this.setState({checked2:!this.state.checked2})
}

  handleRefresh = ()=>{
    this.setState({images:this.props.images})
  }

  handleChange = (e) =>{
    this.setState({search:e.target.value})
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    console.log(this.state.search)
    let images=this.state.images.filter(img=>(this.state.featured?this.state.featured==="YES"?img.featured===true:img.featured===false:true)&&(this.state.checked1?img.brand==="DC":true)&&(this.state.checked2?img.brand==="Marvel":true)&&(img.rating>=this.state.value)&&(img.name.toLowerCase().includes(this.state.search.toLowerCase())))
    this.setState({images:images})
  }

  render()
  {

    console.log(this.state.images)

    return(

        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h2>Greatest Toys Store</h2>
        <p style={{marginTop:"-10px"}}>This is the collection of the largest and the baddest toys</p>
        <form onSubmit={this.handleSubmit} style={{display:"flex",width:"90%",margin:"30px",alignItems:"center",flexWrap:"wrap"}}>
          <input onChange={this.handleChange} style={{width:"300px",marginRight:"20px",height:"20px"}} placeholder="What are you looking for ?"/>
          <br></br>
          <br></br>
          <br></br>
          <select onChange={this.handleDropdown} style={{width:"300px",marginRight:"30px",height:"27.5px"}}>
            <option style={{display:"none"}}>Featured</option>
            <option>YES</option>
            <option>NO</option>
          </select>
          <p>Rating : {this.state.value}</p>
          <Slider
            max={5}
            step={0.1}
            style={{width:"40%",marginLeft:"30px"}}
            value={this.state.value}
            onChange={this.handleSliderChange}
            aria-labelledby="input-slider"
          />
        </form>

        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"90%",alignItems:"center"}}>
          <div>
            <p>Filter by Brand</p>
            <div style={{display:"flex",alignItems:"center"}}>
              <input onChange={this.handleCheck1} checked={this.state.checked1} style={{backgroundColor:"red"}} type="checkbox" />
              <p style={{marginRight:"15px",marginLeft:"5px"}}>DC Comics</p>
              
              <input onChange={this.handleCheck2} checked={this.state.checked2} style={{backgroundColor:"red"}} type="checkbox" />
              <p style={{marginLeft:"5px"}}>Marvel</p>
            </div>
          </div>

          <div style={{marginBottom:"10px"}}>
            <button onClick={this.handleRefresh} style={{height:"40px",width:"100px",marginRight:"20px",cursor:"pointer"}}>
                Refresh
            </button>
            <button style={{height:"40px",width:"100px",cursor:"pointer"}} onClick={this.handleSubmit}>
                Search
            </button>
          </div>

          <Button onClick={this.handleAdd} color="primary" variant="contained" style={{marginRight:"50px"}}>
            + Add
          </Button>
        </div>

        <div style={{display:"flex",width:"90%",flexWrap:"wrap",marginBottom:"30px"}}>
          {this.state.images.map(imageData=>{
              return <ToyCard key={imageData.id} imageData={imageData} deleteToy={this.deleteToy} />
          })}
        </div>

      </div>
    )

  }
}

