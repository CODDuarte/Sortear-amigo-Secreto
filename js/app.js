let amigos = [];

function adicionar() {
   let amigo = document.getElementById('nome-amigo').value.toUpperCase();
   if (amigo == '') {
      alert('Informe o nome do amigo!');
      return;
   }
   if (amigos.includes(amigo)){
      alert('Nome já adicionado!');
      retur;
   }
   let lista = document.getElementById('lista-amigos');
   amigos.push(amigo);
   if (lista.textContent == '') {
      lista.textContent = amigo;
   } else {
      lista.textContent = lista.textContent + ' , ' + amigo;
   }
   document.getElementById('nome-amigo').value = '';   
   document.getElementById('nome-amigo').focus();
   atualizarLista();
   atualizarSorteio();
}

function sortear() {
   if (amigos.length < 4) {
      alert('Adicione pelo menos 4 amigos!')
      return;
   }
   embaralha(amigos);
   let sorteio = document.getElementById('lista-sorteio');
   for (let i = 0; i < amigos.length; i++) {
      if( i == amigos.length - 1) {
         sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->' + amigos[0] + '<br>';
      } else{
   sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->' + amigos[i + 1] + '<br>';
   }}
}

function excluirAmigo(index) {
   amigos.splice(index, 1);
   atualizarLista();
   atualizarSorteio();
}

function embaralha(lista) {
   for (let indice = lista.length; indice; indice--) {
      const indiceAleatorio = Math.floor(Math.random() * indice);
      [lista[indice - 1], lista[indiceAleatorio]] =
         [lista[indiceAleatorio], lista[indice - 1]];
   }
}

function atualizarSorteio() {
   let sorteio = document.getElementById('lista-sorteio');
   sorteio.innerHTML = '';
}



function atualizarLista() {
   let lista = document.getElementById('lista-amigos');

   for(let i = 0; i < amigos.length; i++) {
      let paragrafo = document.createElement('p');
      paragrafo.textContent = amigos[i];

      paragrafo.addEventListener('click', function() {
         excluirAmigo(i);
      });

      lista.appendchld(paragrafo);
   }
}

function reiniciar() {
   amigos = [];
   document.getElementById('lista-amigos').innerHTML = '';
   document.getElementById('lista-sorteio').innerHTML = '';
   document.getElementById('nome-amigo').focus();
}