let html = "";

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    for(value of data){
      html += `<div class="card p 10" style="width: 18rem;">
  <img src="${value.p_image}" class="card-img-top" alt="...">
    <h5 class="card-title">${value.p_name}</h5>
    <p class="card-text">${value.p_description}</p>
    <p class="card-text">${value.p_price}</p>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>`


    document.getElementById("card-container").innerHTML = html;
  }
}
);
