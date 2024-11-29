import { Component } from "react";


class SongList extends Component{
    constructor(props){
        super(props);
        this.state={
       songs: [ 
                {name:"Almost home",id:1},
                {name:"Gospel",id:2},
                {name:"Love me like do.",id:3},

                
            ] ,
        input:"",
            
        }
    }

    handleChange=(e)=>{
        let data=e.target.value;
      this.setState(()=>({input:data}))
          
      }
  
      handleClick=()=>{
  const{songs,input}=this.state;
     const newSong={name:input,id:songs.length+1}
     this.setState(()=>(
       {
        songs:[...songs,newSong],
        input:"",
    }
     )) 
      }
     
    render(){
        return(
            <>
            {
                this.state.songs.map((song)=>(
                    <li key:id>{song.name}</li>
                )
                )
            }
                <input type="text" placeholder="Enter song name.. " value={this.input} onChange={this.handleChange}/>
                <button onClick={this.handleClick} >Add</button>
            </>
        );
    }
}
export default SongList;