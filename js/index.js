async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const testimonials = ["testimonial-left", "testimonial-rigth", "","testimonial-rigth"]
    //convertir json a array !!!!chimbita
    const arr = products.map(elemento => Object.entries(elemento));
    console.log(arr)
    
    products.forEach(element => {
        const randomInt = randomDescription(1, arr.length);
        const ranIndex = randomInt
        for(i = 0; i < testimonials.length; i++){
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

getData()









