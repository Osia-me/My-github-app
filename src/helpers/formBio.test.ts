import { formBio } from "./formBio";

describe("test formBio funciton", () => {
  test("should return ... if bio is empty string", () => {
    const input = "";
    expect(formBio(input)).toBe("...");
  });
  test("should return actual bio if bio is 40 or less charecters", () => {
    const input = "Short bio";
    expect(formBio(input)).toBe(input);
  });
  test("should cut bio if bio is more then 40 charecters", () => {
    const input =
      "Very long long long long long long long long long long long bio";
    expect(formBio(input)).toBe("Very long long long long long long long  ...");
  });
});
