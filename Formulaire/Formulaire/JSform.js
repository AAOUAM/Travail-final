const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const titre = document.getElementById("titre");
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const adresse = document.getElementById("adresse");
    const tel = document.getElementById("tel");
    var sexe = document.querySelector('input[name="gender"]:checked');
    const loisirs = document.getElementById("loisirs");
    const tec = document.getElementById("tec");
    /*const description = document.getElementById("desp");*/

    var diplomes = [];
    var diploCheckboxes = document.querySelectorAll('input[name="diplo"]');

    for (var i = 0; i < diploCheckboxes.length; i++) {
        if (diploCheckboxes[i].checked) {
            diplomes.push(diploCheckboxes[i].value);
        }
    }

    const titrevalue = titre.value;
    const nomvalue = nom.value;
    const prenomvalue = prenom.value;
    const agevalue = age.value;
    const emailvalue = email.value;
    const adressevalue = adresse.value;
    const telvalue = tel.value;
    const sexevalue = sexe ? sexe.value : null;
    const loisirsvalue = loisirs.value;
    /*const descriptionvalue = description.value;*/
    const tecvalue = tec.value;

    // Vérifications
    if (/[^A-Za-z0-9\s]/.test(titrevalue)) {
      alert("Le titre ne doit pas contenir de caractères spéciaux  !!!!!!");
      return;
  }
    const nomEnMajuscules = nomvalue.toUpperCase();
    if (nomvalue !== nomEnMajuscules) {
        alert("Le nom doit être en majuscules !!!!!!");
        return;
    }

    if (!/^[A-Z][a-z\s]*$/.test(prenomvalue)) {
      alert("Le prénom doit commencer par une majuscule et ne contenir que des lettres et espaces !!!!!!");
      return;
    }
    if (parseInt(agevalue) <= 18) {
          alert("L'âge doit être supérieur à 18 !!!!!!");
          return; // Arrête l'exécution du formulaire en cas d'erreur.
      }

    if (adressevalue.split(" ").length > 100) {
        alert("L'adresse ne doit pas dépasser 100 mots !!!!!!");
        return;
    }


    // Enregistrement des données dans le localStorage
    window.localStorage.setItem('titre', titrevalue);
    window.localStorage.setItem('Nom', nomvalue);
    window.localStorage.setItem('prenom', prenomvalue);
    window.localStorage.setItem('age', agevalue);
    window.localStorage.setItem('email', emailvalue);
    window.localStorage.setItem('adresse', adressevalue);
    window.localStorage.setItem('tel', telvalue);
    window.localStorage.setItem('sexe', sexevalue);
    window.localStorage.setItem('loisirs', loisirsvalue);
    window.localStorage.setItem('diplomes', diplomes);
    /*window.localStorage.setItem('description', descriptionvalue);*/
    window.localStorage.setItem('tec', tecvalue);

    window.location.href = "result.html";
});
