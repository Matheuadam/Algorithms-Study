// Find the missing number
// Você recebe uma lista de números inteiros de 1 a N, onde N é um número inteiro maior que 1.
// A lista contém todos os números de 1 a N, exceto um número que está faltando.
// Seu objetivo é encontrar esse número ausente.

/*
Exemplo:
Dada a lista [1, 2, 3, 4, 6, 7, 8, 9, 10], o número ausente é o 5.
*/

function find_Mnumber(list) {
  let first = 0;
  let last = list.length -1;

  while ( first <= last) {
    let middle = Math.floor((first + last)/ 2);

    if (){}
  }
}

function findMissingNumber(lista) {
    let start = 0;
    let end = lista.length - 1;
  
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
  
      // Verificar se o número ausente está antes ou depois do elemento do middle
      if (lista[middle] - middle !== lista[0]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
  
    return lista[0] + start;
  }
  
  // Exemplo de uso
  const lista = [1, 2, 3, 4, 6, 7, 8, 9, 10];
  const numeroAusente = findMissingNumber(lista);
  console.log("O número ausente é:", numeroAusente);


  
