var div = document.getElementById('div1');
var walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, null, false);

//console.log(walker.firstChild().tagName);
//walker.firstChild();  //转到<div>
//walker.nextSibling();  //转到<ul>

var node = walker.firstChild();  //转到第一个<li>
var nodes = [];
while (node !== null) {
    nodes.push(node.tagName.toLowerCase());
    console.log(node.tagName.toLowerCase());
    if(node.nextSibling!==null){
        node = walker.firstChild();
    }
    node = walker.nextSibling();
    if(node === null){
        walker.parentNode();
        node = walker.nextSibling();
    }
}
console.log(nodes);
