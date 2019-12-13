import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Movieitem from './Movieitem';



class App extends Component {

    constructor(props){
      super(props)

      this.state ={rows: []}
    }

  search = (keyword)=>{
    console.log(keyword)
    var dataArray = []
    var url = "https://api.themoviedb.org/3/search/movie?api_key=33bd94334d538dbf614968c65c83250b&query=" + keyword;
    Axios.get(url).then(result=>{
      console.log(JSON.stringify(result.data.results))
      result.data.results.forEach(item => {
        item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
        dataArray.push(item)
      })

      this.setState({rows: dataArray});
    })
  }

  render() {
    return (
    <div className="App">
    <table className="NavBar">
      <tbody>
        <tr>
        <td>
            <img src={require('./logo.svg')} width="50"/>
          </td>
          <td>
            Hello React
          </td>
        </tr>
      </tbody>
    </table>
    <input style={{fontSize: 24, display: 'block', width: '100%', paddingLeft: 8}} placeholder="Enter your movie keyword"
    onChange={(event)=> { this.search(event.target.value)}}/>
    
    { this.state.rows.map(item=>
        <Movieitem movie={item} />
     )}


    </div>



  );
  }
  
} 



export default App;
