export function getCountProductsFavorite() {
  let favorite = JSON.parse(localStorage.getItem("favorites"));
  return favorite ? favorite.products.length : 0;
}
