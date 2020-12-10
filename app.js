document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        perMove:1,
        fixedHeight:250,
        fixedWidth:250

    } ).mount()
} )