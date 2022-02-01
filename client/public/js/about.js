const time = Date.now() * 5e-14

const RED = 0xFF2954

const heartInit = () => {
    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 20
    scene.background = new THREE.Color('white');

    const light = new THREE.HemisphereLight(0x9E2954, 0xffffff, 1.5)
    light.position.set(0, 20, 0)
    light.lookAt(0, 0, 0)

    const heartBody = new THREE.Shape()
    const x = -2.5;
    const y = -5
    heartBody.moveTo(x + 2.5, y + 2.5)
    heartBody.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y)
    heartBody.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5)
    heartBody.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5)
    heartBody.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5)
    heartBody.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y)
    heartBody.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5)

    const extrudeSettings = {
        steps: 35,
        depth: 2.1,
        bevelEnabled: true,
        bevelThickness: 0.25,
        bevelSize: 1.2,
        bevelSegments: 5,
    };
    const material = new THREE.MeshPhongMaterial({
        color: RED,
        shininess: 30,
        emissive: 0x0,
        specular: 0x0
    });
    const heartFull = new THREE.ExtrudeGeometry(heartBody, extrudeSettings)
    const heart = new THREE.Mesh(heartFull, material)

    heart.rotation.z = THREE.Math.degToRad(180)
    heart.geometry.computeVertexNormals(true);

    scene.add(light)
    scene.add(heart)
    document.body.appendChild(renderer.domElement)

    const animate = function () {
        requestAnimationFrame( animate )
        heart.rotation.y += 0.01
        renderer.render(scene, camera)
    };

    animate()
}


window.onload = () => {
    heartInit()
}