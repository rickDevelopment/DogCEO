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
    //get the image and add image to the image-list
    const list = document.createElement('li')
    list.className = 'image-list-item'
    const img = document.createElement('img');
    img.src = processedResponse.message;
    img.alt = "Cute dog";
    list.appendChild(img);
    imageList.appendChild(list);
  });
  console.log('This will log first')
}

   addDog.addEventListener('click', addNewDoggo)
