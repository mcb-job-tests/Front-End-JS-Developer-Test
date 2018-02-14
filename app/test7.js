export default function test7(string){
  //Write your solution here
    Object.assign( String.prototype, {
        reverse() {
            // 1. Use the split() method to return a new array
            // 2. Use the reverse() method to reverse the new created array
            // 3. Use the join() method to join all elements of the array into a string

            return this.split("").reverse().join("");
        }
    });

  //
  return string.reverse();
}

