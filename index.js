$(document).ready(function(){

console.log("sass")
    function createHomePageProductCard(render_product) {
      // <div class="product-card">
      //     <a href='/details.html'>
      //     <img class="product-image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" />
          
      //     <div class="product-meta">
      //         <h4>Men Navy Solid Sweatshirt</h4>
      //         <h5>United Colors of Benetton</h5>
      //         <p>Rs 2599</p>
      //     </div>
      //     </a>
      // </div>

      var mainDiv = document.createElement('div');
      mainDiv.classList.add('product-card');

      var productLink = document.createElement('a');
      productLink.href = 'details.html?product-id='+render_product.id;

      var productImage = document.createElement('img');
      productImage.classList.add('product-image');
      productImage.src = render_product.preview;
      productImage.alt = render_product.name + ' Pic';

      productLink.appendChild(productImage);

      var innerDiv = document.createElement('div');
      innerDiv.classList.add('product-meta');

      var productName = document.createElement('h4');
      var productNameText = document.createTextNode(render_product.name);
      productName.appendChild(productNameText);

      var productBrand = document.createElement('h5');
      var productBrandText = document.createTextNode(render_product.brand);
      productBrand.appendChild(productBrandText);

      var productPrice = document.createElement('p');
      var productPriceText = document.createTextNode('Rs ' + render_product.price);
      productPrice.appendChild(productPriceText);

      innerDiv.appendChild(productName);
      innerDiv.appendChild(productBrand);
      innerDiv.appendChild(productPrice);

      mainDiv.appendChild(productLink);
      mainDiv.appendChild(innerDiv);
      productLink.appendChild(innerDiv);
      return mainDiv;
    }

    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function(data, status) {
      var response = data;
        console.log(data)
        console.log(status)
      for(var i=0; i<response.length; i++) {
        if(response[i].isAccessory) {
          $('#accessory-grid').append(createHomePageProductCard(response[i]))
        } else {
          $('#clothing-grid').append(createHomePageProductCard(response[i]))
        }
      }
    })
});