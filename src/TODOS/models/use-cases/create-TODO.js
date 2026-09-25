import { Todo } from '../TODO.model.js';

/**
 * @param {Todo} todo
 * @returns {string}
 */
export const create_TODO_HTML = ( todo ) => {
    if ( !todo ) throw new Error('TODO object is required');

    const { done, description, id } = todo;

    const html = `  <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
        
            <li>
                <div class="view">
                    <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
                    <label>${description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li>           
        `;
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', todo.id);
    
    liElement.classList.toggle('completed', todo.done);


    return liElement;
};