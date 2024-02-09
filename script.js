var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});
 
/* Foi criado uma variável hamburguer no js, que usa o querySelector, para buscar a classe no hamburguer no css*/

/*também foi criada uma função click, que faz um evento na classe aside, quando o usuário clicar no menu hamburguer*/

