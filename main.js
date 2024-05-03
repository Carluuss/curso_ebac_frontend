function Veiculo(modelo, cor, anoModelo, anoFabricacao){
    this.modelo = modelo;
    this.cor = cor;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;

    this.acelerar = function(){
        console.log("acelerar");
    }

    this.freiar = function(){
        console.log("freiar");
    }
}

function Carro(modelo, cor, anoModelo, anoFabricacao) {
    Veiculo.call(this, modelo, cor, anoModelo, anoFabricacao);
    
}

function Moto(modelo, cor, anoModelo, anoFabricacao) {
    Veiculo.call(this, modelo, cor, anoModelo, anoFabricacao);
    
}

const carro1 = new Carro("Corola", "vermelho", 2012, 2011); 
const moto1 = new Moto("Ronda", "preto", 2021, 2020);
const carro2 = new Carro("Mercedes", "branco", 2023, 2022)

console.log (carro1);
console.log (moto1);
console.log (carro2);
