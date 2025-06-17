/*
Write a JavaScript exercise to create a variable using a user-defined name.

This JavaScript exercise involves creating a variable with a name provided by the user dynamically during runtime. It typically utilizes the eval() function or the object bracket notation window[name] to achieve this dynamic variable creation based on user input. However, it's important to handle user input securely to prevent code injection vulnerabilities.
*/

const userDefinedVar = (varname, varvalue) => {
    // Validate variable name (must be a valid JavaScript identifier)
    const isValidIdentifier = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(varname);
    if (!isValidIdentifier) {
        return "Error: Invalid variable name. Use letters, numbers, $, or _, starting with a letter, $, or _.";
    }

    // Use a dedicated object to store variables
    const variables = {};
    variables[varname] = varvalue;

    // Return confirmation
    return `Variable '${varname}' created with value: ${variables[varname]}`;
};

console.log(userDefinedVar("name", "John Doe"));
console.log(userDefinedVar("age", 30));
console.log(userDefinedVar("country", "USA"));
console.log(userDefinedVar("123invalid", 100)); // Invalid name
console.log(userDefinedVar("valid_name", true));
console.log(userDefinedVar("invalid name", 999)); // Invalid name
