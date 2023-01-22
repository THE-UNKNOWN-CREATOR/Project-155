AFRAME.registerComponent("coin", {
    schema:{

    },
    init: function(){

        for(var i = 1; i <= 33; i++){
            var id = `ring${i}`
            var posX = (Math.random() * 100 + (-50))
            var posY = (Math.random() * 20 + (19))
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
        bird1.setAttribute("geometry", {primitive: "circle", radius: 1});
        bird1.setAttribute("animation", {
            property: "rotation",
            to: "0 320 0",
            loop: true,
            dur:1000
        })
        bird1.setAttribute("material", "color", "#ff9100")

        bird1.setAttribute("static-body", {shape:"sphere", sphereRadius:5})
        //ring1.setAttribute("game", {elementId: `#${id}`})

        terrain1.appendChild(bird1)
    }

})