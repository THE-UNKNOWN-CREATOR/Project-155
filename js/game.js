AFRAME.registerComponent("game", {
    schema: {
        elementId:{
            type:"string",
            default:"#ring1"
        }
    },

    // init: function(){
    //     var dur = 120;
    //     var timer1 = document.querySelector("#timer");
    //     this.startTimer(dur, timer1);
    // },

    update: function(){
        this.collision(this.data.elementId)
    },

    // startTimer: function(dur, timer1){
    //     var minute, second;
    //     setInterval(() => {
    //         if(dur >= 0){
    //             minute = parseInt(dur/60);
    //             second = parseInt(dur%60);

    //             if(minute < 10){
    //                 minute = "0" + minute;
    //             }
    //             if(second < 10){
    //                 second = "0" + second;
    //             }

    //             timer1.setAttribute("text", {value: minute + ":" + second})
    //             dur -= 1;
    //         }
    //     }, 1000)
    // },

    collision: function(elementId){
        const element = document.querySelector(elementId)
        var score;
        element.addEventListener("collide", (e) => {
            if(elementId.includes("#ring")){
                element.setAttribute("visible", false)
                //this.updateScore();
                //this.updateTarget();
            }
            else if(elementId.includes("#bird")){
                console.log(elementId + "collision")
            }
        })
    },

    // updateTarget: function(){
    //     var targetsLeft = document.querySelector("#target");
    //     var count = targetsLeft.getAttribute("text").value;
    //     var countInt = parseInt(count);

    //     countInt -= 1;
    //     targetsLeft.setAttribute("text", {value:countInt});
    // },

    
    // updateScore: function(){
    //     var score = document.querySelector("#score");
    //     var scoreNow = score.getAttribute("text").value;
    //     var countInt = parseInt(scoreNow);

    //     countInt += 20;
    //     score.setAttribute("text", {value:countInt});
    // },
    
    // gameOver: function(){
    //     var gameOver = document.querySelector("#gameOver");
    //     var plane = document.querySelector("#airplane");

    //     gameOver.setAttribute("visible", true);
    //     plane.setAttribute("dynamic-body", {mass: 1});
    // }

})