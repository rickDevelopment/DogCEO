const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector('.doggos');
const addDog = document.querySelector('.add-dog-btn')
const imageList = document.querySelector('.image-list')

function addNewDoggo(){
  const promise = fetch(DOG_URL);
  promise
  .then(function(response){
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse){
    const img = document.createElement('img');
    img.src = processedResponse.message;
    img.alt = "Cute dog";
    imageList.appendChild(img)
  });
  console.log('This will log first')
}
  function addListItem(){
    const list = document.createElement('li')
    imageList.appendChild(list)
  }

   addDog.addEventListener('click', addNewDoggo)
