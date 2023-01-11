function check( ){
    var l = document.getElementById("letra").value
    var l = l.toLowerCase()
    var vog = document.getElementById('res')
    
        if(l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u'){
            var muda = document.getAnimations('img')
            muda = document.getElementById('img').src="floak_resolvido.png"
             vog.innerHTML = `A letra <strong>${l}</strong> é vogal`

        }else if (l ==""){
            muda = document.getElementById('img').src="Floak_chinelo.png"
            vog.innerHTML = ("O Campo esta vazio! Por favor digite uma letra")

           
         } else{
            muda = document.getElementById('img').src="floak_resolvido1.png"
            vog.innerHTML = `A letra <strong>${l}</strong>  é consoante`

         }

}   


//Resolvido apenas no index.html com prompt

/*alert('Vamos descobri se a letra é vogal ou consoante?')
var l = prompt('Insira apenas uma letra')
var l = l.toLowerCase()
    if (l == 'a' ||l == 'e' ||l == 'i' ||l == 'o' || l == 'u'){
        alert('Vogal')
    }else{
        alert('consoante')
    }
alert('Obrigado!!')
*/