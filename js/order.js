var totalProductValue = 0;
var totalProduct = document.getElementById('totalProduct')

var product1Decrease = document.getElementById('product1Decrease')
var product1Total = document.getElementById('product1Total')
var product1Increase = document.getElementById('product1Increase')
var prod1total = 0;
console.log(product1Increase);

product1Decrease.addEventListener('click', function(event) {
  if (prod1total < 1) {
     value = Math.max(0, value);
  } else {
    prod1total = prod1total - 1;
    product1Total.value = prod1total;
  }
  updateTotal();
})
product1Increase.addEventListener('click', function(event) {
  prod1total = prod1total + 1;
  product1Total.value = prod1total;
      updateTotal();
})

var product2Decrease = document.getElementById('product2Decrease')
var product2Total = document.getElementById('product2Total')
var product2Increase = document.getElementById('product2Increase')
var prod2total = 0;
console.log(product2Increase);

product2Decrease.addEventListener('click', function(event) {
  if (prod2total < 1) {
     value = Math.max(0, value);
  } else {
    prod2total = prod2total - 1;
    product2Total.value = prod2total;
  }
  updateTotal();
})
product2Increase.addEventListener('click', function(event) {
  prod2total = prod2total + 1;
  product2Total.value = prod2total;
      updateTotal();
})


var product3Decrease = document.getElementById('product3Decrease')
var product3Total = document.getElementById('product3Total')
var product3Increase = document.getElementById('product3Increase')
var prod3total = 0;
console.log(product3Increase);

product3Decrease.addEventListener('click', function(event) {
  if (prod3total < 1) {
     value = Math.max(0, value);
  } else {
    prod3total = prod3total - 1;
    product3Total.value = prod3total;
  }
  updateTotal();
})
product3Increase.addEventListener('click', function(event) {
  prod3total = prod3total + 1;
  product3Total.value = prod3total;
      updateTotal();
})

var product4Decrease = document.getElementById('product4Decrease')
var product4Total = document.getElementById('product4Total')
var product4Increase = document.getElementById('product4Increase')
var prod4total = 0;
console.log(product4Increase);

product4Decrease.addEventListener('click', function(event) {
  if (prod4total < 1) {
     value = Math.max(0, value);
  } else {
    prod4total = prod4total - 1;
    product4Total.value = prod4total;
    updateTotal();
  }
})
product4Increase.addEventListener('click', function(event) {
  prod4total = prod4total + 1;
  product4Total.value = prod4total;
      updateTotal();
})

var product5Decrease = document.getElementById('product5Decrease')
var product5Total = document.getElementById('product5Total')
var product5Increase = document.getElementById('product5Increase')
var prod5total = 0;
console.log(product5Increase);

product5Decrease.addEventListener('click', function(event) {
  if (prod5total < 1) {
     value = Math.max(0, value);
  } else {
    prod5total = prod5total - 1;
    product5Total.value = prod5total;
    updateTotal();
  }
})
product5Increase.addEventListener('click', function(event) {
  prod5total = prod5total + 1;
  product5Total.value = prod5total;
      updateTotal();
})

function updateTotal() {
  totalProductValue = prod1total + prod2total + prod3total + prod4total + prod5total
  totalProduct.value = totalProductValue;
}
