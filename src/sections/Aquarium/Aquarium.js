export const Aquarium = () => {
    const mainDiv = document.querySelector(".aquarium");

    mainDiv.innerHTML += `
            <div id="video-container">
                <video autoplay muted loop id="video-bg">
                    <source src="${imgContext('./Background.mp4')}" type="video/mp4">
                </video>
                <div id="content">
                    <canvas id="canvas"></canvas>
                    <div id="container-buttons">
                        <button class="btn" id="blueFish"><img class="fish-img" src="${imgContext('./BlueFish.png')}"/></button>
                        <button class="btn" id="redFish"><img class="fish-img" src="${imgContext('./RedFish.png')}"/></button>
                        <button class="btn" id="orangeFish"><img class="fish-img" src="${imgContext('./OrangeFish.png')}"/></button>
                    </div>
                </div>
            </div>
    `;

}