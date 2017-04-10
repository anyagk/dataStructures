function brackets(str) {
  var stack = new Array();
  var returnThis;
  for(var i = 1; i <= str.length; i++) {
    var character = str[i - 1];

    // opener
    if (character === '[' || character === '{' || character === '(') {
      stack.push({character: character, i: i});
      returnThis = i;
      continue;
    }

    // closer
    if (character === ']' || character === '}' || character === ')') {

      // closer with no previous opener
      if (stack.length === 0){
        return i;
      } else { // closer with previous openers
        var last = stack[stack.length - 1].character;
        if (character === ']' && last === '[') {
          stack.pop();
          continue;
        }

        if (character === '}' && last === '{') {
          stack.pop();
          continue;
        }

        if (character === ')' && last === '(') {
          stack.pop();
          continue;
        }

        return i;
      }
    }
  }

  if (stack.length == 0) {
    return 'Success';
  }

  return stack[stack.length - 1].i;
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
