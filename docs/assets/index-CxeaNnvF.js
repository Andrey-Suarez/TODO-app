(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input class="new-todo" id="new-todo-input" placeholder="¿Qué necesita ser hecho?" autofocus>\r
        <!-- <link rel="stylesheet" href="./src/TODO/style.css"> -->\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul id="todo-container" class="todo-list">\r
           \r
           \r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count">Tienes <strong id="pending-count">0</strong> tareas pendientes</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="https://www.youtube.com/@V33-X3L">VEE-X3L</a></p>\r
    <p>Con ayuda de <a href="https://cursos.devtalles.com/?gad_source=1&gad_campaignid=24344925500&gbraid=0AAAABBtRWq-m-S-ckKRMigLLEmILagwAB&gclid=Cj0KCQjwrvHWBhDKARIsABmp7h398ZXdZtPFDd-0ds1sED3VLoQqKvSVegRKstKXnh08dfRd5dyvSNwaAnoLEALw_wcB">Fernando Herrera</a></p>\r
    <p>Hecho para <a href="https://www.youtube.com/@TazoLaTaza">Tazo la taza!</a></p>\r
    <!-- <p>Parte de <a href="http://todomvc.com">Todomvc</a></p> -->\r
</footer>`,t=class{constructor(e){this.id=crypto.randomUUID(),this.description=e,this.done=!1,this.create_at=new Date}},n={All:`all`,completed:`completed`,pending:`pending`},r={todo:[new t(`Tarea inicial`),new t(`TODO: test`)],filter:n.All},i=()=>{a(),console.log(`init_store 🔃`)},a=()=>{if(!localStorage.getItem(`state`))return;let{todo:e,filter:t}=JSON.parse(localStorage.getItem(`state`));r.todo=e,r.filter=t,console.log(`load_store 🍵`)},o=()=>{localStorage.setItem(`state`,JSON.stringify(r))},s={init_store:i,load_store:a,session_store:o,add_TODO:e=>{if(!e)throw Error(`Description es requerida`);r.todo.push(new t(e)),o()},get_TODO:(e=n.All)=>{switch(e){case n.All:return[...r.todo];case n.completed:return r.todo.filter(e=>e.done);case n.pending:return r.todo.filter(e=>!e.done);default:throw Error(`Opcion de ${e} no es valida`)}},toggle_TODO:e=>{r.todo=r.todo.map(t=>(t.id===e&&(t.done=!t.done),t)),o()},clear_TODO:e=>{r.todo=r.todo.filter(t=>t.id!==e),o()},clear_completed:()=>{r.todo=r.todo.filter(e=>!e.done),o()},set_filter:(e=n.All)=>{if(!Object.values(n).includes(e))throw Error(`Filter ${e} no es valido`);r.filter=e,o()},get_current_filter:()=>r.filter,state:r,filters:n},c=e=>{if(!e)throw Error(`TODO object is required`);let{done:t,description:n,id:r}=e,i=`  <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
        
            <li>
                <div class="view">
                    <input class="toggle" type="checkbox" ${t?`checked`:``}>
                    <label>${n}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li>           
        `,a=document.createElement(`li`);return a.innerHTML=i,a.setAttribute(`data-id`,e.id),a.classList.toggle(`completed`,e.done),a},l,u=e=>{if(l||=document.querySelector(e),!l)throw Error(`Element not found: ${e}`);l.innerHTML=s.get_TODO(n.pending).length},d,f=(e,t=[])=>{if(d||=document.querySelector(e),!d)throw Error(`Element with id ${e} not found`);d.innerHTML=``,t.forEach(e=>{d.append(c(e))})},p=Math.floor(Math.random()*8)+1,m=()=>{let e=document.querySelector(`h1`),t=Number(localStorage.getItem(`keyTazo`));if(!e)throw Error(`Title element not found`);for(;p===t;)p=Math.floor(Math.random()*8)+1;switch(p){case 1:e.textContent=`Hey Tazo! Everything aight?`;break;case 2:e.textContent=`What do you have in mind, Tazo?`;break;case 3:e.textContent=`Synx-Null is coming soon!`;break;case 4:e.textContent=`Broken Secrets TODO here!`;break;case 5:e.textContent=`Remember, 8/8/28 decayedTeam.push('VEE-X3L')`;break;case 6:e.textContent=`Any ideas for Decayed Reality?`;break;case 7:e.textContent=`WITHER STORM`;break;case 8:e.textContent=`Add Persom ideas here!`;break;default:throw Error(`Invalid title key: ${p}`)}localStorage.setItem(`keyTazo`,p)},h={clear_completed:`.clear-completed`,todo_container:`#todo-container`,new_todo_input:`#new-todo-input`,todo_selecter:`.filtro`,pending_count_label:`#pending-count`};s.init_store(),console.log(`Hello TODO-app!`),(t=>{let r=()=>{let e=s.get_TODO(s.get_current_filter());console.log(e),f(h.todo_container,e),i()},i=()=>{u(h.pending_count_label)};(()=>{let n=document.createElement(`div`);n.innerHTML=e,document.querySelector(t).append(n),m(),r()})();let a=document.querySelector(h.clear_completed),o=document.querySelectorAll(h.todo_selecter),c=document.querySelector(h.new_todo_input),l=document.querySelector(h.todo_container);a&&a.addEventListener(`click`,()=>{s.clear_completed(),r()}),o.forEach(e=>{e.addEventListener(`click`,t=>{switch(t.preventDefault(),o.forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`),e.getAttribute(`href`)){case`#/`:s.set_filter(n.All);break;case`#/active`:s.set_filter(n.pending);break;case`#/completed`:s.set_filter(n.completed);break;default:return}r()})}),c.addEventListener(`keyup`,e=>{if(console.log(e.keyCode),e.keyCode===13)try{if(e.target.value.trim().length===0)throw Error(`La tarea no puede estar vacía`);s.add_TODO(e.target.value.trim()),c.value=``,r()}catch(e){console.error(e)||alert(e.message)}}),l.addEventListener(`click`,e=>{let t=e.target.closest(`[data-id]`);if(t){if(e.target.closest(`.destroy`))s.clear_TODO(t.getAttribute(`data-id`));else if(e.target.closest(`.toggle`))s.toggle_TODO(t.getAttribute(`data-id`));else return;r()}})})(`#app`);