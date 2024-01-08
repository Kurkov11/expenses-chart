const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];
  const graphs = document.getElementsByClassName('graph');
  const hoverDetailsList = document.getElementsByClassName('hover-details');
  const days = document.getElementsByClassName('day');
  const columns = document.getElementsByClassName('column');
  for(let i = 0; i < graphs.length; i++){
    if(document.getElementById('spending').offsetWidth < 466){
      graphs[i].style.height = data[i].amount * 3 + 'px';
    }else{
      graphs[i].style.height = data[i].amount * 2 + 'px';
    }
  }
  for(let i = 0; i < graphs.length; i++){
    let graphHeight = graphs[i].offsetHeight; 
    hoverDetailsList[i].style.bottom = graphHeight + 40 + 'px'; //Because the graph has an absolute position, the additional bottom atttribute is needed
  }
  window.onresize = function() {
    for(let i = 0; i < graphs.length; i++){
      if(document.getElementById('spending').offsetWidth < 466){
        graphs[i].style.height = data[i].amount * 3 + 'px';
      }else{
        graphs[i].style.height = data[i].amount * 2.7 + 'px';
      }
      let graphHeight = graphs[i].offsetHeight; 
      hoverDetailsList[i].style.bottom = graphHeight + 40 + 'px'; //Because the graph has an absolute position, the additional bottom atttribute is needed
    }
  };

const currentDate = new Date();
const currentDay = ((currentDate.getDay() + 6) % 7) + 1; //Monday = 1
console.log(currentDay);
graphs[currentDay - 1].style.backgroundColor = 'hsl(186, 34%, 60%)';//-1 to get the correct graph



for(let j = 0; j < graphs.length; j++){
  let num = 31 + graphs[j].style.height;
  hoverDetailsList[j].innerHTML = '$' + data[j].amount;
  
  graphs[j].addEventListener('mouseover', () => { 
    hoverDetailsList[j].style.display = 'block';

    //Make the color brighter
    if(j == currentDay - 1){
        graphs[j].style.backgroundColor = 'hsl(186, 34%, 70%)'; //If it's the current day hover effect will be of different color
    }else{
        graphs[j].style.backgroundColor = 'hsl(10, 79%, 75%)';
    }
  });
  
  graphs[j].addEventListener('mouseout', () => {
    hoverDetailsList[j].style.display = 'none';

    //Set the color back to normal
    if(j == currentDay - 1){
        graphs[j].style.backgroundColor = 'hsl(186, 34%, 60%)'; //If it's the current day hover effect will be of different color
    }else{
        graphs[j].style.backgroundColor = 'hsl(10, 79%, 65%)';
    }
  });
}