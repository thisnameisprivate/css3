



function fetchObj (str, obj) {
    eval(str);
    with (obj) {
        a: 2,
        b: 4,
        c: 6
    }
    console.log(a, b, c);
}
let obj = {
    a: 1,
    b: 2,
    c: 3
};
str = "let a = 2";
fetchObj(str, obj);
