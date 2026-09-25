import html from './apps.html?raw';
import todo_store, { filters } from '../store/TODO.store.js';
import { render_TODO, render_Pending } from './models/use-cases/barril.js';

const elementIDs = {
        clear_completed: '.clear-completed',
        todo_container: '#todo-container',
        new_todo_input: '#new-todo-input',
        todo_selecter: '.filtro',
        pending_count_label: '#pending-count'
}

/** 
 * @param {String} elementId
 */

export const Apps = ( elementId ) => {

        const display_TODO = () => {
                const todos = todo_store.get_TODO( todo_store.get_current_filter() );
                console.log(todos);
                render_TODO( elementIDs.todo_container, todos );
                upd_Pending_count();
        }

        const upd_Pending_count = () => {
           render_Pending( elementIDs.pending_count_label );
        }

        // Cuando la funcion Apps()  se llama
        (() => {
            const apps = document.createElement('div');
                  apps.innerHTML = html;  
                  document.querySelector(elementId).append(apps);
                  display_TODO();
        })();

        // Referencias HTML
        const clear_completed_button = document.querySelector( elementIDs.clear_completed );
        const filters_UL     = document.querySelectorAll( elementIDs.todo_selecter );
        const new_todo_input = document.querySelector( elementIDs.new_todo_input );
        const todo_list_UL   = document.querySelector( elementIDs.todo_container );

        // Listeners

        
        if ( clear_completed_button ) {
                clear_completed_button.addEventListener('click', () => {
                        todo_store.clear_completed();
                        display_TODO();
                });
        };

        filters_UL.forEach( element => {
                element.addEventListener('click', ( element ) => {
                        filters_UL.forEach( el => el.classList.remove('selected') );
                        element.target.classList.add('selected');

                                switch ( element.target.selectorText ) {
                                        case 'Todos':
                                                todo_store.set_filter( todo_store.filters.All );
                                        case 'Pendientes':
                                                todo_store.set_filter( todo_store.filters.pending );
                                        case 'Completados':
                                                todo_store.set_filter( todo_store.filters.completed );
                                        Return;
                                        

                        console.log('Establecido a:', element.target.textContent);
                        display_TODO();
        }});
        });

        new_todo_input.addEventListener('keyup', ( event ) => {
                console.log( event.keyCode );


                if ( event.keyCode === 13 ) {
                        try {
                                if (event.target.value.trim().length === 0) {
                                        throw new Error('La tarea no puede estar vacía');
                                }
                                todo_store.add_TODO( event.target.value.trim() );
                                new_todo_input.value = '';
                                display_TODO();
                        } catch  (error) {
                                console.error(error)   ||
                                  alert(error.message) || 
                                    new Error('idk error');
                        }                              
                }
        });

        todo_list_UL.addEventListener('click', ( event ) => {
                
                const element = event.target.closest('[data-id]');
                todo_store.toggle_TODO( element.getAttribute('data-id') );
                console.log( event.target );
                display_TODO();
        });

        todo_list_UL.addEventListener('click', ( event ) => {
                const element = event.target.closest('[data-id]');
                const destroy_X = event.target.classList.contains('destroy');

        if ( !destroy_X || !element ) return;
                todo_store.clear_TODO( element.getAttribute('data-id') );
                console.log( event.target );
                display_TODO();
                
        });

};
