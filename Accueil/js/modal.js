let modal = document.getElementById('myModal');

const submitBtn = document.getElementById("submit");

if (modal && submitBtn) {
    submitBtn.addEventListener('click', envoyer);
function envoyer() {
    let nom = document.querySelector('#nom').value;
    let email = document.querySelector('#mail').value;
    if(nom !== '' && email !== '') {
    modal.style.display = "block";  
    document.getElementById('nom').removeAttribute('required');
    document.getElementById('mail').removeAttribute('required');
    } else {
        alert('Veuillez remplir tous les champs.');
        return false;  // annulation de l'envoi du formulaire en cas d'erreur sur le client
    }
}
 
window.onclick = function(event) {
    if (!modal.contains(event.target) && event.target !== submitBtn) {
    modal.style.display = "none";
}
}
} else {
    
    console.error('Impossible d\'initialiser les écouteurs sur les boutons');
}






