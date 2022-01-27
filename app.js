// solution 1
function likes(names) {
    const [firstN, secondN, ...rest] = names;
    return  !names.length? 'no one likes this'
      : names.length == 1? `${firstN} likes this` 
      : names.length == 2? `${firstN} and ${secondN} like this` 
      : names.length == 3? `${firstN}, ${secondN} and ${rest} like this`
      : `${firstN}, ${secondN} and ${rest.length} others like this`;
  }
// solution 2
function likes(names) {
    let a = " like this";
    let b = " likes this";
    let l = names.length;
    return !l ? "no one" + b
     : l == 1 ? names[0] + b
     : l == 2 ? names.join(" and ") + a
     : l == 3 ? names.join(" and ").replace(" and", ",") + a
     : names[0] + ", " + names[1] + " and " + (l-2) + " others" + a;
  }

// solution 3
function likes(names) {
    var a = names.length;
    switch (a) {
        case 0: return "no one likes this"; break;
        case 1: return `${names[0]} likes this`; break;
        case 2: return `${names[0]} and ${names[1]} like this`; break;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
        default: return `${names[0]}, ${names[1]} and ${a-2} others like this`; break;
    }
  }
// solution 4

function likes(names) {
    const sum=names.length
     if (sum===0) return 'no one likes this';
     if (sum===1) return `${names[0]} likes this`;
     if (sum===2) return `${names[0]} and ${names[1]} like this`;
     if (sum===3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
     return `${names[0]}, ${names[1]} and ${sum-2} others like this`;
   }

console.log(likes(['Peter']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
