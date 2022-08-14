import { defineParamterType } from "@cucumber/cucumber";

defineParamterType({
  name: "units",
  regexp: /C|F|Celsius|Fahrenheit/,
});
