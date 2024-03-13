## Salmon Cookie Stand


//const newForm = document.getElementById('addNewStore');
 //function handleSubmit(event) {
  //event.preventDefault();
  //event.target.reset();
 // }

//newForm.addEventListener('submit', handleSubmit,
  //function (event) {
    event.preventDefault();
    const newLocation = event.target.newLocation.value;
    const newMinCust = parseInt(event.target.newMinCust.value);
    const newMaxCust = parseInt(event.target.newMaxCust.value);
    const newAvg = parseInt(event.target.newAvg.value);

    const newData = newData(newLocation, newMinCust, newMaxCust,newAvg);
    console.log(newLocation);
    newData.estimateSales();
    newForm.reset();
    newData.render();
    cities.push(newData);
    renderNewRow();
    document.getElementById('footerRowTotal').remove();
    renderFooterRow(tableElem);
  });

function renderNewRow(){
  let tnew=document.querySelector('tnew');
  if(tnew){
    tnew.innerHTML = "";
  } else {
  tnew = document.createElement('new');
  tableElem.appendChild(tnew);
  }
}
