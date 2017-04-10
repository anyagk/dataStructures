//var stack;
function brackets(str) {
  var stack = new Array();

  var lastOpener;
  for(var i = 1; i <= str.length; i++) {
    var character = str[i-1];
    var lastOpenBracketIndex;

    if (character === '[' || character === '{' || character === '(') {
      stack.push(character);
      lastOpenBracketIndex = i;
      continue;
    }

    if (character === ']' && stack.last === '[') {
      stack.pop();
      continue;
    }

    if (character === '}' && stack.last === '{') {
      stack.pop();
      continue;
    }

    if (character === ')' && stack.last === '(') {
      stack.pop();
      continue;
    }

    if (character === ']' || character === '}' || character === ')') {
      return i;
    }
  }

  if (stack.length === 0) {
    return 'Success';
  }

  return lastOpenBracketIndex
}

process.stdin.setEncoding('utf8');

var data = "";

process.stdin.on('end', function() {
  var str = data;
  console.log(brackets(str))
  process.exit()
});

process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
    data = data + new_data
  }
});
