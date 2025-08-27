Live Link: https://geekrover.github.io/Assignmnet-B12A05/

Question Answers:
1. getElementByID returns the targetted HTML element which has the specific ID. it is most accurate when it comes to targeting an HTML element as IDs are unique.

getElementsByClassName returns all the HTML element which has the targetted classname.

querySelector returns the first element that matches the target. its an alternative to getElementByID.

querySelectorAll returns a list of element that matches the target. it is similar to the getElementsByClassName but its static that means if the elements in the DOM updates the returned list wont update automatically like getElementsByClassName.

2. I create a element by creating a variable then using document.createElement() funtion which takes the element that i want to create. then i target the parent node where i want to insert the newly created element store parent in a variable and at the end by targeting the parent i pass the appendChild() function with the new element variable.

3. Event bubbling is a process when a event ocuurs like button click on an element the event propagate up the DOM tree to the parent element. this behaviour is default.

it wworks something like this if i have a button inside a div and the div is in the body when i click the button the event bubbles up to the div then the body and so on until it reaches the top level document.

4.Event Delegation is a technique where we add the eventListener to the parent node instead of the adding multiple listeners to each node. it works because of event bubbling as childens events eventually bubbles up to the parent element.

it is useful because it helps us to get rid of multiples event listeners which reduce memory consumption and improve efficiency of the website. it also works when new elements are added to the parent as the parent is static even when the page is loaded if we add elements the eventlistener work without adding new event listener cause the new element will automatically bubble up the event to the parent. it also helps us to write less code for doing the same operation.

5.preventDefault() stops the default action of an event like form submitting.

stopPropagation() stops the event bubbling up the DOM tree.
