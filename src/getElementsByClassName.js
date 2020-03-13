// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, input
) {
  // your code here
var collection = [];
  
  //scan through HTML document,
  

  //how do you specify function to scan through HTML coding in another file?

  //You should use document.body, element.childNodes, and element.classList
  //stores the body of the HTML document, but only initially
  //console.log(document.body);
  

  var mainBody = document.body;
  
  
  

  if(input !== window && input !== document && input !== undefined && input !== null) {
  mainBody = input;
  
  } else {
    if(_.contains(mainBody.classList, className)) {
    collection.push(mainBody);
    }
  }
  var nodes = mainBody.childNodes;
  
  //console.log(mainBody);
  //console.log(nodes);
  

  //create an object to hold the element information for the HTML collection
  
  
  //be sure to use recursion

  /*if an HTML string contains 'class = "className"' 
  then scan through it to collect required information for the object*/
  //string in this case is the child element within the html body
  //see if class list contains the class argument that's input into the function
for(var i = 0; i < nodes.length; i++) {
    if(_.contains(nodes[i].classList, className)) {
    collection.push(nodes[i]);

    //does not account for subordinate child nodes
    //need to iterate through lower levels and push them into the collection as well
    //nodes[i] may not necessarily be the correct object to push in...but what exactly should be pushed into the htmlCollection array?
    //push that object into an array
      };
     if(nodes[i].childNodes.length) {
    collection.push(_.flatten(getElementsByClassName(className, nodes[i])));
   }
  }


  
  //return the array
  return _.flatten(collection);
  
};

//document.getElementsByClassName("targetClassName");
//console.log(JSON.stringify(document.body.childNodes));