const monstros = [
    {
        id: 1,
        nome: 'Monstrone',
        altura: 2,
        habilidades: 'Pequeno, Feio e Rápido',
        foto: 'https://robohash.org/monstrone'
    },
    {
        id: 2,
        nome: 'Monstrotwo',
        altura: 3,
        habilidades: 'Médio, Assustador e Lento',
        foto: 'https://robohash.org/monstrwo'
    },
    {
        id: 3,
        nome: 'Monstrothree',
        altura: 6,
        habilidades: 'Grande, Desajeitado e Assustador',
        foto: 'https://robohash.org/monstrothree'
    },
    {
        id: 4,
        nome: 'Monstrofour',
        altura: 5,
        habilidades: 'Grande, Rápido e Barulhento',
        foto: 'https://robohash.org/monstrofour'
    }
]


const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map((monstro) => {
    return `<div>
            <p>Id: ${monstro.id}</p>
            <p>Nome: ${monstro.nome}</p>
            <p>Habilidade: ${monstro.habilidades}</p>
            <img src="${monstro.foto}">
    </div>`
})

secao.innerHTML = todosOsMonstros


