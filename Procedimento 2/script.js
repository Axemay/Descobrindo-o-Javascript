async function initCriacao(arquivo) {
    const receitas = await fetch(arquivo);
    const receitasArquivo = await receitas.json();

    const pnlCatalogo= document.getElementById("pnlCatalogo");
    const h1 = document.createElement('h1')
    const section = document.querySelector('section')
    
    h1.innerHTML = `Temos ${receitasArquivo.length} receitas`
    section.insertBefore(h1, pnlCatalogo)
    receitasArquivo.forEach((receita) => {
      const cardReceita = criarReceita(receita);
      cardReceita.classList.add('card-receita')
      pnlCatalogo.appendChild(cardReceita);
      
    });
  }

  function criarReceita(receita) {
    const card = document.createElement("div");
    card.classList.add("main-receitas-card");
    const ingredientes = getListaIngredientes(receita)
    ingredientes.classList.add('lista-receita')
    const titulo = document.createElement('h2')
    titulo.classList.add('second-title')
    titulo.innerHTML = receita.titulo
    const imagem = document.createElement('img')
    const divTopo = document.createElement('div')
    divTopo.classList.add('topo')
    divTopo.appendChild(imagem)
    divTopo.appendChild(titulo)
    imagem.src = receita.imagem
    imagem.classList.add('foto-receita')
    imagem.style.maxWidth = '250px'
    const modoPreparo = document.createElement('p')
    modoPreparo.innerHTML = receita.preparo
    modoPreparo.classList.add('modo-preparo')

    const separador = document.createElement('hr')

    card.appendChild(divTopo)
    card.appendChild(ingredientes)
    card.appendChild(separador)
    card.appendChild(modoPreparo)

    card.style.width = '250px'

    return card
  }



  function getListaIngredientes(receita) {
    const lista = receita
    const listaIngredientes = lista.ingredientes.map(function (elemento) {
        return elemento
          
    })

    const elementos = listaIngredientes.reduce((lista, valor) => {
    const novoItem = document.createElement("li");
    novoItem.textContent = valor;
    lista.appendChild(novoItem);
    return lista;
  }, document.createElement("ul"));
  return elementos
  } 
  
  
    initCriacao('./receitas.json')