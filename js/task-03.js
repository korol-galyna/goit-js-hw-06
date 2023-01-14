const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgList = document.querySelector('.gallery');

const createImgEl = images
  .map(image => `<div class="gallery_item"> <li class="gallery_list">
  <img src=${image.url} alt='${image.alt}' width=300 height=250></li></div>`)
  .join('');
imgList.insertAdjacentHTML('afterbegin', createImgEl);
console.log(createImgEl);

/*оформление*/

const conteiner = document.createElement("div");
console.log(conteiner);
const pEl = document.querySelector('p');
console.log(pEl);
pEl.after(conteiner);
conteiner.append(imgList);
conteiner.classList.add("gallery_conteiner");