 let list=document.getElementById('list');
 let filter=document.querySelector('.filter');
 let count=document.getElementById('count');
 let listProducts=[
    {
        id:1,
        name:'Name product white-black',
        price:205600,
        quantity:0,
        image:'img1.png',
        nature:{
            color:['white','black'],
            size:['S','M','L'],
            type:'T-shirt'
        }
    },
    {
        id:2,
        name:'Name product white-black-gray',
        price:300000,
        quantity: 30,
        image:'img2.png',
        nature:{
            color:['white','black','gray'],
            size:['S','M','L'],
            type:'Polo'
        }
    },
    {
        id:3,
        name:'Name product black',
        price:200000,
        quantity: 30,
        image:'img3.png',
        nature:{
            color:['black'],
            size:['S','M','L'],
            type:'T-shirt'
        }
    },
    {
        id:4,
        name:'Name product brown',
        price:400000,
        quantity: 30,
        image:'img4.png',
        nature:{
            color:['brown'],
            size:['S','M','L'],
            type:'T-shirt'
        }
    },
    {
        id:5,
        name:'Name product black',
        price:320000,
        quantity: 30,
        image:'img5.png',
        nature:{
            color:['black'],
            size:['S','M','L'],
            type:'Polo'
        }
    },
    {
        id:6,
        name:'Name product white-black',
        price:100000,
        quantity: 30,
        image:'img6.png',
        nature:{
            color:['white','black'],
            size:['S','M','L'],
            type:'Shirt'
        }
    }
 ];

 let productFilter=listProducts;
 showProduct(productFilter);
 function showProduct(productFilter){
    count.innerText=productFilter.length;
    list.innerHTML='';
    productFilter.forEach(item =>{
      let newItem=document.createElement('div');
      newItem.classList.add('item')

      let newImage =new Image();
      newImage.src=item.image;
      newItem.appendChild(newImage);

      let newTitle=document.createElement('div');
      newTitle.classList.add('title');
      newTitle.innerText=item.name;
       newItem.appendChild(newTitle)

      let newPrice=document.createElement('div');
      newPrice.classList.add('price');
      newPrice.innerText=item.price;
      newItem.appendChild(newPrice);

      list.appendChild(newItem);
    });
 }

 filter.addEventListener('submit',function(event){
   event.preventDefault();
   let valueFilter=event.target.elements;
   productFilter=listProducts.filter(item =>{
    if(valueFilter.category.value != ""){
        if(item.nature.type != valueFilter.category.value){
            return false;
        }
    }
    if(valueFilter.color.value !=''){
        if(item.nature.color.includes(valueFilter.color.value)){
            return false;
        }
    }
    if(valueFilter.name.value !=''){
        if(item.name.includes(valueFilter.name.value)){
            return false;
        }
    }
    if(valueFilter.minPrice.value !=''){
        if(item.price < valueFilter.minPrice.value){
            return false;
        }
    }    if(valueFilter.maxPrice.value !=''){
        if(item.price > valueFilter.maxPrice.value){
            return false;
        }
    }

      
    return true;
   })
   showProduct(productFilter);
 });