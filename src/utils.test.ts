import { exampleTest } from "./utils";

describe("Utils Test", () => {
  it("Should return Hello World", () => {
    expect(exampleTest()).toEqual("Hello World!");
  });
});
