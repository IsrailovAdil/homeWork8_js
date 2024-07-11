const url=' https://api.thedogapi.com/v1/images/search?limit=10'
const breedsUrl=' https://api.thedogapi.com/v1/breeds';
const getDogs=document.querySelector('#getDogs')
const row=document.querySelector('#row')
const getDog=document.querySelector('#getDog')
const row1=document.querySelector('#row1')
const selectBreeds=document.querySelector('#select')
const breedImgUrl='https://api.thedogapi.com/v1/images/search?breed_ids='
const dog=document.querySelector('#dog')


let breedsArray=[]

fetch(breedsUrl)
    .then(res => res.json())
    .then(data=>{
        breedsArray=data
        selectBreeds.innerHTML=data.map(breed=>{
            return`
            <option value=${breed.id}>${breed.name}</option>`
        })
    })




selectBreeds.addEventListener('change', (event)=>{
fetch(breedImgUrl+event.target.value)
    .then(res => res.json())
    .then(data=> {
        const currentBreed=breedsArray.find(el=>el.id===parseInt(event.target.value));
        return dog.innerHTML = `
 <img src=${data[0].url} alt="${data.title}" />
  <div>
     <h2>${currentBreed.name} </h2>
     <p>Продолжительность жизни: ${currentBreed.life_span}</p>
      <p>Характер: ${currentBreed.temperament}</p>
    </div>`
    })
})


getDogs.addEventListener('click', e => {
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            row.innerHTML=data.map(el=>{
                return`<div  class="col-4">
            <div>
                <img src=${el.url} alt="${data.title}" class="image-fluid"/>
            </div>
        </div>`
            }).join(' ')
        })
})


getDog.addEventListener('click', e=>{
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(res=>res.json())
        .then(data=>{
            row1.innerHTML=data.map(el=>{
                return`<div  class="col">
            <div>
                <img src="${el.url}" alt="${data.title}"/>
            </div>
        </div>`
            }).join(' ')
        })
})

