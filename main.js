document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration:150,
        dist:50,/* calculo la prespectiva */
        shift:1,
        /* padding:1, */
        numVisible: 3, /* establescon cuadno carousel van a ser visibles */
        indicators: true,/* los puntitos que indican la imagen */
        noWrap:false/* inicia con el primer slide y termina en el ultimo con true, es decir hay a la izquiera y derecha */
        
    });
});