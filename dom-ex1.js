
/*dom exercise 1*/

function addBands (myBandList) {
    const list = document.querySelector('#band-list')
    for (var i = 0; i < myBandList.length; i++) {
        var bandName = myBandList[i]
        const listItem = document.createElement('li')
        listItem.appendChild(document.createTextNode(bandName))
        list.appendChild(listItem)
    }
}
addBands (["St. Vincent", "Soap&Skin", "Prezident"])  
            /*don't forget the inner brackets!*/
   
