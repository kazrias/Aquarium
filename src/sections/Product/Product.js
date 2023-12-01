import './Product.css';
const imgContext = require.context('../../img/', false, /\.(jpe?g|png|webp|gif|svg)$/i);
const imgs = ['freshwaterSnails', 'freshwaterShrimp', 'freshwaterFish', 'freshwaterCrayFish', 'freshwaterPlants', 'nanoFish', 'freshwaterCrabs', 'AquariumParkFood'];
const titles = ['Freshwater Snails', 'Freshwater Shrimp', 'Freshwater fish', 'freshwater crayfish', 'freshwater plants', 'nano fish', 'freshwater crabs', 'aquarium park`s brand foods and supplies'];



export const ProductList = async () => {
  const section = document.querySelector('.product>.container');
  section.id='products'
  const productList = document.createElement('div');
  productList.classList.add('product-list');
  const categories = document.createElement('h2')
  categories.classList.add('product-categories');
  categories.innerText = 'Popular Products';
  section.append(categories);
  for (let i = 0; i < titles.length; i++) {
    const productItem = document.createElement('div');
    productItem.classList.add('product-list__item');

    const img = document.createElement('img');
    img.classList.add('product-list__img');
    img.src = imgContext(`./${imgs[i]}.webp`);

    const title = document.createElement('h3');
    title.classList.add('product-list__title');
    title.innerText = `${titles[i]}`;


    productItem.append(img, title);
    productList.append(productItem);
  }
  section.append(productList);
}

