//Book Object  Ctor 
function Book(title,author,isbn){
  this.title=title;
  this.author=author;
  this.isbn=isbn;
}



result=document.querySelector('#result-div');

//Event listener

document.forms[0].addEventListener('submit',function(e){
  console.log('event heard');
  let title=document.forms[0].title.value;
  let author=document.forms[0].author.value;
  let isbn=document.forms[0].isbn.value;


if(title===''||author===''||isbn==='')
{
  result=document.querySelector('#result-div');
  result.className='cta-red';
  result.innerHTML=`Please Enter the Correct Details`;
  setTimeout(() => {
    result.className='';
    result.innerHTML='';
  }, 1500);
  e.preventDefault();
}

else{

let book=new Book(title,author,isbn);
book.addBookToList();
result=document.querySelector('#result-div');
document.forms[0].title.value='';
document.forms[0].author.value='';
document.forms[0].isbn.value='';
result.className='cta-green';
result.innerHTML=`Book has been added`;
setTimeout(() => {
  result.className='';
  result.innerHTML='';
}, 1500);

e.preventDefault();

}


});








// Adding a book to the list
Book.prototype.addBookToList=function(){
  console.log('in prototype');
  let bookList=document.querySelector('#book-list');
  let row=document.createElement('tr');
  row.className='bordered';
 row.innerHTML=`<td>${this.title}</td>
  <td>${this.author}</td>
  <td>${this.isbn}</td>
  <td><a href="#" class='delete-item' style='color:red'>(X)</a></td>`;
  bookList.appendChild(row);
  
}



//Removing a Book Using Event Deligation 
document.querySelector('#book-list').addEventListener('click',function(e){
  if(e.target.className=='delete-item')
  {
    let rowRemove=e.target.parentElement.parentElement;
    document.querySelector('#book-list').removeChild(rowRemove);

  }

  result.className='cta-green';
  result.innerHTML=`Book has been Removed`;
  setTimeout(() => {
    result.className='';
    result.innerHTML='';
  }, 1500);
});