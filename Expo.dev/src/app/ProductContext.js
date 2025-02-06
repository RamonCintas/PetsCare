import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [carouselEntries, setCarouselEntries] = useState([
    {
      id: 1,
      tipo:'cão e gato',
      quantidade: 1,
      title:
        'Suplemento Vitz Pet Ômega 3 500 Sabor Carne 900 mg para Cães e Gatos',
      resume:
        '- Ômega 3 - EPA/DHA;\n- Fonte de ácidos graxos poli-insaturados;\n- Transporta oxigênio para o organismo;\n- Melhora o funcionamento dos órgãos vitais e articulações;\n- Dá brilho na pelagem e evita queda de pelos;\n- A vitamina A auxilia o funcionamento do sistema imune, na manutenção da pele e mucosas, e na visão;\n- A vitamina E e o selênio são antioxidantes que auxiliam na proteção dos danos causados pelos radicais livres;\n- Indicado para cães e gatos.',
      image: require('../assets/imagens/dog-omega3.png'),
      image2: require('../assets/imagens/b3.png'),
      price: 38.43,
      preco1: 38.43,
      promo: 57.64,
      obs: '* Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste produto. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 31027528306',
      descricao:
        'O Suplemento Vitz Pet Ômega 3 500 Sabor Carne 900 mg para Cães e Gatos combina ácidos graxos poli-insaturados, ômega 3 (EPA/DHA) associado com selênio, vitamina A e vitamina E. \nUtilizado para melhorar a qualidade de vida, imunidade e a longevidade do animal.\nO Ômega 3 é um ácido graxo essencial, que não pode ser sintetizado pelo organismo dos cães, dessa forma devem ser ingeridos através da dieta ou suplementação.\nDesenvolvidos por nutrólogos veterinários, os produtos são indicados para cães e gatos, em qualquer idade e de todas as raças, que necessitem reforçar o aporte nutricional e proporcionar qualidade de vida, bem-estar dos animais, atuando como coadjuvante no tratamento de alguns problemas de saude e atuando na prevenção.',
    },
    {
      id: 2,
      tipo:'cão',
      quantidade: 1,
      title: 'Antipulgas e Carrapatos NexGard 28,3 mg para Cães de 4,1 a 10 Kg',
      resume:
        '- Segurança e eficácia na medida;\n- Proteção mensal contra pulgas e carrapatos;\n- Pode ser administrado com ou sem alimentos;\n- Disponível em embalagens com um ou três tabletes;\n- Tablete mastigável sabor carne que os cães adoram;\n- Indicado para todos os cães a partir de 8 semanas de idade.',
      image: require('../assets/imagens/dog-anti.png'),
      image2: require('../assets/imagens/b4.png'),
      price: 99.14,
      preco1: 99.14,
      promo: 148.71,
      obs: '* Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste produto. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 3105746',
      descricao:
        'Referência no tratamento contra pulgas e carrapatos, o Antipulgas e Carrapatos NexGard 28,3 mg para Cães de 4,1 a 10 Kg é comprovadamente seguro para cães de qualquer raça e conta com uma linha completa para atender diferentes portes e pesos. \nPode ser administrado em cães adultos e filhotes a partir de oito semanas de vida e pesando acima de 2kg. \nNexgard tem um rápido início de ação e atinge 100% de eficácia em 8 horas para pulgas. \nO NexGard funciona por 30 dias. \nPara manter seu pet livre de pulgas e carrapatos, faça o tratamento mensal. \nNexGard: a solução na medida contra pulgas e carrapatos.\nModo de Uso: A administração de NexGard será uma tarefa fácil, pois o tablete mastigável sabor carne é altamente aceito pelos cães, graças a sua alta palatabilidade. \nPode ser oferecido com ou sem alimentos, pois não altera sua eficácia. \nPara melhores resultados, garanta que o seu cão consuma o tablete por inteiro e observe por alguns minutos para se certificar de que nenhuma parte foi desperdiçada.\nRecomendações: Em casos de reações adversas ao tratamento, suspenda o uso e consulte o médico-veterinário imediatamente. \nSiga sempre a dosagem recomendada e leia a bula. Aconselha-se realizar limpeza completa do ambiente para auxiliar no controle de parasitas.\n Em caso de dúvidas, fale conosco ligando para 0800 888 7387 (seg à sex, das 8h às 18h) ou envie um e-mail para falecom.br@boehringer-ingelheim.com',
    },
    {
      id: 3,
      tipo:'cão e gato',
      quantidade: 1,
      title:
        'Suplemento Vitz Pet Vitaminas de A a Z Sabor Carne 1500 mg para Cães e Gatos',
      resume:
        '- Multivitamínico-mineral fonte de 13 vitaminas, 11 minerais e 9 aminoácidos;\n- Auxiliam na manutenção dos ossos;\n- Auxiliam no metabilismo de proteínas, carboidratos e gorduras;\n- Contribui para manutenção do pelo e pele.',
      image: require('../assets/imagens/dog-vitamina.png'),
      image2: require('../assets/imagens/b5.png'),
      price: 38.43,
      preco1: 38.43,
      promo: 57.64,
      obs: '* Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste produto. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 31027528297',
      descricao:
        'O Suplemento Vitz Pet Vitaminas de A a Z Sabor Carne 1500 mg para Cães e Gatos combina 13 vitaminas, 11 minerais e 9 aminoácidos associados com taurina, luteína e betaglucana.\nDesenvolvidos por nutrólogos veterinários, os produtos são indicados para cães e gatos, em qualquer idade e de todas as raças, que necessitem reforçar o aporte nutricional e proporcionar qualidade de vida, bem-estar dos animais, atuando como coadjuvante no tratamento de alguns problemas de saude e atuando na prevenção.',
    },
    {
      id: 4,
      tipo:'cão',
      quantidade: 1,
      title: 'Antipulgas Zoetis Simparic 20 mg para Cães 5,1 a 10 Kg',
      resume:
        '- Mata as pulgas antes que produzam ovos\n- Controle de dermatite alérgica por picada de pulga (DAPP) ;\n- Possui ação rápida: fazendo efeito em 3 horas, mantendo-se por até 35 dias;\n- Combate também três tipos de sarnas: Sarcópticas, Demodécica e Otodécica;\n- Indicada para cães a partir de 8 semanas de idade e com acima de 1,3 Kg;\n- Pode ser utilizado em cachorros de portes e raças diferentes;\n- Sim, Simparic extermina carrapatos e pulgas instantaneamente e age alem do período de tratamento mensal\n-Simparic é eficaz contra 11 espécies de carrapatos.',
      image: require('../assets/imagens/dog-antipulga.png'),
      image2: require('../assets/imagens/b6.png'),
      price: 101.93,
      preco1: 101.93,
      promo: 152.89,
      obs: '* Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste produto. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 3110173-2',
      descricao:
        'O Antipulgas Zoetis Simparic 20 Mg para Cães 5,1 a 10 kg é utilizado para o tratamento das infestações por pulgas e sarna sarcótica.\nApós a administração do Simparic, a sua atividade contra pulgas dura, pelo menos, 5 semanas.\nO medicamento também pode ser utilizado como parte de uma estratégia de tratamento para o controle da dermatite alérgica por picada de pulga (uma reação alérgica às picadas de pulga).\nContém a substância ativa sarolaner.',
    },
    {
      id: 5,
      tipo:'cão',
      quantidade: 1,
      title: 'Vermífugo Biovet Vermivet Composto 600 mg para Cães',
      resume:
        '- Previne contra infestações por vermes;\n- Vermífugo de amplo espectro;\n- Indicado para combater as formas adultas e larvais dos principais cestóides e nematóides nos cães.',
      image: require('../assets/imagens/dog-verm.png'),
      image2: require('../assets/imagens/b7.png'),
      price: 11.94,
      preco1: 11.94,
      promo: 17.91,
      obs: '* Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste medicamento. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 31017917',
      descricao:
        'O Vermífugo Biovet Vermivet Composto 600 mg para Cães é um vermifugo indicado no tratamento e controle das principais verminoses que acometem os cachorros e possui comprovada eficácia contra os agentes etiológicos.',
    },
    {
      id: 6,
      tipo:'cão e gato',
      quantidade: 1,
      title: 'Suplemento Vitz Pet Pele e Pelo Sabor Carne 900 mg para Cães e Gatos',
      resume:
        '- Contribui para manutenção do pelo e pele;\n- Auxiliam no funcionamento do sistema imune;\n- Retarda o envelhecimento celular;\n- Indicado para cães e gatos.',
      image: require('../assets/imagens/dog-suplemento.png'),
      image2: require('../assets/imagens/b8.png'),
      price: 79.91,
      preco1: 79.91,
      promo: 119.86,
      obs: '* Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste produto. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 31027532549',
      descricao:
        'O Suplemento Vitz Pet Pele e Pelo Sabor Carne 900 mg para Cães e Gatos combina nutrientes como: ácidos graxos, ômega 3, extrato de levedura Saccharomyces cerevisae, vitaminas, minerais e associação dos aminoácidos metionina e cistina.\nDesenvolvidos por nutrólogos veterinários, os produtos são indicados para cães e gatos, em qualquer idade e de todas as raças, que necessitem reforçar o aporte nutricional e proporcionar qualidade de vida, bem-estar dos animais, atuando como coadjuvante no tratamento de alguns problemas de saude e atuando na prevenção.',
    },
    
  ]);

  const [listEntries, setListEntries] = useState([
    {
      id: 7,
      tipo:'cão e gato',
      quantidade: 1,
      title:
        'Coleira Antipulgas e Carrapatos Elanco Seresto para Cães e Gatos até 8 Kg',
      resume:
        '- Elimina pulgas e carrapatos;\n- Baixas doses liberadas continuamente;\n- Segurança para os animais e para a família;\n- Oferece proteção contínua por até 8 meses;\n- Pode ser usada em filhotes de cães a partir de 7 semanas;\n- Coleira ajustável com trava de segurança, sem cheiro e resistente à água;\n- Atinge acima de 99,8% de eficácia na eliminação das pulgas em 24 horas;\n- Atinge acima de 97% de eficácia na eliminação de carrapatos em 48 horas.',
      image: require('../assets/imagens/cat-coleira.png'),
      price: 206.01,
      preco1: 206.01,
      obs: '* Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste produto. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 3105386-1',
      descricao:
        'Coleira Antipulgas e Carrapatos Elanco Seresto para Cães e Gatos até 8 Kg\nProteção duradoura para seu pet:A Coleira Antipulgas e Carrapatos Elanco Seresto para Cães e Gatos até 8 Kg oferece longa proteção, mantendo seu pet protegido por até 8 meses contra a ação de carrapatos e pulgas.\nSem incômodos para você e seu pet:Seresto® não possui cheiro, não solta pó e é resistente à água. Isso significa que você e seu pet podem aproveitar a vida sem se preocupar com pulgas e carrapatos.\nAção eficaz por contato:A coleira Seresto® se distribui pela pele, pelos e camada lipídica e age por contato, reduzindo o risco de picadas no seu pet.\nPara cães e gatos de até 8 kg:A coleira Seresto® tem as apresentações P e G, com indicação para gatos e cães de até 8 kg e cães acima de 8 kg. Recomendada para cães a partir de 7 semanas e gatos a partir de 10 semanas de idade.\nBrincadeiras sem preocupações:Garanta 8 meses de brincadeiras com a coleira antipulgas e anticarrapatos Seresto®. Seu pet estará protegido e você poderá aproveitar ao máximo o tempo que passam juntos.\nCompre agora e dê ao seu pet a proteção que ele merece!',
    },
    {
      id: 8,
      tipo:'gato',
      quantidade: 1,
      title:
        'Antipulgas e Carrapatos Zoetis Revolution 6% para Gatos de 2,5 a 7,5 kg - 45 mg',
      resume:
        '- Quebra o ciclo das pulgas na primeira aplicação;\n- Eficaz no tratamento, prevenção e controle contra pulgas;\n- Auxilia o controle de carrapatos;\n- Contribui a desinfestação do ambiente;\n- Possibilita que o animal se molhe ou tome banho após duas horas de aplicação;\n- Controla a DAPP.',
      image: require('../assets/imagens/cat-antiparasitario.png'),
      price: 209.43,
      preco1: 209.43,
      obs: '* Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste produto. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 3103103-2',
      descricao:
        'O Antipulgas e Carrapatos Zoetis Revolution 6% para Gatos de 2,5 a 7,5 kg é composto por selamectina, uma solução pronta para uso para o tratamento tópico de gatos.\n Pode ser usado em Filhotes acima de 6 semanas de idade.\n Inibe o desenvolvimento das larvas de pulgas do ambiente devido a sua ação residual.\n Trata e controla sarna de ouvidos e sarcóptica, vermes intestinais e piolhos sugadores e mordedores.',
    },
    {
      id: 9,
      tipo:'gato',
      quantidade: 1,
      title: 'Antipulgas Combo Advocate Elanco para Gatos de 4 a 8 Kg - 0,8 mL',
      resume:
        '- Aplicação prática;\n- Previne a Dirofilariose;\n- Auxilia a desinfestação do ambiente;\n- Ação imediata sem precisar picar o animal;\n- Eficaz no tratamento contra pulgas por 4 semanas;\n- Pode ser aplicado logo após o banho e tosa, com o pelo seco;\n- Trata e previne os principais vermes intestinais redondos de cães e gatos;\n- A partir de 7 semanas de vida do cão/ A partir de 9 semanas de vida do gato;\n- Indicado para o tratamento para o tratamento de sarnas: sarcóptica, demodécica e otodécica.',
      image: require('../assets/imagens/cat-antipulgasg.png'),
      price: 184.95,
      preco1: 184.95,
      obs: '* Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste produto. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 3103915',
      descricao:
        'Pulgas, Ácaros das sarnas, otodética, sarcóptica e demodécica Vermes intestinais em gatos com peso entre 4 kg a 8 kg.\n Eficaz no tratamento, porque possui um efeito residual que combate a reinfestação de pulgas de imediato durante 4 semanas, garantindo assim o conforto que seu bichinho merece.\nIndicação:\n O Antipulgas Combo Advocate Elanco para Gatos de 4 a 8 Kg é indicado para a prevenção e tratamento das infestações por pulgas, ácaros das sarnas otodética, sarcóptica e demodécica e os vermes intestinais em gatos entre 4 kg a 8 kg de peso.\n Eficaz no tratamento, porque possui um efeito residual que combate a reinfestação de pulgas de imediato durante 4 semanas, garantindo assim o conforto que seu bichinho merece.\nRecomendação:\n Para maiores informações sobre o produto, consulte a bula ou entre em contato com o fabricante. Siga sempre as recomendações de dose e frequência de aplicação. Em caso de reações adversas ao tratamento, suspenda o uso e retorne ao veterinário imediatamente.',
    },
    {
      id: 10,
      tipo:'gato',
      quantidade: 1,
      title: 'Antipulgas Combo Advocate para Gatos de até 4 Kg - 0,4 mL',
      resume:
        '- Aplicação prática;- Previne a Dirofilariose;- Auxilia a desinfestação do ambiente;- Ação imediata sem precisar picar o animal;- Eficaz no tratamento contra pulgas por 4 semanas;- Pode ser aplicado logo após o banho e tosa, com o pelo seco;- Trata e previne os principais vermes intestinais redondos de cães e gatos;- A partir de 7 semanas de vida do cão/ A partir de 9 semanas de vida do gato;- Indicado para o tratamento de sarnas: sarcóptica, demodécica e otodécica.',
      image: require('../assets/imagens/cat-antipulgasp.png'),
      price: 169.11,
      preco1: 169.11,
      obs: '*Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste produto. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 3103914',
      descricao:
        'Pode ser aplicado logo após o banho.\n Previne a dirofilariose felina e elimina pulgas reinfestantes durante quatro semanas, devido a seu efeito residual.\nIndicação:\n O Antipulgas Combo Advocate Elanco para Gatos de até 4 Kg é indicado para a prevenção e tratamento das infestações por pulgas, ácaros das sarnas otodética, sarcóptica e demodécica e os vermes intestinais.\n Pode ser aplicado logo após o banho.\n Previne a dirofilariose felina e elimina pulgas reinfestantes durante quatro semanas, devido a seu efeito residual.\nRecomendação:\n Para maiores informações sobre o produto, consulte a bula ou entre em contato com o fabricante. Siga sempre as recomendações de dose e frequência de aplicação. Em caso de reações adversas ao tratamento, suspenda o uso e retorne ao veterinário imediatamente.',
    },
    {
      id: 11,
      tipo:'gato',
      quantidade: 1,
      title: 'Antipulgas e Carrapatos Frontline Plus para Gatos',
      resume:
        '- Pode ser aplicado em gatas prenhes e em lactação;- Indicado para todos os gatos a partir de 8 semanas de idade;- Proteção mensal contra pulgas, carrapatos e piolhos mastigadores;- Frontline Plus é indicado para pets ativos, que saem para passear e brincam ao ar livre, e por isso estão mais sujeitos às infestações de pulgas e carrapatos.',
      image: require('../assets/imagens/cat-antipulga.png'),
      price: 45.81,
      preco1: 45.81,
      obs: '*Consulte sempre o Médico Veterinário de sua confiança para o uso apropriado deste produto. Leia a bula ou informações descritas na embalagem.',
      cod: 'Cod: 3103035',
      descricao:
        'Frontline Plus é a linha pensada para animais ativos, que frequentam ambientes com médio risco de infestação.\n Seu princípio ativo, a molécula Fipronil, atua no controle de infestações por pulgas, carrapatos e piolhos mastigadores. Seu grande diferencial é a associação ao composto (S)-metopreno, que age nas fases de desenvolvimento das pulgas e atua contra ovos e larvas deste parasita.\n O Antipulgas e Carrapatos Frontline Plus para Gatos é apresentado em pipetas de fácil aplicação e dose única, evitando assim a dificuldade usual na administração de remédios a animais.\n O produto é indicado somente para uso externo e recomendado para gatos adultos, fêmeas prenhes e lactantes, e filhotes a partir de 8 semanas de vida. Seu período de ação é de 1 mês contra pulgas e carrapatos.\n Frontline: cuidado que seu pet sente na pele.\n *2019-2020 pelo prêmio internacional World Branding Awards\nFrontline Plus Gatos até 10 kg: ideal para os gatos ativos, que vivem em ambientes com médio risco de infestação.\n Fabricado pela Boehringer Ingelheim, empresa que tem como principal objetivo desenvolver soluções para melhorar cada vez mais a vida de cada pet, Frontline Plus Gatos é um dos produtos da família Frontline, desenvolvido para proporcionar melhor saúde e bem-estar aos gatos.\nIndicação: O Frontline Plus Gatos tem como princípio ativo a molécula Fipronil e atua no controle de infestações por pulgas, carrapatos e piolhos mastigadores. Seu grande diferencial é a associação ao composto (S)-metopreno, que age nas fases de desenvolvimento das pulgas e atua contra ovos e larvas deste parasita. Frontline Plus Gatos é apresentado em pipetas de fácil aplicação e dose única.\n O produto é indicado somente para uso externo e recomendado para gatos adultos, fêmeas prenhes e lactantes, e filhotes acima de 1kg e a partir de 8 semanas.\n Seu período de ação é de 1 mês contra pulgas e carrapatos.\n Frontline: cuidado que seu pet sente na pele.\nModo de uso:\nQuebrar a ponta da pipeta na altura da linha tracejada.\nAfastar o pelo do gato na região entre a nuca e a base do pescoço, até aparecer a pele.\nColocar a ponta da pipeta sobre a pele e apertar em vários pontos, para evitar que o produto escorra.\n Para obter o máximo efeito residual, evite dar banho no animal 48 horas antes e após a aplicação.\nRecomendação:\n Para melhor eficácia, a frequência e modo de uso de qualquer produto da linha Frontline devem ser seguidos conforme recomendado em bula. O produto Frontline Plus Gatos não deve ser aplicado em outras espécies de animais. Evite contato do medicamento com regiões de risco, como olhos e boca.\n Em casos de reações adversas ao tratamento, suspenda o uso e retorne ao veterinário imediatamente. Siga sempre a dosagem recomendada.\n Aconselha-se realizar limpeza completa do ambiente para auxiliar no controle de parasitas.\n Emcase de dúvidas, fale conosco ligando para 0800 888 7387 (seg à sex, das 8h às 18h) ou envie um e-mail para falecom.br@boehringer-ingelheim.com',
    },
    {
      id: 12,
      tipo:'gato',
      quantidade: 1,
      title: 'Vermífugo Drontal Gatos 4 Kg - 4 Comprimidos',
      resume:
        '- Pode ser misturado a ração ou alimento;- Os adultos podem ser vermifugados a cada três meses;- Dispensa regime prévio ou jejum prévio para a administração;- Segurança para o uso em filhotes a partir de 15 dias e com peso mínimo de 1 kg;- Elimina os cestoides e nematódeos presentes no intestino do gato em uma dose única.',
      image: require('../assets/imagens/cat-vermifugo.png'),
      price: 57.89,
      preco1: 57.89,
      obs: '*Consulte o médico veterinário para adequar o tratamento com Drontal Gatos® a cada situação particular.',
      cod: 'Cod: 310008',
      descricao:
        'Conhecendo as particularidades dos gatos, os comprimidos de Drontal® Gatos foram desenvolvidos em formato elíptico e revestidos por silicone para uma administração mais fácil e sem estresse.\n Drontal® gatos possui a combinação eficaz de praziquantel e pamoato de pirantel, potentes ativos no combate aos principais vermes redondos, como Ancylostoma braziliense, Ancylostoma tubaeforme, Toxocara cati e Toxascaris leonina, além de sua ação contra vermes achatados, dentre eles, Dipylidium caninum, Echinococcus granulosus.\n Echinococcus multiloculari, Joyeuxiella pasqualei, Mesocestoides spp. e Taenia spp.\n Escolha a melhor opção em vermifugação para o seu gato, medicamento seguro para filhotes a partir de 15 dias de vida, fêmeas gestantes e lactantes.\n Um tratamento elimina os principais vermes dos gatos e a vermifugação frequente contribui para a saúde e bem estar do seu melhor amigo.\n Recomenda-se o uso de Drontal a cada 3 meses ou a critério do médico veterinário.\nO Vermífugo Drontal Gatos mantém seu gato protegido contra os vermes intestinais redondos e achatados.\n Conhecendo as particularidades dos gatos, os comprimidos de Drontal® Gatos foram desenvolvidos em formato elíptico e revestidos por silicone para uma administração mais fácil e sem estresse.\n Drontal® gatos possui a combinação eficaz de praziquantel e pamoato de pirantel, potentes ativos no combate aos principais vermes redondos, como Ancylostoma braziliense, Ancylostoma tubaeforme, Toxocara cati e Toxascaris leonina, além de sua ação contra vermes achatados, dentre eles, Dipylidium caninum, Echinococcus granulosus.\n Echinococcus multiloculari, Joyeuxiella pasqualei, Mesocestoides spp. e Taenia spp.\n Escolha a melhor opção em vermifugação para o seu gato, medicamento seguro para filhotes a partir de 15 dias de vida, fêmeas gestantes e lactantes.\n Um tratamento elimina os principais vermes dos gatos e a vermifugação frequente contribui para a saúde e bem estar do seu melhor amigo.\n Recomenda-se o uso de Drontal a cada 3 meses ou a critério do médico veterinário.\n',
    },
    
  ]);

  return (
    <ProductContext.Provider value={{ carouselEntries, listEntries }}>
      {children}
    </ProductContext.Provider>
  );
};
