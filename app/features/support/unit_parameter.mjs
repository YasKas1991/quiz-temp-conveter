import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  // This is just the name of the parameter type.
  name: "units",
  regexp: /C|F|Celsius|Fahrenheit/,
  transformer() {
    return "Celsius";
  },
});
