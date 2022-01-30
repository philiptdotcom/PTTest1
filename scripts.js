/*
    javascript executes BEFORE HTML doc loads,
    so the elements to which the js refer won't exist until AFTER the HTML is loaded,
    so we must ensure that the HTML is loaded BEFORE we call the code
    that creates/modifies elements

    so, in the calling html doc, use: <body onLoad="foo()">

    apparently, there's a(t least one) way to do this in js, but it seems to be more complicated than it's worth, and perhaps to no advantage (e.g., something like document.body.onload = fooFunction, where fooFunction is the js function to execute onLoad (=AFTER loading) of the HTML document
*/


function foo() {
    let myList = document.createElement('ul')
    myList.setAttribute('id', 'myList')

    let itemZero = document.createElement('li')
    itemZero.setAttribute('id', 'item0')
    itemZero.textContent = 'Item #0'
    document.getElementById("myList").append(itemZero)  //set this (ul) element as current and insert <li>Item #0</li> into <ul>{insert item here}</ul>
    //document.querySelector('#myList') //don't know if this works   //sets this (ul) element as current
    //document.append(itemZero)           //

    let listItems = ['a', 'b', 'c']
    console.log(listItems)

    document.body.append(myList)

    document.querySelector('li')
    for (i=0; i < listItems.length; i++) {
        let x = document.createElement('li')
        x.textContent = listItems[i]   // assign text content to this element
        myList.append(x)
        // x.append(listItems[i])   //doesn't seem to work
    }
    
    }

// ?

