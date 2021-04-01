import * as React from 'react';

export interface SomeTESTProps {
    some : string
}
 
export interface SomeTESTState {
    some : string
}
 
class SomeTEST extends React.Component<SomeTESTProps, SomeTESTState> {
    state = { some: ''}
    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 
export default SomeTEST;

// import {createStore , combineReducers , applyMiddleware } from 'redux'
;

// import thunk from 'redux-thunk';
// import expensesReducer from '.'