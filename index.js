// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(name) {
    cats.pop();
}
destructivelyAppendCat;

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}
appendCat("Broom");

function prependCat(name) {
    const frontCat = [name, ...cats]
    return frontCat;
}

function removeLastCat() {
    const lastCatGone = [...cats.slice(0, -1)]
    return lastCatGone;
}

function removeFirstCat() {
    const firstCatGone = [...cats.slice(1)]
    return firstCatGone;
}




