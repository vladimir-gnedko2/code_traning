let add = 'Ask me aboUT earTh'
let str = 'sHo Za hnYa'
function repl(params) {
    let res = params.split('').map(item => item.toLowerCase()).join('')
    return res;
}
console.log(repl(add))
