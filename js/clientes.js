var clientes=[
    {
        numerocliente:1,
        nomecliente:"João Santos",
        nif:111111111,
        morada:"Rua dos Santos nº1",
        codigopostal:"1000-100 Lisboa",
        telefone:"211 111 111",
        email:"joao.santos@sapo.pt"
    },
    {
        numerocliente:2,
        nomecliente:"Rita Alves",
        nif:222222222,
        morada:"Rua dos Alves nº1",
        codigopostal:"2000-200 Lisboa",
        telefone:"222 222 222",
        email:"rita.alves@sapo.pt"
    },
    {
        numerocliente:3,
        nomecliente:"Joana Neves",
        nif:333333333,
        morada:"Rua das Neves nº1",
        codigopostal:"3000-300 Coimbra",
        telefone:"233 333 333",
        email:"joana.neves@outlook.pt"
    },
    {
        numerocliente:4,
        nomecliente:"Rodrigo Tavares",
        nif:444444444,
        morada:"Rua dos Tavares nº1",
        codigopostal:"4000-400 Porto",
        telefone:"244 444 444",
        email:"rodrigo.tavares@gmail.com"
    },
    {
        numerocliente:5,
        nomecliente:"Sofia Silva",
        nif:555555555,
        morada:"Rua dos Silvas nº1",
        codigopostal:"5000-500 Guimarães",
        telefone:"244 444 444",
        email:"sofia.silva@outlook.com"
    }
]

$(document).ready(function(){
    preencherTabela();
});

function preencherTabela(){
    var linha="";

    for(var posicao=0;posicao<=clientes.length-1;posicao++){
        linha="<tr>"+
                  "<td>"+clientes[posicao].numerocliente+"</td>"+
                  "<td>"+clientes[posicao].nomecliente+"</td>"+
                  "<td>"+
                        "<button type='button' onclick='editar(this);'>Editar</button>&nbsp;"+
                        "<button type='button' onclick='apagar(this);'>Apagar</button>"+
                  "</td>"+
              "</tr>";

        $(".table tbody").append(linha);
    }

    $(".table tbody tr:even").css("background-color","rgb(37,37,38)");
    $(".table tbody tr:odd").css("background-color","rgb(51,51,51)");
}

function editar(obj){
    //Mostro o formulário
    $("#formArea").css("display","block");

    //Capturo o numero de cliente da tabela correspondente à linha do botao editar que cliquei
    var numerocliente=$(obj).parent().siblings().first().text();

    //percorro todo o json clientes
    for(var posicao=0; posicao<=clientes.length-1;posicao++){

        //verifico se o numerocliente do json é igual ao que capturei da tabela
        if(clientes[posicao].numerocliente==numerocliente){

            //preencho o formulario com os dados do json
            $("#numerocliente").val(clientes[posicao].numerocliente);
            $("#nomecliente").val(clientes[posicao].nomecliente);
            $("#nif").val(clientes[posicao].nif);
            $("#morada").val(clientes[posicao].morada);
            $("#cpostal").val(clientes[posicao].codigopostal);
            $("#telefone").val(clientes[posicao].telefone);
            $("#email").val(clientes[posicao].email);
        }
    }
}

function voltar(){
    $("#formArea").css("display","none");
}

function apagar(obj){
    var numerocliente=$(obj).parent().siblings().first().text();

    for(var posicao=0; posicao<=clientes.length-1;posicao++){

        if(clientes[posicao].numerocliente==numerocliente){
        
            clientes.splice(posicao,1);
        
        }
    }

    $(".table tbody").html("");
    preencherTabela();
}

function apagar2(numerocliente){

    for(var posicao=0; posicao<=clientes.length-1;posicao++){

        if(clientes[posicao].numerocliente==numerocliente){
        
            clientes.splice(posicao,1);
        
        }
    }

    $("#formArea").css("display","none");

    $(".table tbody").html("");
    preencherTabela();
}

function guardar(numerocliente,nomecliente,nif,morada,cpostal,telefone,email){
    
    var clienteexistente=false;

    for(var posicao=0; posicao<=clientes.length-1;posicao++){
        if(clientes[posicao].numerocliente==numerocliente){
            clienteexistente=true;
            clientes[posicao].nomecliente=nomecliente;
            clientes[posicao].nif=nif;
            clientes[posicao].morada=morada;
            clientes[posicao].cpostal=cpostal;
            clientes[posicao].telefone=telefone;
            clientes[posicao].email=email;
        }
    }

    if(clienteexistente==false){
        var novocliente={"numerocliente":numerocliente,"nomecliente":nomecliente,"nif":nif,"morada":morada,"codigopostal":cpostal,"telefone":telefone,"email":email};
        clientes.push(novocliente);
    }

    $("#formArea").css("display","none");
    $(".table tbody").html("");
    preencherTabela();
}

function adicionar(){
    var numerocliente=$(".table tbody").children().last().children().first().text();
    numerocliente++;

    $("#formArea").css("display","block");
    $("#numerocliente").val(numerocliente);
    $("#nomecliente").val("");
    $("#nif").val("");
    $("#morada").val("");
    $("#cpostal").val("");
    $("#telefone").val("");
    $("#email").val("");
}