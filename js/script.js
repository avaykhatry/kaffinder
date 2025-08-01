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

//function for cafe data rendering
function renderCafes(data) {

  cafeList.innerHTML = "";
  for (let i = 0; i < data.length; i++ ) {
      const cafeName = data[i].name;
      const cafeLocation = data[i].location;

      const li = document.createElement('li');
      li.className = "card";
      li.innerHTML = `
      <img src='${data[i].photo}'>
        <div class='card-content'>
          <h3>${cafeName}</h3>
          <p>${cafeLocation}</p>
          <div class='card-tags'>${data[i].tags.join(", ")}</div>
        </div>
      `;

      cafeList.append(li);
    }
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