//gna = gerar numero aleatorio Q = quantidade, Mi - minimo, MA = maximo, A = aleatorio 
var jogadores = []
function gna(Q, Mi, MA){

    if(Q > (MA - Mi)){
        console.log("intervalo insuficiente...")
        return
    
}

var numeros = []
while (numeros.length < Q) {
    var A = Math.floor(Math.random()*(MA - Mi) + Mi);

    if(!numeros.includes(A)){
     numeros.push(A);
    }
    
}
return numeros;

function gerarcartela(){
    var jogadornome = prompt('digite o nome do jogador');

    var cartela = [ qna(5, 1, 20), qna(5, 21, 40), qna(5, 41, 60), 
                    qna(5, 61, 80), qna(5,81, 100)]
     
    jogadores.push({
        jogadornome : jogadornome,
        cartela: cartela
    });
    criarcartela(jogadornome, cartela);
    
    console.log(jogadores)
                }

                function recomeçarjogo(){
                    jogadores = []
                }
                function criarcartela(nome, cartela){

                }
                function gerarcartela(nome, cartela){
                    var div = document.getElementsById('espaço_cartela');

                    var tabela = document.createElement('table');

                    var thead = document.createElement('thead');
                    
                    for(var i = 0; i < 5; i++){
                        var tr = document.createElement('tr');
                        for(var j = 0; j < 5; j++){
                            var td = document.createElement('td');
                            if(i == 2 && j == 2){
                                td.innerText = "X";
                                tr.appendChild(td);
                            }else{
                                td.innerText = cartela[j][i]
                                tr.appendChild(td);
                            }
                        }
                        tabela.appendChild(tr)
                    }
                
                    tabela.appendChild(thead);
                    div.appendChild(tabela);


                }
}