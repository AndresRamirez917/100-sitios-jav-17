async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const testimonials = ["testimonial-left", "testimonial-rigth", ""]
    //convertir json a array !!!!chimbita
    const arr = products.map(elemento => Object.entries(elemento));
    console.log(arr)
    
    products.forEach(element => {
        const randomInt = randomDescription(1, arr.length);
        const ranIndex = randomInt
        for(i = 0; i < testimonials.length; i++){
            if(element.id == i){
                const cardImage = document.createRange().createContextualFragment(`
                    
                     <div class="face front">
                        <img class="image" src="${arr[ranIndex][5][1]}" alt="">
                        <h3>${arr[ranIndex][1][1]}</h3>
                    </div> 
                    
                    `)
                    const card = document.querySelector('.card')
                    card.append(cardImage)
            }
        }

        function randomDescription(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min);
            
          }
         // console.log(randomDescription(1, arr.length))
    });
}

getData()









