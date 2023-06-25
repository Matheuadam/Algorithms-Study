const { Deque } = require("collections");

const filaDePesquisa = new Deque();
filaDePesquisa.add(...grafo["voce"]);

function pessoaEVendedor(nome) {
  return nome.slice(-1) === "m";
}

while (filaDePesquisa.length > 0) {
  const pessoa = filaDePesquisa.shift();

  if (!verificadas.includes(pessoa)) {
    if (pessoaEVendedor(pessoa)) {
      console.log(pessoa + " é um vendedor de manga!");
      return true;
    } else {
      filaDePesquisa.add(...grafo[pessoa]);
    }
  }
}
return false;

function breadth_search(nome) {
  filaDePesquisa = new Deque();
}

/* 
A very intelligent turtle
Found progamming  UNIX a hurdle
        the system you see
        Ran as slow as did Headers,
And that's not saying much for turtle.
*/
