const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
//creamos la constnat que contendra todos los sonidos del html
//en un array

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    //se crea una constante btn y dentro de esta se crea una 
    //se les agrega una clase btn

    btn.innerText = sound
    //en btn me va a renderizar el elemento sound del arrow fuction
    
    btn.addEventListener('click', () => {
        
        stopSongs()
        //se ejecuta la funcion 

        document.getElementById(sound).play()
        //play()-comienza a reproducir el audio o video actual.
        //en pocas palabras del html lo elementos con el id sound 
        //reproduscalos al evento click
    })

    document.getElementById('buttons').appendChild(btn)
    //en el elemento con el id buttons creeme hijos btn
    //me va a crear un hijo por cada sonido
})


//fucnio para parar el audio
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
        /*especifica el tiempo de reproducción actual en segundos. */
    })
}