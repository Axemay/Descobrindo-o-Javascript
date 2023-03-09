

const swap = (array, primeiraPosicao, segundaPosicao) => {
  [array[primeiraPosicao], array[segundaPosicao]] = [
    array[segundaPosicao],
    array[primeiraPosicao],
  ];
};

const shuffle = (array, numeroTrocas) => {
  for (let i = 0; i < numeroTrocas; i++) {
    let primeiroIndice = Math.floor(Math.random() * array.length);
    let segundoIndice = Math.floor(Math.random() * array.length);
    swap(array, primeiroIndice, segundoIndice);
  }
  return array;
};

const particionamento = (array, primeiraPosicao, segundaPosicao) => {
  let pivot = array[segundaPosicao];
  let i = primeiraPosicao - 1;
  for (let j = primeiraPosicao; j < segundaPosicao; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, segundaPosicao);
  return i + 1;
};

const bubble_sort = (array) => {
  let tamanho_array = array.length;
  for (let i = 0; i < tamanho_array; i++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
      }
    }
  }
  return array;
};

const selection_sort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let indice = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indice]) {
        indice = j;
      }
    }
    if (indice !== i) {
      swap(array, i, indice);
    }
  }
  return array;
};

const quick_sort = (array, primeiraPosicao, segundaPosicao) => {
  let umaArray = array
  if (primeiraPosicao < segundaPosicao) {
    let indicePivot = particionamento(umaArray, primeiraPosicao, segundaPosicao);
    quick_sort(umaArray, primeiraPosicao, indicePivot - 1);
    quick_sort(umaArray, indicePivot + 1, segundaPosicao);
  }
  return umaArray;
};


function add() {
  const lista = document.getElementById("valores");
  let valor = document.getElementById("valor");
  let ItemValor = valor.value;
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");
  novoItem.innerHTML += ItemValor;
  lista.appendChild(novoItem);
  return lista
}

function ordenar() {
  const valores = document.getElementById("valores");
  const arrayValores = Array.from(valores.children);

  const listaValores = arrayValores.map((elemento) =>
    +elemento.textContent
);

  const selecao = document.querySelector("#opcoesFuncoes");
  const valorSelecao = eval(selecao.options[selecao.selectedIndex].value);

  // const novaLista = valorSelecao(listaValores)
  // console.log(novaLista)

  const listaAlterada = valorSelecao(listaValores);

  const novaLista = listaAlterada.reduce((lista, valor) => {
    const novoItem = document.createElement("li");
    novoItem.textContent = valor;
    lista.appendChild(novoItem);
    return lista;
  }, document.createElement("ul"));

  novaLista.id = 'valores'
  valores.replaceWith(novaLista);

  console.log(novaLista)
  
}

function misturar(){
  const listaOrdenada = document.getElementById('valores')
  const itensLista = document.querySelectorAll('li');
  novaArray = Array.from(itensLista)

  const listaValores = novaArray.map((elemento) =>
  +elemento.textContent
);

  const numeroTrocas = document.getElementById('valor').value;
  shuffle(listaValores, numeroTrocas)
  console.log(listaValores)

const listaMisturada = listaValores.reduce((lista, valor) => {
  const novoItem = document.createElement("li");
  novoItem.textContent = valor;
  lista.appendChild(novoItem);
  return lista;
}, document.createElement("ul"));


listaOrdenada.replaceWith(listaMisturada);
listaMisturada.id = 'valores'

}
