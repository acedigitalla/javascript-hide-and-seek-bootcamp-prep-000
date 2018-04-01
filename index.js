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
  const div4 = document.getElementById('grand-node')
  var x;
  for (let i = 0; i < div4.length; i++) {
  var x = div4[i].innerHTML;
  return x;
}
}
