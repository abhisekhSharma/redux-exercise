import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'

class Counter extends Component {



    render() {
        console.log(this.props)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.results.map((result) => {
                        return <li>{result}</li>
                    })}

                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCRIMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECRIMENT }),
        onAdd: () => dispatch({ type: actionTypes.ADD, val: 5 }),
        onSubtract: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),
        onStoreResult: (res) => dispatch({ type: actionTypes.STORE_RESULT, result: res })

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);