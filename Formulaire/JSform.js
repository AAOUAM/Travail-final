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
    const description = document.getElementById("description");
    var sexe = document.querySelector('input[name="sexe"]:checked');
    const loisirs = document.getElementById("loisirs");
    const tec = document.getElementById("tec");
    const langue = document.getElementById("langue");

    var diplomes = [];
    document.querySelectorAll('input[type="checkbox"]').forEach(item =>{
        if (item.checked === true){
            diplomes.push(item.value);
        }
    })
    

    
    const titrevalue = titre.value;
    const nomvalue = nom.value;
    const prenomvalue = prenom.value;
    const agevalue = age.value;
    const emailvalue = email.value;
    const adressevalue = adresse.value;
    const telvalue = tel.value;
    const sexevalue = sexe.value ;
    const loisirsvalue = loisirs.value;
    const tecvalue = tec.value;
    const languevalue = langue.value;

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
          return; 
    }

    if (adressevalue.split(" ").length > 100) {
        alert("L'adresse ne doit pas dépasser 100 mots !!!!!!");
        return;
    }


    
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
    window.localStorage.setItem('description', description.value);
    window.localStorage.setItem('tec', tecvalue);
    window.localStorage.setItem('langue', languevalue);

    window.location.href = "result.html";
});
