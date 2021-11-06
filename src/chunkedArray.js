import { Validator } from "./validator";

export const chunkedArrayFunction = (array, numberOfSubArray) => {
  
  // check if the data is valid or not
  const isValidationSuccessful = Validator(array, numberOfSubArray);

  if (isValidationSuccessful !== "Success") {
    return isValidationSuccessful;
  }

  var noOfElementInOneArray = Math.ceil(array.length / numberOfSubArray);
  let newArray = [];
  let index = 0;
  while (index < array.length) {
    newArray.push(array.slice(index, index + noOfElementInOneArray));
    index = index + noOfElementInOneArray;
  }
  return newArray;
  
};
