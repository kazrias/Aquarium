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

    function Fish(img, backImg) {
        const fishImage = document.createElement("img");
        fishImage.src = img;

        this.x = Math.random() * 10 + 50;
        this.y = Math.random() * 60 + 30;
        this.width = 30;
        this.height = 30;
        this.xDelta = Math.random() * 4;
        this.update = function () {
            if (this.x + this.width > canvas.width) {
                this.xDelta *= -1;
                fishImage.src = backImg;
            }
            if (this.x < 0) {
                this.xDelta *= -1;
                fishImage.src = img;
            }
            this.x += this.xDelta;
        },
            this.draw = function () {
                context.drawImage(fishImage, this.x, this.y, this.width, this.height);
                context.beginPath();
                context.fill();
            }
    }


    bntForBlueFish.addEventListener("click", function () {
        const img = `${imgContext('./BlueFish.png')}`;
        const backImg = `${imgContext('./BlueBack.png')}`;
        const fish = new Fish(img, backImg);
        date.fishes.push(fish);
    });

    bntForRedFish.addEventListener("click", function () {
        const img = `${imgContext('./RedFish.png')}`;
        const backImg = `${imgContext('./RedBack.png')}`;
        const fish = new Fish(img, backImg);
        date.fishes.push(fish);
    });

    bntForOrangeFish.addEventListener("click", function () {
        const img = `${imgContext('./OrangeFish.png')}`;
        const backImg = `${imgContext('./OrangeBack.png')}`;
        const fish = new Fish(img, backImg);
        date.fishes.push(fish);
    });
}