import {Component} from 'react'
import './Clock.css'

class Clock extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={date: new Date()}
    //     console.log("constructor is called");
    // }


    state={date: new Date()}

    componentDidMount(){
        this.timerId=setInterval(this.tick,1000);
        console.log("componentdigmount is called");
    }

    tick=()=>{
        this.setState({date:new Date()})
    }

    componentWillUnmount(){
        console.log("component will unmount");

        clearInterval(this.timerId);
    }
    
  render() {
    const {date}=this.state
    console.log("render called",date);
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
        
      </div>
    )
  }
}
export default Clock
