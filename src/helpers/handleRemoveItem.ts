export default function handleRemoveItem(userId: number, favourites: number[]) {
  const index = favourites.findIndex((id) => id === userId);
  const temperary = [...favourites];
  temperary.splice(index, 1);
  return temperary;
}
