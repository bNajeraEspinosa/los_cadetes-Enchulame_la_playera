//coleccion de datos ordenados por un valor índice;
let carrito ={
    1:{nombre:'item1'},
    2:{nombre:'item2'},
    3:{nombre:'item3'},
    4:{nombre:'item4'},
    5:{nombre:'item5'},
    6:{nombre:'item6'},
    7:{nombre:'item7'},
    8:{nombre:'item8'},
    9:{nombre:'item9'},
    10:{nombre:'item10'}
    };
    //en esta parte podemos declarar lo que estara en el carrito;
    for(const key in carrito){
      if (carrito.hasOwnProperty(key)) {
        const element = carrito[key];
        console.log(element);
      }  
    }
    
    Object.values(carrito).forEach((item)=> console.log(item));
    
    console.log(carrito[1]);
    //aqui contamos elementos
    console.log(Object.keys(carrito));
    console.log(Object.keys(carrito).length);
    
    //*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*\\
    