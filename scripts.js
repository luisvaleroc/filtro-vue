var app = new Vue({
    el: '#app',
    data: {
        menus:['Todos', 'Clasico', 'Finanzas'],
        elementosActivo: [],
        libros: [
            {name: 'El principito',
             gender: 'clasico'},
             {name: 'Padre rico padre pobre',
             gender: 'finanzas'},
             {name: 'la granja',
             gender: 'clasico'},
             {name: 'poli',
             gender: 'clasico'},
             {name: 'lolaso',
             gender: 'accion'}
        ],
        filtrados: []
    },
    methods: {
       
        filter: function(genero) {
        if(this.elementosActivo.includes('todos')){
            let eliminado = this.elementosActivo.indexOf('todos');
            console.log(  this.elementosActivo.indexOf('todos'))
            this.elementosActivo.splice(eliminado, 1);
        }   
        if(this.elementosActivo.includes(genero)) {
          

            let eliminado = this.elementosActivo.indexOf(genero);
            console.log(  this.elementosActivo.indexOf(genero))
            this.elementosActivo.splice(eliminado, 1);
        }else{
            this.elementosActivo.push(genero);
        } 
         console.log(this.elementosActivo)
           // if(!this.elementos.includes(genero))this.elementos.push(genero);
        }
    },
    computed: {
        librosFiltrados:  function(){
           let bookF;
            if(!this.elementosActivo.includes('todos')){
            bookF =  this.libros.filter(libro =>
              
             this.elementosActivo.find(elemento => elemento == libro.gender )
            
               
         )
        }else {
            this.elementosActivo = ['todos'];
            console.log(this.elementosActivo);
            bookF = this.libros;
        }
          //console.log(bookF);
          //console.log(this.elementosActivo);
          return  bookF;
          
        } 
    }
})



