import { Given, When, Then } from "@cucumber/cucumber";
import tryConvert from "../../app/index.js";

Given("I have a temperature of {float}° {units}", (temp2Convert, _) => {
  this.temp2Convert = temp2Convert;
});

When("I convert it to degrees {units}", (units) => {
  this.convertedTemp = tryConvert(this.temp2Convert, units);
});

Then("I see {float}° {untis}", (expected, _) => {
  expect(this.covertedTemp).toBe(expected.toString());
});
