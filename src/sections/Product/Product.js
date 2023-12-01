const imgs = ['freshwaterShrimp', 'freshwaterFish', 'freshwaterSnails', 'freshwaterCrayFish', 'freshwaterPlants', 'nanoFish', 'freshwaterCrabs', 'AquariumParkFood'];
const titles = ['Freshwater Shrimp', 'Freshwater fish', 'Freshwater Snails', 'freshwater crayfish', 'freshwater plants', 'nano fish', 'freshwater crabs', 'aquarium park`s brand foods and supplies'];
const imgContext = require.context('../../img/', false, /\.(jpe?g|png|webp|gif|svg)$/i);

export const ProductList = async () => {
  const section = document.querySelector('.product>.container');
  const productList = document.createElement('div');
  productList.classList.add('product-list');

  for (let i = 0; i < titles.length; i++) {
    const productItem = document.createElement('div');
    productItem.classList.add('product-list__item');
    const img = document.createElement('img');
    img.src = imgContext(`./${imgs[i]}.webp`);
    productItem.append(img);
    productList.append(productItem);
  }
  section.append(productList);
}

