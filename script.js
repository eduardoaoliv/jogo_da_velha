
var vaga_mn=[];//vetor com as posições do X e O no jogo
var n;//posição do jogador X
var m;//posição do PC O
var quem;//indice da vez dos jogadores
//criação da matriz
var matriz=new Array(3);
matriz[0]=[9,9,9];
matriz[1]=[9,9,9];
matriz[2]=[9,9,9];
//criação da matriz colunas e diagonais
var matriz_c0=[matriz[0][0],matriz[1][0],matriz[2][0]];
var matriz_c1=[matriz[0][1],matriz[1][1],matriz[2][1]];
var matriz_c2=[matriz[0][2],matriz[1][2],matriz[2][2]];
var matriz_diag_esq=[matriz[0][2],matriz[1][1],matriz[2][0]];
var matriz_diag_dir=[matriz[0][0],matriz[1][1],matriz[2][2]];
//criação das variáveis soma linha/coluna/diagonal esq. e diagonal direita
var soma_l0;
var soma_l1;
var soma_l2;
var soma_c0;
var soma_c1;
var soma_c2;
var diag_dir;//soma da diagonal direita
var diag_esq;//soma da diagonal esquerda

window.addEventListener("load",inicia);

function inicia(){
        var mensagem=document.getElementById('mensagem').innerHTML="Quem começa????";
}  

function voce(){
        quem=1;
        var mensagem=document.getElementById('mensagem').innerHTML=""; 
        document.getElementById('btn_voce').style.visibility="hidden";
        document.getElementById('btn_pc').style.visibility="hidden";
        
           

}
function pc(){
        quem=0;
        var mensagem=document.getElementById('mensagem').innerHTML=""; 
        document.getElementById('btn_pc').style.visibility="hidden";
        document.getElementById('btn_voce').style.visibility="hidden"; 
        verificar(); 

}


/************ jogada feita pelo jogador***************/
function jogX(n){
    var pos0=document.getElementById('dv00');
    var pos1=document.getElementById('dv10');
    var pos2=document.getElementById('dv20');
    var pos3=document.getElementById('dv01');
    var pos4=document.getElementById('dv11');
    var pos5=document.getElementById('dv21');
    var pos6=document.getElementById('dv02');
    var pos7=document.getElementById('dv12');
    var pos8=document.getElementById('dv22');  
    
    

    //jogador X=1 e PC O=0
    if ((quem==1)&&(vaga_mn.indexOf(n)==-1)){
        
        switch(n){
            case 0: pos0.innerHTML="X";
                    matriz[0][0]=1;
            break;
            case 1: pos1.innerHTML="X";
                    matriz[1][0]=1;
            break;
            case 2: pos2.innerHTML="X";
                    matriz[2][0]=1;
            break;
            case 3: pos3.innerHTML="X";
                    matriz[0][1]=1;
            break;
            case 4: pos4.innerHTML="X";
                    matriz[1][1]=1;
            break;
            case 5: pos5.innerHTML="X";
                    matriz[2][1]=1;
            break;
            case 6: pos6.innerHTML="X";
                    matriz[0][2]=1;
            break;
            case 7: pos7.innerHTML="X";
                    matriz[1][2]=1;
            break;
            case 8: pos8.innerHTML="X";
                    matriz[2][2]=1;
            break;
            
        }quem=0;
        vaga_mn.push(n); 
                
    }verificar(); 
}
 /*************** jogada feita pelo PC ***************/   
    function jogO(m){
        var pos0=document.getElementById('dv00');
        var pos1=document.getElementById('dv10');
        var pos2=document.getElementById('dv20');
        var pos3=document.getElementById('dv01');
        var pos4=document.getElementById('dv11');
        var pos5=document.getElementById('dv21');
        var pos6=document.getElementById('dv02');
        var pos7=document.getElementById('dv12');
        var pos8=document.getElementById('dv22');

        
        
     if((quem==0)&&(vaga_mn.indexOf(m)==-1)){
        switch(m){
            case 0: pos0.innerHTML="O";
                    matriz[0][0]=0;
            break;
            case 1: pos1.innerHTML="O";
                    matriz[1][0]=0;
            break;
            case 2: pos2.innerHTML="O";
                    matriz[2][0]=0;
            break
            case 3: pos3.innerHTML="O";
                    matriz[0][1]=0;
            break;
            case 4: pos4.innerHTML="O";
                    matriz[1][1]=0;
            break;
            case 5: pos5.innerHTML="O";
                    matriz[2][1]=0;
            break;
            case 6: pos6.innerHTML="O";
                    matriz[0][2]=0;
            break;
            case 7: pos7.innerHTML="O";
                    matriz[1][2]=0;
            break;
            case 8: pos8.innerHTML="O";
                    matriz[2][2]=0;
            break;       
        }quem=1;
        vaga_mn.push(m);
        
        
    } verificar(); 
}

//soma do X=3 e soma do O=0
/*************** Verifica se tem vencedor, se não chama a função jogO para o PC jogar************/
function verificar(){
//calculo das variáveis soma: linha,coluna e diagonais
         soma_l0=matriz[0][0]+matriz[0][1]+matriz[0][2];
         soma_l1=matriz[1][0]+matriz[1][1]+matriz[1][2];
         soma_l2=matriz[2][0]+matriz[2][1]+matriz[2][2];
         soma_c0=matriz[0][0]+matriz[1][0]+matriz[2][0];
         soma_c1=matriz[0][1]+matriz[1][1]+matriz[2][1];
         soma_c2=matriz[0][2]+matriz[1][2]+matriz[2][2];
         diag_dir=matriz[0][0]+matriz[1][1]+matriz[2][2];
         diag_esq=matriz[0][2]+matriz[1][1]+matriz[2][0];

    var mensagem=document.getElementById('mensagem');     
        
    if(soma_l0==3||soma_l1==3||soma_l2==3||soma_c0==3||soma_c1==3||soma_c2==3||diag_dir==3||diag_esq==3) {
        //alert("O jogador X ganhou");
        mensagem.innerHTML="'X' Ganhou!!!";
        quem=100;
                }else if(soma_l0==0||soma_l1==0||soma_l2==0||soma_c0==0||soma_c1==0||soma_c2==0||diag_dir==0||diag_esq==0){
                        
                         mensagem.innerHTML="'O' Ganhou!!!";
                         
                        quem=100;
                }else if(vaga_mn.length==9){
                        quem=100;
                        mensagem.innerHTML="Ninguem Ganhou!!!";
                         
                }pc_nivel3();
                 /*if ((quem==0)&&(quem!=100)){
                        jogO(Math.round(Math.random()*8));
                }*/
                
}

function pc_nivel3(){
        var pos0=document.getElementById('dv00');
        var pos1=document.getElementById('dv10');
        var pos2=document.getElementById('dv20');
        var pos3=document.getElementById('dv01');
        var pos4=document.getElementById('dv11');
        var pos5=document.getElementById('dv21');
        var pos6=document.getElementById('dv02');
        var pos7=document.getElementById('dv12');
        var pos8=document.getElementById('dv22');
        var matriz_c0=[matriz[0][0],matriz[1][0],matriz[2][0]];
        var matriz_c1=[matriz[0][1],matriz[1][1],matriz[2][1]];
        var matriz_c2=[matriz[0][2],matriz[1][2],matriz[2][2]];
        var matriz_diag_esq=[matriz[0][2],matriz[1][1],matriz[2][0]];
        var matriz_diag_dir=[matriz[0][0],matriz[1][1],matriz[2][2]];
        //O PC faz a primeira jogada aleatória  
        if((soma_l0==27||soma_l0==19)&&(soma_l1==27||soma_l1==19)&&(soma_l2==27||soma_l2==19)
        &&(soma_c0==27||soma_c0==19)&&(soma_c1==27||soma_c1==19)&&(soma_c2==27||soma_c2==19)
        &&(diag_esq==27||diag_esq==19)&&(diag_dir==27||diag_dir==19)&&(quem==0)&&(quem!==100))  
        {
                jogO(Math.round(Math.random()*8));     
        }//iniciam as jogadas de defesa
        else if(soma_l0==11 && quem==0){                                
                var l0=matriz[0].indexOf(9);             
                if(l0==0){jogO(0);}
                        else if(l0==1){jogO(3);}
                                else if(l0==2){jogO(6);}
                                
        }else if(soma_l1==11 && quem==0){                
                var l1=matriz[1].indexOf(9);               
                if(l1==0){jogO(1);}
                        else if(l1==1){jogO(4);}
                                else if(l1==2){jogO(7);}

        }else if(soma_l2==11 && quem==0){                
                var l2=matriz[2].indexOf(9);               
                if(l2==0){jogO(2);}
                        else if(l2==1){jogO(5);}
                                else if(l2==2){jogO(8);}

        }else if(soma_c0==11 && quem==0){                
                var c0=matriz_c0.indexOf(9);                
                if(c0==0){jogO(0);}
                        else if(c0==1){jogO(1);}
                                else if(c0==2){jogO(2);}

        }else if(soma_c1==11 && quem==0){                
                var c1=matriz_c1.indexOf(9);                
                if(c1==0){jogO(3);}
                        else if(c1==1){jogO(4);}
                                else if(c1==2){jogO(5);}
                
        }else if(soma_c2==11 && quem==0){                
                var c2=matriz_c2.indexOf(9);                
                if(c2==0){jogO(6);}
                        else if(c2==1){jogO(7);}
                                else if(c2==2){jogO(8);}
                
        }else if(diag_esq==11 && quem==0){                
                var d_esq=matriz_diag_esq.indexOf(9); 
                if(d_esq==0){jogO(6);}
                        else if(d_esq==1){jogO(4);}
                                else if(d_esq==2){jogO(2);}               
                
        }else if(diag_dir==11 && quem==0){                
                var d_dir=matriz_diag_dir.indexOf(9);
                if(d_dir==0){jogO(0);}
                        else if(d_dir==1){jogO(4);}
                                else if(d_dir==2){jogO(8);}                
                
        }//iniciam as jogadas de ataque
        else if((soma_l0==18||soma_l0==9)&& quem==0){                                
                var l0=matriz[0].indexOf(9);                
                if(l0==0){jogO(0);}
                        else if(l0==1){jogO(3);}
                                else if(l0==2){jogO(6);}
                
        }else if((soma_l1==18||soma_l1==9)&& quem==0){                
                var l1=matriz[1].indexOf(9);                
                if(l1==0){jogO(1);}
                        else if(l1==1){jogO(4);}
                                else if(l1==2){jogO(7);}
                
        }else if((soma_l2==18||soma_l2==9)&& quem==0){                
                var l2=matriz[2].indexOf(9);                
                if(l2==0){jogO(2);}
                        else if(l2==1){jogO(5);}
                                else if(l2==2){jogO(8);}
                
        }else if((soma_c0==18||soma_c0==9)&& quem==0){                
                var c0=matriz_c0.indexOf(9);                
                if(c0==0){jogO(0);}
                        else if(c0==1){jogO(1);}
                                else if(c0==2){jogO(2);}
                
        }else if((soma_c1==18||soma_c1==9)&& quem==0){                
                var c1=matriz_c1.indexOf(9);                
                if(c1==0){jogO(3);}
                        else if(c1==1){jogO(4);}
                                else if(c1==2){jogO(5);}
                
        }else if((soma_c2==18||soma_c2==9)&& quem==0){                
                var c2=matriz_c2.indexOf(9);                
                if(c2==0){jogO(6);}
                        else if(c2==1){jogO(7);}
                                else if(c2==2){jogO(8);}
                
        }else if((diag_esq==18||diag_esq==9)&& quem==0){                
                var d_esq=matriz_diag_esq.indexOf(9);                
                if(d_esq==0){jogO(6);}
                        else if(d_esq==1){jogO(4);}
                                else if(d_esq==2){jogO(2);}
        }else if((diag_dir==18||diag_dir==9)&& quem==0){                
                var d_dir=matriz_diag_dir.indexOf(9);                
                if(d_dir==0){jogO(0);}
                        else if(d_dir==1){jogO(4);}
                                else if(d_dir==2){jogO(8);}
        }else if((soma_l0==10||soma_l1==10||soma_l2==10||soma_c0==10||soma_c1==10||soma_c2==10||diag_dir==10||diag_esq==10)&&quem==0){
                var l0_10=matriz[0].indexOf(9);
                var l1_10=matriz[1].indexOf(9);
                var l2_10=matriz[2].indexOf(9);
                if(l0_10!=-1){
                                                        
                    if(l0_10==0){jogO(0);}
                        else if(l0_10==1){jogO(3);}
                                else if(l0_10==2){jogO(6);}         
                     
                }else if(l1_10!=-1){  
                                                      
                        if(l1_10==0){jogO(1);}
                            else if(l1_10==1){jogO(4);}
                                    else if(l1_10==2){jogO(7);}

                        }else if(l2_10!=-1){ 
                                                               
                                if(l2_10==0){jogO(2);}
                                    else if(l2_10==1){jogO(5);}
                                            else if(l2_10==2){jogO(8);}  
                        }
                }
                
} 


function limpar(){
        matriz[0]=[9,9,9];
        matriz[1]=[9,9,9];
        matriz[2]=[9,9,9];  
        var pos0=document.getElementById('dv00').innerHTML="";
        var pos1=document.getElementById('dv10').innerHTML="";
        var pos2=document.getElementById('dv20').innerHTML="";
        var pos3=document.getElementById('dv01').innerHTML="";
        var pos4=document.getElementById('dv11').innerHTML="";
        var pos5=document.getElementById('dv21').innerHTML="";
        var pos6=document.getElementById('dv02').innerHTML="";
        var pos7=document.getElementById('dv12').innerHTML="";
        var pos8=document.getElementById('dv22').innerHTML="";

        
        var mensagem=document.getElementById('mensagem').innerHTML="Quem começa????";
        document.getElementById('btn_voce').style.visibility="visible";
        document.getElementById('btn_pc').style.visibility="visible";
        //quem=1; 
        vaga_mn=[];


}