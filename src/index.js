/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var index = 0;
for(var i = 0; i < preferences.length; i++){
  var a = preferences[i];
  var b = preferences[a-1];
  var c = preferences [b-1];
  if (c=== i + 1){
    index++;
  }
}
  return Math.floor(index/3);
};
