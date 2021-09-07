import react,{Component} from "react";

class Button extends Component{
    constructor(props)
    {
        super(props)
    }
    render(){
    return(
        <div className={`column-${this.props.cols}`}
        ><button className="bt1" onClick={()=>this.props.action(this.props.symbol)}>{this.props.symbol}</button></div>
    )
    }
}
export default Button;