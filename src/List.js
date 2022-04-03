import { useReducer } from 'react'

const [state, dispatch] = (reducer, initialArg, init)

const initialCompletionState = { className : ''};

function reducer(state, action) {
    switch(action.type) {
        case 'incomplete':
            return {className: state.className = ''};
        case 'complete':
            return {className: state.className = 'done'}; 
    }
}

function Completed(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <li className='done'>Todo Item 1 (Done example)<span> <i className="fa fa-trash"></i></span></li>
    )
}

export default Completed;