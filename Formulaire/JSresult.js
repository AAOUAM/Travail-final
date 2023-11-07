
           const titre = localStorage.getItem('titre');
           const nom = localStorage.getItem('Nom');
           const prenom = localStorage.getItem('prenom');
           const email = localStorage.getItem('email');
           const age = localStorage.getItem('age');
           const sexe = localStorage.getItem("sexe");
           const adresse = localStorage.getItem("adresse");
           const tel = localStorage.getItem("tel");

           const description = localStorage.getItem("description");
           const diplomes = localStorage.getItem('diplomes');

           const tec = localStorage.getItem('tec');
           const langue = localStorage.getItem('langue');
           const loisirs = localStorage.getItem('loisirs');


           document.getElementById('titre').textContent = titre ;
           document.getElementById('Nom').textContent = nom ;
           document.getElementById('prenom').textContent = prenom ;
           document.getElementById('email').textContent = email ;
           document.getElementById('age').textContent = age ;
           document.getElementById('sexe').textContent = sexe ;
           document.getElementById("adresse").textContent = adresse;
           document.getElementById("tel").textContent = tel;

           document.getElementById("description").textContent = description;
           document.getElementById("diplomes").textContent= diplomes;
           

           document.getElementById('tec').textContent = tec ;
           document.getElementById("langue").textContent = langue;
           document.getElementById('loisirs').textContent = loisirs ;