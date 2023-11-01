const tec = localStorage.getItem('tec');
const nom = localStorage.getItem('Nom');
const email = localStorage.getItem('email');
const date = localStorage.getItem('date');
const adresse = localStorage.getItem("adresse");
const tel = localStorage.getItem("tel");
const linkedin = localStorage.getItem("linkedin");
const langue = localStorage.getItem('langue');
const sexe = localStorage.getItem('sexe');
const diplomes= localStorage.getItem('diplomes');
const loisirs= localStorage.getItem('loisirs');
const description= localStorage.getItem('description');



document.getElementById('tec').textContent = tec ;
document.getElementById('Nom').textContent = nom ;
document.getElementById('email').textContent = email ;
document.getElementById('date').textContent = date ;
document.getElementById("adresse").textContent = adresse;
document.getElementById("tel").textContent = tel;
document.getElementById("linkedin").textContent = linkedin;
document.getElementById("sexe").textContent = sexe;
document.getElementById("loisirs").textContent = loisirs;
document.getElementById("langue").textContent = langue;
document.getElementById("description").textContent = description;