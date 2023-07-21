const butInstall = document.getElementById('buttonInstall');

// Added an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    event.preventDefault();
    installBtn.style.visibility = 'visible';
    textHeader.textContent = 'Click the button to install!';


// Implemented a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';


});

});
//  Added an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
}


);
