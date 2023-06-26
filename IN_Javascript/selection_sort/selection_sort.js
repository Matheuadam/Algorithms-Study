// Algoritmo que realiza uma ordenação por seleção,
// é um bom algoritmo, mas não é muito rápido.

// Função criada para encontrar o maior valor utilizando recursão
function findGreater(arr) {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  let sub_max = findGreater(arr.slice(1));
  return arr[0] > sub_max ? arr[0] : sub_max;
}

// Função criada para encontrar o menor valor utilizando loop for
function findSmallest(arr) {
  let lesser = arr[0];
  let lesserind = 0;
  //
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lesser) {
      lesser = arr[i];
      lesserind = i;
    }
  }

  return lesserind;
}
// Função na qual ordena os valores e cria um novo array ordenado
function selection_sort(array) {
  let newArray = [];
  let length = array.length;

  for (let i = 0; i < length; i++) {
    let lesser = findSmallest(array);
    newArray.push(array.splice(lesser, 1)[0]);
  }
  return newArray;
}

function count_e(arr) {
  if (arr == []) {
    return 0;
  } else {
    return arr[0] + count_e(arr.slice(1));
  }
}

console.log(findGreater([3, 6, 2, 8, 1])); // Imprime 8
