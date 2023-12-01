function completatarefa(id){
    fetch("http://localhost:3000/completar", {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({id})

    })

    window.location.reload()
}


function descompletarTarefa(id){
    fetch("http://localhost:3000/descompletar", {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({id})

    })

    window.location.reload()
}
   

function alterartema(){
    const tema = localStorage.getItem("tema")
    const bory = document.querySelector("body")
    const button = document.querySelector(".tema-button")

    if (tema){
        let novoTema

        if (tema == "Light"){
            novoTema = "dark"
            button.innerHTML= `<img src="/imagens/sun-icon.png" alt="icone da sol>`
            bory.classList.remove("light")
            bory.classList.add("dark")
        }else {
            novoTema = "Light"
            button.innerHTML = `<img src="/imagens/moon-icon.png" alt="icone da lua">`
            bory.classList.remove("dark")
            bory.classList.add("light")
        }


        localStorage.setItem("tema", novoTema)
        return
    }

    localStorage.setItem("tema", "dark")
    bory.classList.add("dark")
}

function verificartema(){
    const tema = localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector(".tema-button")

        if (tema) {
            if (tema == "dark"){
                body.classList.add("dark")
                button.innerHTML= `<img src="/imagens/sun-icon.png" alt="icone da sol>`
            }else {
                body.classList.add("light")
                button.innerHTML = `<img src="/imagens/moon-icon.png" alt="icone da lua">`
            }
        }
    
}

verificartema()