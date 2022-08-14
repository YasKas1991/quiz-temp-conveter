import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "units",
  regexp: /C|F|Celsius|Fahrenheit/,
  transformer() {
    return "Celsius";
  },
});
