async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    //convertir json a array !!!!chimbita
    const arr = products.map(elemento => Object.entries(elemento));
    console.log(arr)
    
    products.forEach(element => {
        const randomInt = randomDescription(1, arr.length);
        const ranIndex = randomInt;
        for(i = 0; i <= 3; i++){
            if(element.id == i){

                const cardImage = document.createRange().createContextualFragment(`
                    
                     <div class="card">
                 <div class="face front">
                    <img src="${arr[ranIndex][5][1]}" alt="">
                    <h3>${arr[ranIndex][1][1]}</h3>
                </div> 
                <div class="face back">
                    <h3>${arr[ranIndex][2][1]}</h3>
                    <p>${arr[ranIndex][3][1]}</p>
                    <div class="link">
                        <a href="#">Details</a>
                    </div>
                </div>
            </div>
                    
                    `)
                    const card = document.getElementById('trips')
                    card.append(cardImage)
            }
        }

        function randomDescription(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min);
            
          }
         // console.log(randomDescription(1, arr.length))
    });
}

const btn_validar = document.getElementById('btn-validar')
const validar =(e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const arrMessages = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
            if(arr[i].value == ""){
                alert(`El campo ${arrMessages[i]} no puede estar vacío`)
                return false;
            }
        
    }
    if(!emaiValido(email.value)){
        alert("El email no tiene el formato corrupto")
        return false;
    }
    alert("Los datos fueron enviados satisfactoriamente")
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
    return true;
    
}

const emaiValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btn_validar.addEventListener("click", validar)
getData()









