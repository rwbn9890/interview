
function f() {
  try { return 1; }
  finally { return 2; }
}
console.log(f());


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}



(async () => {
  console.log(1);
  await 0;
  console.log(2);
})();
console.log(3);
