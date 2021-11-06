

var player = {
    videoPlaying: 1,
    currentTime: 0,
};

function iniciar() {
    var video = document.getElementById("videod");
    var botonsi = document.getElementById("btnsi");
    var botonno = document.getElementById("btnno");
    var boton3 = document.getElementById("btn3");
    var boton4 = document.getElementById("btn4");
    var boton5 = document.getElementById("btn5");
    var boton6 = document.getElementById("btn6");
    var boton7 = document.getElementById("final");
    var barra1 = document.getElementById("bar1");
    

    video.ontimeupdate = function () {

        player.currentTime = video.currentTime;

        if (player.currentTime > 41 && player.videoPlaying == 1)
        {
            botonsi.style.display = "initial";
            botonno.style.display = "none";
            boton3.style.display = "none";
            boton4.style.display = "none";
            boton5.style.display = "none";
            boton6.style.display = "none";
            boton7.style.display = "none";
            barra1.style.width = "0%"

            botonsi.onclick = function () {
                video.src = "../videos/2.mp4";
                video.play();
                player.videoPlaying = 2;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
                barra1.style.width = "16%";
                
            }
        }

        if (player.currentTime > 7 && player.videoPlaying == 2) {
            botonsi.style.display = "initial";
            botonno.style.display = "initial";
            boton3.style.display = "none";
            boton4.style.display = "none";
            boton5.style.display = "none";
            boton6.style.display = "none";
            boton7.style.display = "none";
            barra1.style.width = "16%"
            botonsi.onclick = function () {
                video.src = "../videos/1.mp4";
                video.play();
                player.videoPlaying = 2;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            botonno.onclick = function () {
                video.src = "../videos/3.mp4";
                video.play();
                player.videoPlaying = 3;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
                barra1.style.width = "33%";
                

            }
            
        }

        if (player.currentTime > 5 && player.videoPlaying == 3) {
            botonsi.style.display = "initial";
            botonno.style.display = "initial";
            boton3.style.display = "initial";
            boton4.style.display = "none";
            boton5.style.display = "none";
            boton6.style.display = "none";
            boton7.style.display = "none";
            barra1.style.width = "33%"
            botonsi.onclick = function () {
                video.src = "../videos/1.mp4";
                video.play();
                player.videoPlaying = 3;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            botonno.onclick = function () {
                video.src = "../videos/2.mp4";
                video.play();
                player.videoPlaying = 3;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            
            boton3.onclick = function () {
                video.src = "../videos/3.mp4";
                video.play();
                player.videoPlaying = 4;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
                barra1.style.width = "50%";
            }
        }

        if (player.currentTime > 5 && player.videoPlaying == 4) {
            botonsi.style.display = "initial";
            botonno.style.display = "initial";
            boton3.style.display = "initial";
            boton4.style.display = "initial";
            boton5.style.display = "none";
            boton6.style.display = "none";
            boton7.style.display = "none";
            barra1.style.width = "50%";

            botonno.onclick = function () {
                video.src = "../videos/2.mp4";
                video.play();
                player.videoPlaying = 4;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            botonsi.onclick = function () {
                video.src = "../videos/3.mp4";
                video.play();
                player.videoPlaying = 4;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            boton3.onclick = function () {
                video.src = "../videos/4.mp4";
                video.play();
                player.videoPlaying = 4;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            boton4.onclick = function () {
                video.src = "../videos/5.mp4";
                video.play();
                player.videoPlaying = 5;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
                barra1.style.width = "66%";
            }
        }
        if (player.currentTime > 5 && player.videoPlaying == 5) {
            botonno.style.display = "initial";
            botonsi.style.display = "initial";
            boton3.style.display = "initial";
            boton4.style.display = "initial";
            boton5.style.display = "initial";
            boton6.style.display = "none";
            boton7.style.display = "none";
            barra1.style.width = "66%";

            botonno.onclick = function () {
                video.src = "../videos/2.mp4";
                video.play();
                player.videoPlaying = 5;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            botonsi.onclick = function () {
                video.src = "../videos/3.mp4";
                video.play();
                player.videoPlaying = 5;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            boton3.onclick = function () {
                video.src = "../videos/4.mp4";
                video.play();
                player.videoPlaying = 5;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            boton4.onclick = function () {
                video.src = "../videos/5.mp4";
                video.play();
                player.videoPlaying = 5;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            boton5.onclick = function () {
                video.src = "../videos/6.mp4";
                video.play();
                player.videoPlaying = 6;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
                barra1.style.width = "82%";
            }
        }
        if (player.currentTime > 5 && player.videoPlaying == 6) {
            botonno.style.display = "initial";
            botonsi.style.display = "initial";
            boton3.style.display = "initial";
            boton4.style.display = "initial";
            boton5.style.display = "initial";
            boton6.style.display = "initial";
            boton7.style.display = "none";
            barra1.style.width = "82%";

            botonno.onclick = function () {
                video.src = "../videos/2.mp4";
                video.play();
                player.videoPlaying = 6;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            botonsi.onclick = function () {
                video.src = "../videos/3.mp4";
                video.play();
                player.videoPlaying = 6;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            boton3.onclick = function () {
                video.src = "../videos/4.mp4";
                video.play();
                player.videoPlaying = 6;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            boton4.onclick = function () {
                video.src = "../videos/5.mp4";
                video.play();
                player.videoPlaying = 6;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
            }
            boton5.onclick = function () {
                video.src = "../videos/6.mp4";
                video.play();
                player.videoPlaying = 6;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
                
            }
            boton6.onclick = function () {
                video.src = "../videos/7.mp4";
                video.play();
                player.videoPlaying = 7;
                botonsi.style.display = "none";
                botonno.style.display = "none";
                boton3.style.display = "none";
                boton4.style.display = "none";
                boton5.style.display = "none";
                boton6.style.display = "none";
                boton7.style.display = "none";
                barra1.style.width = "100%";
            }
        }
        if (player.currentTime > 5 && player.videoPlaying == 7) {
            
            boton7.style.display = "initial";
            boton7.onclick = function () {
                barra1.style.width = "0%";
                $(document).ready(function () {
                    /* setTimeout(function() {
                        
                    }, 500); */
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            video.src = "../videos/1.mp4";
                            video.play();
                            player.videoPlaying = 1;
                            botonsi.style.display = "none";
                            botonno.style.display = "none";
                            boton3.style.display = "none";
                            boton4.style.display = "none";
                            boton5.style.display = "none";
                            boton6.style.display = "none";
                            boton7.style.display = "none";
                        }else{
                            botonno.style.display = "initial";
                            botonsi.style.display = "initial";
                            boton3.style.display = "initial";
                            boton4.style.display = "initial";
                            boton5.style.display = "initial";
                            boton6.style.display = "initial";
                            boton7.style.display = "none";
                            barra1.style.width = "100%";
                            botonno.onclick = function () {
                                video.src = "../videos/2.mp4";
                                video.play();
                                player.videoPlaying = 6;
                                botonsi.style.display = "none";
                                botonno.style.display = "none";
                                boton3.style.display = "none";
                                boton4.style.display = "none";
                                boton5.style.display = "none";
                                boton6.style.display = "none";
                                boton7.style.display = "none";
                            }
                            botonsi.onclick = function () {
                                video.src = "../videos/3.mp4";
                                video.play();
                                player.videoPlaying = 6;
                                botonsi.style.display = "none";
                                botonno.style.display = "none";
                                boton3.style.display = "none";
                                boton4.style.display = "none";
                                boton5.style.display = "none";
                                boton6.style.display = "none";
                                boton7.style.display = "none";
                            }
                            boton3.onclick = function () {
                                video.src = "../videos/4.mp4";
                                video.play();
                                player.videoPlaying = 6;
                                botonsi.style.display = "none";
                                botonno.style.display = "none";
                                boton3.style.display = "none";
                                boton4.style.display = "none";
                                boton5.style.display = "none";
                                boton6.style.display = "none";
                                boton7.style.display = "none";
                            }
                            boton4.onclick = function () {
                                video.src = "../videos/5.mp4";
                                video.play();
                                player.videoPlaying = 6;
                                botonsi.style.display = "none";
                                botonno.style.display = "none";
                                boton3.style.display = "none";
                                boton4.style.display = "none";
                                boton5.style.display = "none";
                                boton6.style.display = "none";
                                boton7.style.display = "none";
                            }
                            boton5.onclick = function () {
                                video.src = "../videos/6.mp4";
                                video.play();
                                player.videoPlaying = 6;
                                botonsi.style.display = "none";
                                botonno.style.display = "none";
                                boton3.style.display = "none";
                                boton4.style.display = "none";
                                boton5.style.display = "none";
                                boton6.style.display = "none";
                                boton7.style.display = "none";
                                
                            }
                            boton6.onclick = function () {
                                video.src = "../videos/7.mp4";
                                video.play();
                                player.videoPlaying = 7;
                                botonsi.style.display = "none";
                                botonno.style.display = "none";
                                boton3.style.display = "none";
                                boton4.style.display = "none";
                                boton5.style.display = "none";
                                boton6.style.display = "none";
                                boton7.style.display = "none";
                            }
                        }

                    })
                });
                
            }
            
        }
    }
}