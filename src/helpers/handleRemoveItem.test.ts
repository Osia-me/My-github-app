import handleRemoveItem from "./handleRemoveItem";

describe("test handleRemoveItem funciton", () => {
  test("should return array without provided item", () => {
    const userId = 2;
    const favorites = [1, 2, 3, 4, 5];
    expect(handleRemoveItem(userId, favorites)).toEqual([1, 3, 4, 5]);
  });
});
