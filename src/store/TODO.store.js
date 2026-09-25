import { Todo } from '../TODOS/models/TODO.model.js';

export const filters = {
    All: 'all',
    completed: 'completed',
    pending: 'pending'
};

const state = {
    todo: [
        new Todo('Tarea inicial'),
        new Todo('TODO: test'),
    ],
    filter: filters.All,
};

const init_store = () => {
    load_store();
    console.log('init_store 🔃');
};

const load_store = () => {
    if ( !localStorage.getItem('state') ) return;
    const { todo, filter } = JSON.parse(localStorage.getItem('state'));
    state.todo   = todo;
    state.filter = filter;
    console.log('load_store 🍵');
};

const session_store = () => {
    localStorage.setItem('state', JSON.stringify(state));
};

const get_TODO = ( filter = filters.All ) => {
    switch ( filter ) {
        case filters.All:
            return [...state.todo];

        case filters.completed:
            return state.todo.filter(todo => todo.done);

        case filters.pending:
            return state.todo.filter(todo => !todo.done);

        default:
            throw new Error(`Opcion de ${ filter } no es valida`);
    }
}

/**
 * @typedef {'all' | 'completed' | 'pending'} FilterValue
 */

/**
 * @param {String} description
 * @returns {Void}
 */
const add_TODO = ( description ) => {
    if ( !description ) 
        throw new Error('Description es requerida');
    state.todo.push(new Todo(description));
    session_store();
}

/**
 * @param {number} id
 * @returns {void}
 */
const toggle_TODO = ( id ) => {
    state.todo = state.todo.map( todo => {
        if ( todo.id === id ) {
            todo.done = !todo.done;
        } return todo;
    });
    session_store();
}

/**
 * @param {number} id
 * @returns {void}
 */
const clear_TODO = ( id ) => {
    state.todo = state.todo.filter( todo => todo.id !== id );
    session_store();
}

/**
 * @returns {void}
 */
const clear_completed = () => {
    state.todo = state.todo.filter( todo => !todo.done );
    session_store();
}

/**
 * @param {FilterValue} new_filter
 * @returns {void}
 */
const set_filter = ( new_filter = filters.All ) => {
    if (!Object.values(filters).includes(new_filter)) throw new Error(`Filter ${ new_filter } no es valido`);
    state.filter = new_filter;
    session_store();
}

/**
 * @returns {FilterValue}
 */
const get_current_filter = () => {
    return state.filter;
    // save_state_TODO_local_store();
}


export default { init_store, load_store, session_store, add_TODO, get_TODO, toggle_TODO, clear_TODO, clear_completed, set_filter, get_current_filter, state, filters };