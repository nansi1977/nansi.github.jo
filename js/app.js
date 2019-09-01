function attachEvents(){
let counter=0
let userName='Anonymous'
let typeMsg
let div
$('#logBtn').click(attachMsg)
$('#setUsername').click(setUsername)
function setUsername(){
  if($('#userNameInput').val()!==''){
   
  if($('#setUsername').text()==='Set Username'){
    userName=$('#userNameInput').val()
    $('#setUsername').text('Log out')
    $('#setted').append($('<h3 id="LoggedUser">'+userName+'</h3>'))
    $('#userNameInput').remove()
  } else {
  $('#LoggedUser').remove()
  $('#setUsername').text('Set Username')
  $('#setted').append($('<input type="text" class="form-control" id="userNameInput" placeholder="Username...">'))
  }
  }
 }

function deleteRow(){
  checkForEmpty()
  let row=$(this).parent().remove()
  counter--
  checkForEmpty()
}
function attachMsg(){
  let logs=$('#logs')
  let message=$('#message').val()
  let container
  if($('#successBtn').is(':checked')) {
    typeMsg='Success'
    container=successMsg()
  }
  else if($('#infoBtn').is(':checked')){
    typeMsg='Info'
    container=infoMsg()
  }
  else if($('#errorBtn').is(':checked')){
    typeMsg='Error'
    container=errorMsg()
  }
  
  let messageBox=($('<div class="col-6 h3">'+typeMsg+": "+message+'<div>'))
  let usernameBox=($('<div class="col-3 h3 border-left border-right border-dark px-5 text-center">'+userName+'</div>'))
  let archiveBox=($("<div class='col-3 h3 archive text-center'>Archive</div>"))

  container.append(messageBox,usernameBox,archiveBox)
  logs.append(container)
  $('#message').val()=''
  counter++
  $('.archive:last').click(deleteRow)
  checkForEmpty()
}
  function checkForEmpty(){
  if(counter>0){
   $('#emptyDb').css('display','none')
  }else{
    $('#emptyDb').css('display','block') 
  }
}

function successMsg(){
  return $('<div class="text-white bg-success py-3 row rounded mb-3"></div>')
}
function infoMsg(){
  return $('<div class="text-white bg-info py-3 row rounded mb-3"></div>')
}
function errorMsg(){
  return $('<div class="text-white bg-danger py-3 row rounded mb-3"></div>')
}
}
attachEvents()