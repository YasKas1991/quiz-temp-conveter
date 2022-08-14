import { Given } from "@cucumber/cucumber";

Given("I have a {word} of {float}° Celsius", (word, float) => {
  console.log(float);
});
