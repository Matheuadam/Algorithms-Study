// Algoritmo que realiza uma pesquisa binária, aumentando o desempenho
// do código do que se fosse usado uma pesquisa linear

function binary_search(list, i) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    // verify the central element
    let midlle = Math.floor((low + high) / 2);
    let kick = list[midlle];
    // Find the i
    if (kick == i) {
      return midlle;
    }
    // kick too high
    else if (kick > i) {
      high = midlle;
    }
    // kick too low
    else {
      low = midlle + 1;
    }
  }
  // the 'i' doesn't exist
  return None;
}
