import './About.css'
export const About = () => {
  const section = document.querySelector('.about>.container');

  const title = document.createElement('h2');
  title.classList.add('about-title');
  title.innerText = 'About Us';

  const info = document.createElement('div');
  info.classList.add('about-info');

  const pFirst = document.createElement('p');
  const pSecond = document.createElement('p');
  const pThird = document.createElement('p');
  pFirst.classList.add('about-info__text');
  pSecond.classList.add('about-info__text');
  pThird.classList.add('about-info__text');

  pFirst.innerText = `At our Aquarium & Fish Shop, we are passionate about creating a thriving aquatic world for enthusiasts and beginners alike. With years of experience and a love for aquatic life, we are committed to providing the best products and guidance for your underwater adventure.`
  pSecond.innerText = `Our dedicated team of experts is here to assist you in choosing the right aquarium, selecting compatible fish, and offering valuable tips on maintenance. Whether you're a seasoned hobbyist or just starting, our shop is the perfect place to explore and enhance your aquatic hobby.`
  pThird.innerText = `We source our fish and aquarium supplies from reputable suppliers to ensure the well-being of your aquatic pets. Our goal is to create a community where fellow enthusiasts can share their experiences, exchange knowledge, and find inspiration for their underwater worlds.`;
  info.append(pFirst, pSecond, pThird)
  section.append(title, info)
}