const herois = [
    {nome: "Anthony", xp: 12753}, // Radiante
    {nome: "Corina", xp: 7245}, // Platina
    {nome: "Boro", xp: 8652}, // Ascendente
    {nome: "Asha", xp: 996}, //Ferro
    {nome: "Rocco", xp: 9632}, // Imortal
    {nome: "Scarlat", xp: 1945}, //Bronze
    {nome: "Cygnus", xp: 6653}, // Ouro
    {nome: "Kaelen", xp: 4495} //Prata
]

const mensagensFinais = [];

for (const heroi of herois){
	
    let nivel; //armazena o nivel do heroi
    
    if(heroi.xp <= 1000){
        nivel = "Ferro";
    } else if (heroi.xp <= 2000){
        nivel = "Bronze";
    } else if (heroi.xp <= 5000){
        nivel = "Prata";
    } else if (heroi.xp <= 7000){
        nivel = "Ouro";
    } else if (heroi.xp <= 8000){
        nivel = "Platina";
    } else if (heroi.xp <= 9000){
        nivel = "Ascendente";
    } else if (heroi.xp <= 10000){
        nivel = "Imortal";
    } else{
        nivel = "Radiante";
    }

    const mensagem = `O herói **${heroi.nome}** está no nível de **${nivel}**`;
    mensagensFinais.push(mensagem);
    
    
}

console.log(mensagensFinais.join("\n"));
