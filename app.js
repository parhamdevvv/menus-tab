const cards = [
  {
    img: "https://images.unsplash.com/photo-1590598016835-83cf3357ebc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    name: "medellin",
    info1: "safe",
    info2: "warm",
    info3: "",
  },
  {
    img: "https://images.unsplash.com/photo-1599543359278-76676745f1e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    name: "jardin",
    info1: "safe",
    info2: "warm",
    info3: "affordable",
  },
  {
    img: "https://images.unsplash.com/photo-1613936394532-12c18607f6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "old town",
    info1: "cool people",
    info2: "no english",
    info3: "",
  },
  {
    img: "https://images.unsplash.com/photo-1536308037887-165852797016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80",
    name: "cartagena",
    info1: "nightlife",
    info2: "cheap beer",
    info3: "affordable",
  },
  {
    img: "https://images.unsplash.com/photo-1590598016835-83cf3357ebc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    name: "bogota",
    info1: "4 season",
    info2: "",
    info3: "",
  },
];
const cardsParent=document.querySelector('.cards');
window.addEventListener('DOMContentLoaded',function(){
  displaycities(cards);
});

function displaycities(city){
  let displaycity=city.map(function(item){
    return `
        <article class="card">
      <img class="img" src="${item.img}" alt="">
      <h2 class="card-title">${item.name}</h2>
      <div class="card-info">
        <p>${item.info1}</p>
        <p>${item.info2}</p>
        <p>${item.info3}</p>
      </div>
    </article>
    `;
  });
displaycity=displaycity.join('');
cardsParent.innerHTML=displaycity;
};