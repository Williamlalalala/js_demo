let Array = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
    let uniq = [...new Set(Array)];
console.log(uniq);