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
  i = parseInt(n);
  n = i;


}
