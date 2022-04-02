const fileForm = document.querySelector(".form-wrapper");
const uploadButton = document.querySelector(
    ".upload-button"
);
const loader = document.querySelector(".loader");
const selector = document.querySelector("#gltf-selector");
const lb = document.querySelector("#lb");

const assets = {
    "2CylinderEngine": {
        name: "2CylinderEngine",
        glb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/2CylinderEngine/glTF-Binary/2CylinderEngine.glb",
        gltf: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/2CylinderEngine/glTF-Embedded/2CylinderEngine.gltf",
    },
    Avacado: {
        name: "Avacado",
        glb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb",
        gltf: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf",
    },
    Duck: {
        name: "Duck",
        glb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb",
        gltf: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf",
    },
    GlamVelvetSofa: {
        name: "GlamVelvetSofa",
        glb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/GlamVelvetSofa/glTF-Binary/GlamVelvetSofa.glb",
        gltf: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/GlamVelvetSofa/glTF/GlamVelvetSofa.gltf",
    },
    Fox: {
        name: "Fox",
        glb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Fox/glTF-Binary/Fox.glb",
        gltf: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Fox/glTF/Fox.gltf",
    },
    BarramundiFish: {
        name: "BarramundiFish",
        glb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BarramundiFish/glTF-Binary/BarramundiFish.glb",
        gltf: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BarramundiFish/glTF/BarramundiFish.gltf",
    },
    CesiumMilkTruck: {
        name: "CesiumMilkTruck",
        glb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMilkTruck/glTF-Binary/CesiumMilkTruck.glb",
        gltf: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMilkTruck/glTF/CesiumMilkTruck.gltf",
    },
    AntiqueCamera: {
        name: "AntiqueCamera",
        glb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AntiqueCamera/glTF-Binary/AntiqueCamera.glb",
        gltf: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AntiqueCamera/glTF/AntiqueCamera.gltf",
    },
    Lantern: {
        name: "Lantern",
        glb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF-Binary/Lantern.glb",
        gltf: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF/Lantern.gltf",
    },
    MetalRoughSpheres: {
        name: "MetalRoughSpheres",
        glb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/MetalRoughSpheres/glTF-Binary/MetalRoughSpheres.glb",
        gltf: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/MetalRoughSpheres/glTF/MetalRoughSpheres.gltf",
    },
    skull: {
        name: "skull",
        gltf: "https://raw.githubusercontent.com/homimickey/gltf-assets/main/skull.gltf",
        glb: "https://raw.githubusercontent.com/homimickey/gltf-assets/main/skull.glb",
    },
};

document.addEventListener("DOMContentLoaded", () => {
    Object.keys(assets).forEach((key) => {
        const option = document.createElement("option");
        option.value = assets[key].name;
        option.innerText = assets[key].name;
        selector.appendChild(option);
    });
});

const checkMarkSvg = `<svg width=10px height=10px xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="122.877px" height="101.052px" viewBox="0 0 122.877 101.052" enable-background="new 0 0 122.877 101.052" xml:space="preserve"><g><path d="M4.43,63.63c-2.869-2.755-4.352-6.42-4.427-10.11c-0.074-3.689,1.261-7.412,4.015-10.281 c2.752-2.867,6.417-4.351,10.106-4.425c3.691-0.076,7.412,1.255,10.283,4.012l24.787,23.851L98.543,3.989l1.768,1.349l-1.77-1.355 c0.141-0.183,0.301-0.339,0.479-0.466c2.936-2.543,6.621-3.691,10.223-3.495V0.018l0.176,0.016c3.623,0.24,7.162,1.85,9.775,4.766 c2.658,2.965,3.863,6.731,3.662,10.412h0.004l-0.016,0.176c-0.236,3.558-1.791,7.035-4.609,9.632l-59.224,72.09l0.004,0.004 c-0.111,0.141-0.236,0.262-0.372,0.368c-2.773,2.435-6.275,3.629-9.757,3.569c-3.511-0.061-7.015-1.396-9.741-4.016L4.43,63.63 L4.43,63.63z"/></g></svg>`;

let selectedAsset = assets["skull"];
localStorage.setItem(
    "selectedAsset",
    JSON.stringify(selectedAsset)
);
lb.href = "./image-tracking/example4.html";

selector.addEventListener("change", (evt) => {
    uploadButton.innerHTML = ` UPLOAD
    <div class="loader"></div>`;
    console.log(evt.target.value);
    selectedAsset = assets[evt.target.value];
    let lcv = evt.target.value.toString().toLowerCase();
    lb.href = `./image-tracking/gltfs/${lcv}/index.html`;
    console.log(selectedAsset);
});

function handleInput(evt) {
    loader.classList.add("visible");
    localStorage.setItem(
        "selectedAsset",
        JSON.stringify(selectedAsset)
    );
    uploadButton.innerHTML = checkMarkSvg;
    console.log(localStorage.getItem("selectedAsset"));
}

uploadButton.addEventListener("click", handleInput);
