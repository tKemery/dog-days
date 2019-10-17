function handleSubmit(){
  $('form').submit(event => {
    event.preventDefault();
    let number = document.getElementById('number').value;
    if (number > 50){
      return alert("Unfortunately, we can only show you 50 doggos at a time. Please retry with a number between 1 and 50.")
    }
    if (number < 0){
      return alert("Silly human! We can't show you negative doggos!")
    }
    if (number === 0){
      return alert("Zero doggos?? Somewhere out there you've made a doggo very sad.")
    }
    else{
      getDogPics(number);
    }
  });
}
  
function getDogPics(number){
  number = number || 3;
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
  .then(response => response.json())
  .then(function(responseJson){
      displayResults(responseJson);
      for (let i=0; i < responseJson.message.length; i++){
        console.log(responseJson.message[i]);
      }
  }).catch(error => alert('Something went wrong. Try again later.'));
}
  
function displayResults(responseJson){
  let currentDoggos = $('.container').children();
  currentDoggos.remove();
  $('.container').removeClass('hidden')
  responseJson.message.forEach(function(item){
      $('.container').append(`<img src='${item}' width='300px'>`)
  });
}

$(function(){
  handleSubmit();
  console.log('App Successfully Loaded');
});