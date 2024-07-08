var btn_curiosidade = document.getElementById("btn-curiosidade");

btn_curiosidade.addEventListener('click', () => {
    let textBD = ["A voz de Azmuth tanto brasileira quanto americana era fina no filme: Ben 10: O Segredo do Omnitrix mas nas outras séries é grossa.",
        "Por algum motivo (mais provável que seja um erro de coloração) o capacete de XLR8 é verde no jogo: Ao Resgate, Ben!",
        "O Ben quando tinha 10 anos salvava o universo não por que era o certo a se fazer, mas sim porque ele se achava o herói.",
        "O Omnitrix de Omniverse, na hora da seleção de aliens ele pode mostrar os aliens tanto como hologramas em forma de um disco, como em silhueta mesmo, igual na série clássica.",
        "O Friagem em sua forma suprema não consegue dobrar suas asas, diferente de sua forma original.",
        `O nome do alien:"Ball Weevil" ficou conhecido aqui no Brasil como:"Escarábola" pois é a junção das palavras "Escaravelho"(que é o nome de um inseto) com "Bola" já que ele pode fazer uma bola de gosma pra jogar nos seus inimigos. Então, ficou como Escarábola.`,
        `No ep:"Ken 10" em Ben 10 Clássico, aparece o Kevin 11 mil e dá para perceber que ele tem uma cicatriz em seu queixo em forma de "X". Em Ben 10 Omniverse foi Ben que causou isso.`,
        `O capacete dos kineceleranos é algo biológico.`,
        `Duncan Roleau afirmou que o Omnitrix do Reboot tem acesso à todos os DNA's do Omnitrix das séries originais.`,
        `Aqui no Brasil o nome do alien Rath, é pronunciado assim: "rrati". Mas a pronúncia correta é: "Wráfi".`,
        `Voltando a falar da pronúncia do nome dos aliens, o Gravattack aqui no Brasil é pronunciado: "Gravataque" mas o correto mesmo é: "Gravatéque"`,
        `O Anfíbio já foi chamado de "Amphere" que é o mesmo nome de seu planeta.`,
        `Aggregor tem 4 espinhos na testa, mas no primeiro episódio de Ben 10: Supremacia Alienígena ele tem 6 espinhos.`,
        `"Omnitrix" em latim significa: "Muitas transformações"`,
        `Se você acelerar a música de abertura de Ben 10: Força Alienígena irá perceber que se parece muito com a música da abertura da série clássica.`,
        `O alienígena Portaler foi feito por fã e apareceu no jogo: "Fuel Run".`
    ];
    let p_curiosidade = document.getElementById("p-curiosidade");

    p_curiosidade.innerHTML = textBD[Math.floor(Math.random() * textBD.length)];
});