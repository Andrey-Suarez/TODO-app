import { Todo } from '../TODO.model.js';
import { create_TODO_HTML } from './create-TODO.js';

let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */

export const render_TODO = ( elementId, todos = [] ) => {
    // console.log('Render TODO', elementId, todos);

        if ( !element ) 
            element = document.querySelector ( elementId )

        if ( !element ) throw new Error(`Element with id ${ elementId } not found`);

        element.innerHTML = '';

    //TODO: Referencia al elemento HTML donde se va a renderizar la lista de TODOs

    todos.forEach( todo => { 
        element.append (create_TODO_HTML(todo));
    });
}