// Use a trie with a nested object where each map has keys of just one character.
// Check input to see if it’s already marked as visited or if it’s a new word to save.
// We can visualize this as a tree, where each character in a string corresponds to a node.
// To check if a string is in the trie, we just descend from the root of the tree to a leaf,
// checking for a node in the tree for each character of in string. This is O(26n).

function Trie () {
  this.rootNode = {};
}

Trie.prototype.checkPresentAndAdd = function (word) {
  var currentNode = this.rootNode;
  var isNewWord = false;

  // Work down through trie, adding nodes as needed, and
  // keeping track of whether we add any nodes.
  for (var i = 0; i < word.length; i++) {
    var char = word[i];

    if (!currentNode.hasOwnProperty(char)) {
      isNewWord = true;
      currentNode[char] = {};
    }

    currentNode = currentNode[char];
  }
  // Mark the end of a word because it may be present as a
  // prefix of a different, longer word added earlier.
  if (!currentNode.hasOwnProperty("End of Word")) {
    isNewWord = true;
    currentNode["End of Word"] = {};
  }

  return isNewWord;
}

var trie = new Trie();
console.log(trie.checkPresentAndAdd('hello'));
