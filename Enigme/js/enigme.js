const enigmeTitle = document.querySelector('.enigme-title');
let numeroEnigme = document.createElement('span');
const description = document.querySelector('.description');
const enigme = document.querySelector('.enigme');
const enigmePara = document.createElement('p');
const texte = document.querySelector('.texte');
const submitButton = document.querySelector('.btn');
const reponse = document.getElementById('reponse');
const modal = document.getElementById("myModal");
let Inside = document.querySelector('.inside');
const btn = document.getElementById("button");
let time = document.querySelector('.countdown');



btn.onclick = function() {
modal.style.display = "block";
}

window.onclick = function(event) {
if (event.target == modal) {
 modal.style.display = "none";
}
}



let enigmeContent = [
    {
        title: "ENIGME NUMERO",
        numero: "1",
        description: "Prouve ton talent d'espion et déchiffre cette réplique d'Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d'une Dora Milaje !",
        enigme: "SI JE SUIS FIDELE C'EST A CE TRONE EU IMPORTE QUI MONTE DESSUS ",
        response: "Si je suis fidele c'est a ce trone eu importe qui monte dessus",
        texte: " Voici la transicription de l'alphabet :\n A = A ; B = b ; c = c ; d = d ; e = e ; f = f ; g = g ; h = h ; i = i ; j = j ; k = k ; l = l ; m = m ; n = n ; o = o ; p = p ; q = q ; r = r ; s = s ; t = t ;u = u ; w = w ; x = x ; y = y ; z = z "
    },

    {
        title: "ENIGME NUMERO",
        numero: "2",
        description: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L&apos;alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
        enigme: " Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab zqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza ",
        response: "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab zqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
        texte: " Le savais tu ?\n Plusieurs sources s&apos;entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l&apos;alphabet ?"
    },

    {
        title: "ENIGME NUMERO",
        numero: "3",
        description: "Lorsque T'Challa mange l'herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d'un certain film où un père dit à son fils de ne pas oublier qui il est et d'où il vient. Quel est ce film ?",
        enigme: "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010 ",
        response: "LE ROI LION",
        texte: " Le savais tu ?\n Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte lancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
    }
];

let currentQuestionIndex = 0;

let correctAnswers;

function afficherEnigme() {

    const enigmeActuelle = enigmeContent[currentQuestionIndex];

    correctAnswers = enigmeActuelle.response;

  
    enigmeTitle.textContent = enigmeActuelle.title;

    numeroEnigme.textContent = enigmeActuelle.numero;
    
    enigmeTitle.appendChild(numeroEnigme);

    description.textContent = enigmeActuelle.description;
  
    enigme.textContent = enigmeActuelle.enigme; 

    texte.textContent = enigmeActuelle.texte;

    if (currentQuestionIndex === 0) {
        enigme.textContent = enigmeActuelle.enigme;
        console.log('Première enigme');
    
    } else if (currentQuestionIndex === 1) {
        enigmePara.textContent = enigmeActuelle.enigme;
        enigme.innerHTML = '';
        enigme.appendChild(enigmePara);
        console.log('Deuxième enigme');

    }  else if (currentQuestionIndex === 2) {
        enigmePara.textContent = enigmeActuelle.enigme;
        enigme.innerHTML = ''; // Vide le contenu de l'élément enigme
        enigme.appendChild(enigmePara);
        console.log('Troisième enigme');
      }
  }
  
  afficherEnigme();


  function afficherProchaineEnigme() {
    console.log(enigmeContent);
    if (currentQuestionIndex === 2 && 
    reponse.value !== "" && reponse.value === correctAnswers) {
        modal.style.display = "block";
        Inside.innerHTML = '';
        let modalTitle = document.createElement('h2');
        let button = document.createElement('button');
        button.textContent = "Revenir à l'accueil";
        button.addEventListener('click', () => {
        window.location.href = '../Accueil/accueil.html';
        });
        let image = document.createElement('img');
        image.src = 'figma_logo.svg';
        let comming = document.createElement('div');
        comming.textContent = 'Comming soon...';
        modalTitle.textContent = 'Ton initiation est terminée !';
        Inside.appendChild(modalTitle);
        Inside.appendChild(button);
        Inside.appendChild(image);
        Inside.appendChild(comming);
        Inside.appendChild(time);
        reponse.value ='';
        afficherEnigme();
    }
    
    else if (reponse.value !== "" && reponse.value === correctAnswers) {
        modal.style.display = "block";
        Inside.innerHTML = '';
        let modalTitle = document.createElement('h2');
        let modalContaint = document.createElement('p');
        let button = document.createElement('button');
        button.textContent = 'Question suivante';
        button.addEventListener('click', () => {
            modal.style.display = "none";
            currentQuestionIndex;
            afficherEnigme();
        });
        modalTitle.textContent = 'BRAVO !';
        modalContaint.textContent = 'Tu as trouvé la bonne reponse ! Es tu prêt pour l"enigme suivante ?';
        Inside.appendChild(modalTitle);
        Inside.appendChild(modalContaint);
        Inside.appendChild(button);
        reponse.value = "";
        currentQuestionIndex++;
        afficherEnigme();
        

    } 
    
    else {
        modal.style.display = "block";
        Inside.innerHTML = '';
        let modalTitle = document.createElement('h2');
        let modalContaint = document.createElement('p');
        modalTitle.textContent = 'OUPPS !';
        modalContaint.textContent = 'Essaies encore . Tu vas trouver la bonne reponse !';
        Inside.appendChild(modalTitle);
        Inside.appendChild(modalContaint);
        reponse.value = "";
        setTimeout(function() {
            modal.style.display = "none";
        }, 2000);
        currentQuestionIndex;
        afficherEnigme();
    }

  }

  submitButton.addEventListener('click', afficherProchaineEnigme);