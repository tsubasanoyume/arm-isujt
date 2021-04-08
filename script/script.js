var menuItem = document.querySelector('.menu-item');
var collapseList = document.querySelector('.collapse-list');
var filterHeader = document.querySelector('.filter-header');
var filterBody = document.querySelector('.filter-body');

filterHeader.addEventListener("click", function (event) {
  event.preventDefault();
  filterBody.classList.toggle("show-flex");
});

menuItem.addEventListener('click', function(e) {
  collapseList.classList.toggle('show');
});

var uchItem = document.querySelector('#list-uch');
var uchTable = document.querySelector('.uch');
var depoTable = document.querySelector('.depo');
var persTable = document.querySelector('.pers');

uchItem.addEventListener('click', function () {
  uchTable.classList.toggle('show');
  if (depoTable.classList.contains('show')) {
    depoTable.classList.remove('show');
  }
  if (persTable.classList.contains('show')) {
    persTable.classList.remove('show');
  }
});

var depoItem = document.querySelector('#list-depo');
depoItem.addEventListener('click', function () {
  depoTable.classList.toggle('show');
  if (uchTable.classList.contains('show')) {
    uchTable.classList.remove('show');
  }
  if (persTable.classList.contains('show')) {
    persTable.classList.remove('show');
  }
});

var persItem = document.querySelector('#list-pers');
persItem.addEventListener('click', function () {
  persTable.classList.toggle('show');
  if (uchTable.classList.contains('show')) {
    uchTable.classList.remove('show');
  }
  if (depoTable.classList.contains('show')) {
    depoTable.classList.remove('show');
  }
});