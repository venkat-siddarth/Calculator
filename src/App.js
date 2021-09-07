import react,{Component} from "react";
import Button from "./components/button"
import "./css/style.css"
class mycomp extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            current:'',
            previous:[],
            nextIsReset:false
        }
    }
    calc=(symbol)=>{
        let {current,previous,nextIsReset}=this.state;
        try{
            current=eval(previous[previous.length-1]+current);
            this.setState({current,previous:[],nextIsReset:true})
        }
        catch(e)
        {
            this.setState({ current: "error", previous: [], nextIsReset: true})
        }

    }
    reset=()=>{
        console.log("I am here")
        this.setState({current:'',previous:[],nextIsReset:false})
    }
    addToCurrent=(symbol)=> {
        console.log("I am here")
        if(["/","-","+","*"].indexOf(symbol)>-1){
            let {previous}= this.state;
            previous.push(this.state.current+symbol)
            this.setState({current:"",previous,nextIsReset:true})
        }
        else{
        this.setState({current: this.state.current+symbol})
        }
    }

    render(){
        const buttons=[
            {symbol:'C',cols:3,action:this.reset},
            {symbol:'/',cols:1,action:this.addToCurrent},
            {symbol: '7', cols: 1, action: this.addToCurrent},
            { symbol: '8', cols: 1, action: this.addToCurrent },
            { symbol: '9', cols: 1, action: this.addToCurrent },
            {symbol: '*', cols: 1, action: this.addToCurrent},
            {symbol: '4', cols: 1, action: this.addToCurrent},
            {symbol: '5', cols: 1, action: this.addToCurrent},
            { symbol: '6', cols: 1, action: this.addToCurrent },
            {symbol: '-', cols: 1, action: this.addToCurrent},
            {symbol: '1', cols: 1, action: this.addToCurrent},
            { symbol: '2', cols: 1, action: this.addToCurrent },
            { symbol: '3', cols: 1, action: this.addToCurrent },
            {symbol: '+', cols: 1, action: this.addToCurrent},
            {symbol: '0', cols: 2, action: this.addToCurrent},
            {symbol: '.', cols: 1, action: this.addToCurrent},
            {symbol: '=', cols: 1, action: this.calc}
        ]
        return (
        <div className="App">
            {
                    this.state.previous.length > 0 ? <div className="hist-data">{this.state.previous[this.state.previous.length-1]}</div>:
                    null
            }
            <input type="text" className="result" placeholder="Result" value={this.state.current} ></input>
            {
                buttons.map((btn,i)=>{
                    return<Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol)=>btn.action(symbol)}></Button>
                })
            }



        </div>);
    }
}
export default mycomp;
