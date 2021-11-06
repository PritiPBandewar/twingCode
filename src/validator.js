export const Validator = (array, numberOfSubArray) => {
  
  if(array.length <=0){
    return "Please provide valid Array";
  }
  if (typeof numberOfSubArray !== "number" || numberOfSubArray === 0) {
    return "Please provide valid subarray number greater than 0";
  }
  if (array.length < numberOfSubArray) {
    return `This array cannot be divide in ${numberOfSubArray} subarrays`;
  }

  return "Success";
};
