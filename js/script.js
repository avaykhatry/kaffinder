document.addEventListener('DOMContentLoaded', function() {
  // to fetch cafe data
  let cafeFile = '../cafes.json';
    // fetch(cafeFile)
    // .then(response => response.json())
    // .then(cafeData => {
    //   renderCafes(cafeData);
    // });
    

  const cafeList = document.getElementById("cafeList");
  const tagButtons = document.querySelectorAll("#tagFilters button");


// let currentTag = 'all';
if (!localStorage.getItem('currentTag')) {
  localStorage.setItem('currentTag', 'all');
}

filterCafes();

function styleTag(tagData) {
  return tagData.map(function(item) {
    return `<button class="tag">${item}</button>`;
  }).join(" ");
}

//function for cafe data rendering
function renderCafes(data) {

  cafeList.innerHTML = "";

  data.forEach((cafe) => {
      const li = document.createElement('li');
      li.className = "card";
      li.innerHTML = `
      <img src='${cafe.photo}'>
        <div class='card-content'>
          <h3>${cafe.name}</h3>
          <p>${cafe.location}</p>
          <div class='card-tags'>${styleTag(cafe.tags)}</div>
        </div>
      `;

      li.addEventListener("click", function() {
        window.location.href = `../pages/cafe.html?id=${cafe.id}`;
      });
      cafeList.append(li);
    });
}

//function for filtering tag here
function filterCafes() {
  
  fetch(cafeFile)
  .then(response => response.json())
  .then(cafeData => {
    let currentTag = localStorage.getItem('currentTag');
    let filtered = cafeData;

    if (currentTag !== 'all') {
      filtered = filtered.filter(cd => cd.tags.includes(currentTag));
    }
    localStorage.setItem('currentTag', currentTag);

    renderCafes(filtered);

    const activeTag = Array.from(tagButtons).find(btn => btn.dataset.tag === currentTag);

    if (activeTag) {
    activeTag.classList.add('active');
    }

    console.log(filtered);
  })
  };





  
  tagButtons.forEach(function(button) {
    button.onclick = function() {
      tagButtons.forEach(button => button.classList.remove("active"));
      button.classList.add("active");
      currentTag = button.dataset.tag;
      localStorage.setItem('currentTag', currentTag);
      filterCafes();
      
    }
  });

});