

export class Todo  {

    /**
    * @param {string} description
     */

        constructor( description ) {
            this.id = crypto.randomUUID();
            this.description = description;
            this.done = false;
            this.create_at = new Date();

        }


}