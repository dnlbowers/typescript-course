const button = document.querySelector('button')!; /* allows Ts to know its ok that the element is in the dom */

function clickHandler(message: string) {
    // let message = 'Clicked!';
    console.log('Clicked! ' + message);
}

if(button) {
    /* instead of the ! you could use a conditional check to see if the element is their at run time */
    button.addEventListener('click', clickHandler.bind(null, 'You\'re welcome!'));
}