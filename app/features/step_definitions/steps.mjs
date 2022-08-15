import { Given, When, Then } from "@cucumber/cucumber";
import tryConvert from "../../app/index.js";

// Arrange
Given("I have a temperature of {float}° {units}", (temp2Convert, _) => {
  console.log(this);
  this.temp2Convert = temp2Convert;
});

// Act
When("I convert it to degrees {units}", (units) => {
  console.log(this);
  this.convertedTemp = tryConvert(this.temp2Convert, units);
});

// Assert
Then("I see {float}° {units}", function (expected, _) {
  const expectHelper = () => {
    console.log(this);
    expect(this.convertedTemp).toBe(expected.toString());
  };

  expectHelper();
});

Then(" I see a blank string", function () {
  const expectHelper = () => {
    console.log(this);
    expect(this.convertedTemp).toBe("");
  };

  expectHelper();
});
