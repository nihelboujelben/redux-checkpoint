import React from 'react';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';


const Counter = (props) => {


    const increment = () => {
        props.dispatch({ type: "INCREMENT" })
    };

    const decrement = () => {
        props.dispatch({ type: "DECREMENT" })
    };

    const reset = () => {
        props.dispatch({ type: "RESET" })
    };




    return (<div className="d-flex justify-content-center">

        <h1>Counter</h1>
        <button type="button" className="btn btn-success" onClick={() => increment()}>+</button>
        <button type="button" className="btn btn-danger" onClick={() => decrement()}>-</button>
        <span>{props.count}</span>
        <button className="btn btn-primary" type="reset" value="Reset" onClick={() => reset()} >Reset</button>
    </div>);
}


const mapStateToProps = state => {
    return {
        count: state.count
    }
}




export default connect(mapStateToProps)(Counter);