// function replaceName() {
//     let name = prompt("Halo, Siapakah nama Anda?", "");
//     document.getElementById("name").innerHTML = name
// }

// document.getElementById("tombol").addEventListener("click", function() {
//     replaceName()
// })

// let nameInput = document.getElementById("name-input")

// document.getElementById("kirim").addEventListener("click", function() {
//     const nama = nameInput.value

//     if (name == "") {
//         document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!"
//     } else {
//         document.getElementById("name").innerHTML = nama
//     }    
// })

function validateForm() {
    const nama = document.forms["message-form"]["name-input"].value
    if (nama == "") {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!"
        return false
    }
    // document.getElementById("name").innerHTML = nama;
    // document.getElementById("error-name").innerHTML = "";
    setName(nama);
    return false;
}

function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("error-name").innerHTML = "";
}