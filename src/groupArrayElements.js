export const groupArrayElements = (input, size) => {
  if (!Array.isArray(input)) {
    throw new Error(
      `ArgumentError: Expected \`input\` to be of type \`array\` but received ${typeof input}`
    );
  }

  if (input.length <= 0) {
    throw new Error(
      `Expected \`input\` to have a minimum length of \`1\`, got \`${input.length}\``
    );
  }

  if (typeof size !== "number" || size === 0) {
    throw new Error("Please provide valid subarray number greater than 0");
  }

  if (input.length < size) {
    throw new Error(
      `Expected \`input\` to have a maximum length of \`${size}\`, got \`${input.length}\``
    );
  }

  const result = [];
  
  for (let index = size; index > 0; index--) {
    result.push(input.splice(0, Math.ceil(input.length / index)));
  }

  return result;
};
