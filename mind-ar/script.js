const sceneEl = document.querySelector("a-scene");
const model = document.querySelector("#avatarModel");
const arSystem = sceneEl.systems["mindar-image-system"];
const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const container = document.querySelector(
    ".example-container"
);

let imgURL = "./assets/card-example/card.png";
let assetURL = "./assets/card-example/softmind/scene.gltf";


               


let el = `

                <a-assets>
                    <img
                        id="card"
                        src=${imgURL}
                    />
                    <a-asset-item
                        id="avatarModel"
                        src=${assetURL}
                    ></a-asset-item>
                </a-assets>

                <a-camera
                    position="0 0 0"
                    look-controls="enabled: false"
                ></a-camera>

                <a-entity
                    mindar-image-target="targetIndex: 0"
                >
                    <a-plane
                        src="#card"
                        position="0 0 0"
                        height="0.552"
                        width="1"
                        rotation="0 0 0"
                    ></a-plane>

                    <a-gltf-model
                        rotation="0 0 0 "
                        position="0 0 0.1"
                        scale="1 1 1"
                        src="#avatarModel"
                        animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
                    />
                </a-entity>
`;

startButton.addEventListener("click", () => {
    if (localStorage.getItem("selectedAsset")) {
        assetURL =
            localStorage.getItem("selectedAsset").gltf;
    }
    sceneEl.innerHTML = el;
    arSystem.start();
});
stopButton.addEventListener("click", () => {
    arSystem.stop();
});
