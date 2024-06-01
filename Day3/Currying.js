// isRequired and minLength are curried functions that create specific validation rules.
// isRequired checks if a value is provided
const isRequired = fieldName => value => value ? '' : `${fieldName} is required.`;

// minLength checks if the value meets the minimum length requirement
const minLength = (fieldName, min) => value => value.length >= min ? '' : 
`${fieldName} must be at least ${min} characters long.`;

// validateFields applies an array of validators to corresponding values
const validateFields = validators => values => {
  return validators
    .map((validator, index) => validator(values[index])) // Apply each validator to the corresponding value
    .filter(error => error); // Filter out any empty strings (no errors)
};

// Example usage
// Define validators for each field
const validators = [
  isRequired('Username'),
  minLength('Password', 6)
];

// Form data to validate (Username is valid, but password is too short)
const formData = ['Srijal', '12345'];

// Validate the form data
const errors = validateFields(validators)(formData);

console.log(errors); // Output: ["Password must be at least 6 characters long."]