import React from "react";
import { render } from "@testing-library/react";
import Search from ".";
import { expect } from "jest";
describe("Test search component", () => {
  test("Input change", () => {
    let container = render(<Search />);
    let searchComp = container.getByTestId("search-comp");
    expect(searchComp);
  });
});
