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
                  "<td style='text-align:right'>"+
                        "<button class='btn btn-success' type='button' onclick='editar(this);' style='width:40px;height:40px;'>"+
                            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-fill' viewBox='0 0 16 16'>"+
                                "<path d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z'/>"+
                            "</svg>"+
                        "</button>&nbsp;&nbsp;"+
                        "<button class='btn btn-danger' type='button' onclick='apagar(this);' style='width:40px;height:40px;'>"+
                            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash-fill' viewBox='0 0 16 16'>"+
                                "<path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z'/>"+
                            "</svg>"+
                        "</button>"+
                  "</td>"+
              "</tr>";

        $(".table tbody").append(linha);
    }
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