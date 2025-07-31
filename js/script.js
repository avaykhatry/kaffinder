document.addEventListener('DOMContentLoaded', function() {
const cafeList = document.getElementById("cafeList");

// function renderCafes(data) {
//   cafeList.innerHTML = "";

//   data.forEach(cafe => {
//     const card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML = `
//       <img src="${cafe.imageUrl}" alt="${cafe.name}">
//       <div class="card-content">
//         <h3>${cafe.name}</h3>
//         <p>${cafe.description}</p>
//         <p>☕ ₹${cafe.price}</p>
//         <div class="card-tags">${cafe.tags.join(", ")}</div>
//       </div>
//     `;
//     cafeList.appendChild(card);
//   });
// }

// to fetch cafe data
  let cafeFile = '../cafes.json';
  fetch(cafeFile)
  .then(response => response.json())
  .then(cafeData => {
    for (let i = 0; i < cafeData.length; i++ ) {
      const allCafe = cafeData[i].name;
      console.log(allCafe);
    };
  });

});
  


// const cafes = [
//   {
//     name: "Café Doppio",
//     price: 140,
//     tags: ["quiet", "free-wifi", "laptop-friendly"],
//     imageUrl: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
//     description: "Minimal, peaceful, great for deep work"
//   },
//   {
//     name: "Brew Bros",
//     price: 200,
//     tags: ["outdoor-seating", "free-wifi"],
//     imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
//     description: "Chill vibes, good for group study"
//   },
//   {
//     name: "Nomad Café",
//     price: 110,
//     tags: ["quiet", "laptop-friendly"],
//     imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
//     description: "Budget gem with great seating"
//   }
// ];

// const priceFilter = document.getElementById("priceFilter");
// const tagButtons = document.querySelectorAll("#tagFilters button");

// let currentTag = "all";


// function filterCafes() {
//   const price = priceFilter.value;
//   let filtered = cafes;
// zx
//   if (price !== "all") {
//     filtered = filtered.filter(c => c.price <= parseInt(price));
//   }

//   if (currentTag !== "all") {
//     filtered = filtered.filter(c => c.tags.includes(currentTag));
//   }

//   renderCafes(filtered);
// }

// priceFilter.addEventListener("change", filterCafes);

// tagButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     tagButtons.forEach(b => b.classList.remove("active"));
//     btn.classList.add("active");
//     currentTag = btn.dataset.tag;
//     filterCafes();
//   });
// });

// renderCafes(cafes);
