//Hidden search
const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () =>{
    search.classList.toggle('active')
    input.focus()
})

//Expanding Card
const panels = document.querySelectorAll('.panel') //DOM .querySelector()

panels.forEach((panel) =>{
    panel.addEventListener('click', () => {
        //DOM addEventListener(type, listener)
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}