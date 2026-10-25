export let keyTazo = Math.floor(Math.random() * 8) + 1;

export const set_Tazo_title = () => {
        const h1 = document.querySelector('h1');
        const lastKeyTazo = Number(localStorage.getItem('keyTazo'));

        if (!h1) throw new Error('Title element not found');

        while (keyTazo === lastKeyTazo) {
                keyTazo = Math.floor(Math.random() * 8) + 1;
        }

        switch (keyTazo) {
            case 0:
                h1.textContent = 'Tareas:'
                break;
            case 1:
                h1.textContent = 'Hey Tazo! Everything aight?';
                break;
            case 2:
                h1.textContent = 'What do you have in mind, Tazo?';
                break;
            case 3: 
                h1.textContent = 'Synx-Null is coming soon!';
                break;
            case 4: 
                h1.textContent = 'Broken Secrets TODO here!';
                break;
            case 5: 
                h1.textContent = `Remember, 8/8/28 decayedTeam.push('VEE-X3L')`;
                break;
            case 6:
                h1.textContent = 'Any ideas for Decayed Reality?';
                break;
            case 7: 
                h1.textContent = 'WITHER STORM';
                break;
            case 8:
                h1.textContent = 'Add Persom ideas of CWSBP here!';
                break;
            default:
                throw new Error(`Invalid title key: ${keyTazo}`);
        }

        localStorage.setItem('keyTazo', keyTazo);
};
