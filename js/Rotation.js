AFRAME.registerComponent( "rotate", {
  schema:{
      speedOfRotation:{
          type:"number",
          default:0
      },
  },

  init: function(){
      window.addEventListener("keydown", (e)=>{
          if(e.key === "ArrowRight"){
              if(this.data.speedOfRotation < 0.1){
                  this.data.speedOfRotation += 0.01
              }
          }
          if(e.key === "ArrowLeft"){
              if(this.data.speedOfRotation > -0.1){
                  this.data.speedOfRotation -= 0.01
              }
          }
      })
  },

  tick: function(){
      var rotator = this.el.getAttribute("rotation")
      rotator.y += this.data.speedOfRotation
      
      this.el.setAttribute("rotation", {
          x:rotator.x,
          y:rotator.y,
          z:rotator.z
      })
  }
} )

AFRAME.registerComponent( "tilt", {
  schema:{
      speedOfRotation:{
          type:"number",
          default:0
      },

      speedOfAscend:{
          type:"number",
          default:0
      }
  },

  init: function(){
      window.addEventListener("keydown", (e)=>{

          this.data.speedOfRotation = this.el.getAttribute("rotation")
          this.data.speedOfAscend = this.el.getAttribute("position")

          var planeRotate = this.data.speedOfRotation
          var planeAscend = this.data.speedOfAscend
          

          if(e.key === "ArrowRight"){
              if(planeRotate.x < 10){
                  planeRotate.x += 0.5
                  this.el.setAttribute("rotation", planeRotate)
              }
          }
          if(e.key === "ArrowLeft"){
              if(planeRotate.x > -10){
                  planeRotate.x -= 0.5
                  this.el.setAttribute("rotation", planeRotate)
              }
          }

          if(e.key === "ArrowUp"){
              if(planeRotate.z < 20){
                  planeRotate.z += 0.5
                  this.el.setAttribute("rotation", planeRotate)
              }
              if(planeAscend.y < 2){
                  planeAscend.y += 0.01
                  this.el.setAttribute("position", planeAscend)
              }
          }
          if(e.key === "ArrowDown"){
              if(planeRotate.z > -10){
                  planeRotate.z -= 0.5
                  this.el.setAttribute("rotation", planeRotate)
              }
              if(planeAscend.y > -2){
                  planeAscend.y -= 0.01
                  this.el.setAttribute("position", planeAscend)
              }
          }
      })
  },

  tick: function(){
      var rotator = this.el.getAttribute("rotation")
      rotator.y += this.data.speedOfRotation
      
      this.el.setAttribute("rotation", {
          x:rotator.x,
          y:rotator.y,
          z:rotator.z
      })
  }
} )