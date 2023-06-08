//Algoritmo de ordenação muito mais rápido que o selection_Sort utiliando recursão

function quicksort(arr) {
  // definindo caso base:
  if (arr.length < 2) {
    return arr;
  } else {
    let pivo = arr[0]; // caso recursivo
    let smallest = arr.slice(1).filter((i) => i <= pivo); //Filtrando array com elementos menores
    let greater = arr.slice(1).filter((i) => i > pivo); //Filtrando array com elementos maiores
    return quicksort(smallest).concat([pivo], quicksort(greater));
  }
}

console.log(quicksort([5, 2, 8, 3, 1])); // Imprime [1, 2, 3, 5, 8]
