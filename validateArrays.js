function validateArrays(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Send the parameters!");

    if (typeof arr !== "object")
      throw new TypeError("Send a element of type Array!");

    if (typeof num !== "number")
      throw new TypeError("Send a element of type Numberdo!");

    if (arr.length !== num) throw new RangeError("Size of array invalid!");

    return arr;
  } catch (e) {
    if (e instanceof RangeError) {
      console.log("RangeError!");
      console.log(e.stack);
    } else if (e instanceof ReferenceError) {
      console.log("ReferenceError!");
      console.log(e.stack);
    } else {
      console.log("Another error type!");
      console.log(e.stack);
    }
  }
}

console.log("Arrays: " + validateArrays([1, 2, 3], 3));
