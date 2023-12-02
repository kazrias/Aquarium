import './Aquarium.css'
const imgContext=require.context('../../img/aquarium',false,/\.(jpe?g|png|webp|gif|svg|mp4)$/i)
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

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const bntForBlueFish = document.getElementById("blueFish");
    const bntForRedFish = document.getElementById("redFish");
    const bntForOrangeFish = document.getElementById("orangeFish");

    const date = {
        xDelta: 100,
        fishes: []
    }

    function update() {
        date.fishes.forEach(function (fish) {
            fish.update();
        });
    }
    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        date.fishes.forEach(function (fish) {
            fish.draw();
        });
    }

    function loop() {
        requestAnimationFrame(loop);
        update();
        draw();
    }
    loop();
}