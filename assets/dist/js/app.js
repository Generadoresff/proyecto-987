$(document).ready(function () {
    $('.portfolio-item a img').on('click', function () {
        console.log('asd');
        $(this).toggleClass('border-active');
    });

    $('#generate').on('click', function () {
        let id = $('#insert-your-id').val();
        quantitySelected = $('.portfolio-item a img.border-active').length;

        switch (true) {
            case id === '':
                Swal.fire({
                    type: "warning",
                    title: "Atención!",
                    html: 'Debes ingresar tu ID para continuar...',
                    showConfirmButton: false,
                    timer: 3000
                });
                break;
            case quantitySelected === 0:
                Swal.fire({
                    type: "warning",
                    title: "Atención!",
                    html: 'Debes seleccionar al menos 1 item',
                    showConfirmButton: false,
                    timer: 3000
                });
                break;
            default:
                var gif = document.getElementById('gifElement');
                var overlay = document.getElementById('overlay');
                gif.style.display = 'block';
                overlay.style.display = 'block';

                // Reiniciar la animación del GIF cambiando su src
                var src = gif.src;
                gif.src = '';
                gif.src = src;

                setTimeout(function () {
                    gif.style.display = 'none';
                    overlay.style.display = 'none';

                    Swal.fire({
                        title: "¡Listo!",
                        html: "Su pedido llegará en: 5 minutos.<br>Cantidad de items: " + quantitySelected + "<br>Donación #: 15019",
                        showConfirmButton: false
                    });
                }, 2500); // 2000 milisegundos = 2 segundos
        }
    })

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"  // Color blanco para las partículas
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2E86C1",  // Color verde para las líneas (efecto neón)
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

});