import todo_store, { filters } from '../../../store/TODO.store.js';


let element;

/**
 * @param {String} elementId - The ID of the HTML element where pending tasks will be rendered.
 * @description Render the pending tasks in the TODO app;
 */


export const render_Pending = ( elementId ) => {
    
    if (!element)
    element = document.querySelector(elementId);

    if (!element) 
        throw new Error(`Element not found: ${elementId}`);
    
    element.innerHTML = todo_store.get_TODO( todo_store.get_current_filter() || filters.pending ).length;
};