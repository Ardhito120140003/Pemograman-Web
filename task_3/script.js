
//menambahkan text
const footer = document.querySelector("footer");
footer.textContent="Ardhito Saputra - 120140003 - RA";


//menambahkan element
const h2baru = document.createElement("h2");
const headerbaru = document.createTextNode("Menyunting format tulisan");
h2baru.appendChild(headerbaru);

const pbaru = document.createElement("p");
const paragrafbaru = document.createTextNode("HTML memungkinkan seseorang untuk menyunting tampilan atau format berkas yang akan dikirimkan melalui media daring. Beberapa hal yang dapat dilakukan dalam menentukan format berkas adalah Menampilkan suatu kelompok kata dalam beberapa ukuran yang dapat digunakan untuk judul, heading dan sebagainya, Menampilkan tulisan dalam bentuk cetakan tebal Menampilkan sekelompok kata dalam bentuk miring, Menampilkan naskah dalam bentuk huruf yang mirip dengan hasil ketikan mesin ketik, Mengubah-ubah ukuran tulisan untuk suatu karakter tertentu");
pbaru.appendChild(paragrafbaru);

const brbaru = document.createElement("br");

const container2 = document.querySelector(".container2");
container2.appendChild(h2baru);
container2.appendChild(pbaru);
container2.appendChild(brbaru);

//menambahkan event handler
function hide(){
    container2.classList.toggle('hide');
};

const button = document.querySelector("#button_hide");
button.addEventListener("click", hide);