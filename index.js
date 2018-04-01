function getFirstSelector(selector) {
  const lis = document.getElementById('app').querySelectorAll(selector)
  for (let i = 0; i < lis.length; i++) {
    return lis[i];
  }
}

function nestedTarget() {
    var lis = document.querySelector('#nested .target')
    return lis;
}

function increaseRankBy(n) {
  var x = parseInt(n);
  n = x;
  const lis = document.querySelectorAll(".ranked-list")
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
<<<<<<< HEAD
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node;
=======
  const div4 = document.getElementById('grand-node')
  var x;
  for (let i = 0; i < div4.length; i++) {
    var x = div4[i].innerHTML;
  }
  return x;
>>>>>>> 9341db48bc7e859ffc02528bd3f5e948147c6aa6
}
