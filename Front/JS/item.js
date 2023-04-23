const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('productID'); // dobi productID od get requesta
fetch("http://127.0.0.1/matura/Backend/database/database.php?getProductData=true&productID=" + id)
    .then(function (response) {
        return response.json();
    })
    .then(function (product) {
        /*
            uporabi https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml/#:~:text=To%20set%20the%20value%20of,element%20with%20the%20new%20content. 
            za vsaki element v htmlu ki je placeholder samo spremeni innerhtml npr:
    
            let productRating = document.getElementById('productRating'); // poisce element ki ima id productRating in ga da v var productRating
            productRating.innerHTML = product.rating; // zamenji notranji html za vrednost ratinga od producta

            to samo ponovi za vsako vrednost v jsonu ki zelis da se prikaze
    
        */

        
    }
    );
