// Tabelas hash, dicionarios mapas. em js usamos o conceito de objetos para representa-las
// Sempre haverá um valor para uma chave
// EX: tabelahash["chave"] = valor;

// Criando uma tabela hash para armazenar informações de alunos
const alunos = {};

// Adicionando informações de alunos à tabela hash
alunos["João"] = { idade: 20, curso: "Engenharia" };
alunos["Maria"] = { idade: 22, curso: "Medicina" };
alunos["Pedro"] = { idade: 19, curso: "Direito" };

// Acessando informações de um aluno específico
console.log(alunos["João"]); // { idade: 20, curso: 'Engenharia' }
console.log(alunos["Maria"]); // { idade: 22, curso: 'Medicina' }

// Implementando uma tabela hash com resolução de colisões usando encadeamento separado
class TabelaHash {
  constructor() {
    this.tabela = new Array(10);
  }

  adicionar(chave, valor) {
    const indice = this.calcularIndice(chave);
    if (!this.tabela[indice]) {
      this.tabela[indice] = [];
    }
    this.tabela[indice].push({ chave, valor });
  }

  obter(chave) {
    const indice = this.calcularIndice(chave);
    const lista = this.tabela[indice];
    if (lista) {
      for (const elemento of lista) {
        if (elemento.chave === chave) {
          return elemento.valor;
        }
      }
    }
    return undefined;
  }

  calcularIndice(chave) {
    let indice = 0;
    for (let i = 0; i < chave.length; i++) {
      indice += chave.charCodeAt(i);
    }
    return indice % this.tabela.length;
  }
}

// Exemplo de uso da tabela hash com resolução de colisões
const tabela = new TabelaHash();
tabela.adicionar("abc", 10);
tabela.adicionar("def", 20);
tabela.adicionar("ghi", 30);

console.log(tabela.obter("abc")); // 10
console.log(tabela.obter("def")); // 20
console.log(tabela.obter("ghi")); // 30
