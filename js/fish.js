AFRAME.registerComponent("fish", {
    schema:{

    },
    init: function(){

        for(var i = 1; i <= 33; i++){
            var id = `bird${i}`
            var posX = (Math.random() * 100 + (-50))
            var posY = (Math.random() * 25 + (-1))
            var posZ = (Math.random() * 60 + (-40))

            var position = {x: posX, y:posY, z:posZ}

            this.birdPlace(id, position)
        }

    },
    birdPlace: function(id, position){
        var terrain1 = document.querySelector("#terrain");
        var bird1 = document.createElement("a-entity");
        bird1.setAttribute("position", position);
        bird1.setAttribute("id", id);
        bird1.setAttribute("scale", {x:0.25, y:0.25, z:0.25});
        bird1.setAttribute("gltf-model", "./assets/fish/scene.gltf");
        bird1.setAttribute("animation-mixer", {})
        bird1.setAttribute("static-body", {shape:"sphere", sphereRadius:5})
        //ring1.setAttribute("game", {elementId: `#${id}`})

        terrain1.appendChild(bird1)
    }

})