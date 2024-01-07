#### 06/01/2024

Curso de React Native: utilizando o Context API nas suas aplicações

@01-Definição do Context API 

@@01
Apresentação

Olá! Sou André Cunha, instrutor aqui da Alura. Sejam muito bem-vindos e bem-vindas a mais um curso da formação inicial de React Native. Nesse curso aprenderemos o que é o Context API, além do porquê e quando devemos utilizá-lo.
Em alguns cursos dessa formação, trabalhamos com a navegação entre as telas. Para acessarmos a informação de uma tela em outra, normalmente passávamos essa navegação via props. Entretanto, isso vai se tornando impraticável quando o aplicativo vai crescendo e possuindo várias telas.

O Context veio para resolver exatamente esse problema, já que ele deixa essa informação visível e acessável de forma global na aplicação. Ele pode ser utilizado em qualquer tela ou componente, sem ter que passar a navegação via props.

O Context API não se resume só a isso, podendo ser utilizado em várias situações. Neste curso usaremos em três situações diferentes. Venham conferir comigo no projeto.

Esse é um projeto de e-commerce. Logo na primeira tela temos o uso do Context API: usaremos na parte de autenticação. Se não sabem o que é autenticação, não se preocupe, teremos um vídeo explicando sobre isso.

Em resumo, autenticação é onde fazemos o login da aplicação, digitando e-mail e senha. Assim recuperamos os dados do usuário que está logando no sistema. Preenchendo os campos e apertando o botão "Entrar", vamos para tela de produtos.

Tela de autenticação do aplicativo. O fundo é azul marinho e a palavra "Login" está escrita em letras brancas no centro da tela. Abaixo de Login tem dois campos que vão de uma borda a outra da tela: o primeiro é para o e-mail e o segundo é para a senha. Abaixo dos campos, há o botão "Entrar" em verde claro e centralizado.

Na tela de produtos, temos os produtos do nosso e-commerce. Eles estão em cards retangulares brancos que ocupam de uma borda a outra da tela. No lado esquerdo do card tem o ícone do produto, já ao lado direito do ícone, tem o nome do produto e, abaixo, o preço. Na extrema direita do card, temos um botão quadrado e verde com um "+" branco dentro.

Graças ao Context API, conseguiremos salvar esses produtos na lista de carrinhos. Se clicarmos no botão "+", estamos adicionando os produtos na nossa lista de carrinhos. Esses produtos também ficam acima dos demais, em uma faixa com um tom de azul mais claro que o fundo. Nessa faixa está escrito "Últimos vistos", seguido de versões menores de cards desses produtos adicionados.

Tela de produtos. No canto superior esquerdo está escrito "Olá, André". No canto superior direito temos um ícone branco engrenagem. Ao lado esquerdo da engrenagem, há um ícone branco de carrinho de compras. Abaixo desses ícones, está escrito "Últimos vistos", em letras brancas. O card que aparece tem um ícone que é um círculo laranja com um tênis branco dentro. O produto é o "Tênis bacana" e custa "R$ 100". Abaixo dos "Últimos Produtos", temos "Produtos" escrito em letras branca, seguido dos cards dos produtos cadastrados. Em todos os cards o nome do produto é em preto e o preço em uma fonte menor e verde claro.

Cliquei no "+" dos primeiros três produtos e percebemos que, no canto inferior direito do carrinho, tem um círculo vermelho com o número 3 dentro, indicando que há três produtos no carrinho. Se clicarmos no ícone do carrinho, vamos para tela "Resumo", mostrando os produtos adicionados ao carrinho.

Tela com o fundo azul marinho. No canto superior esquerdo está escrito "André" em letras brancas e no canto superior direito está o ícone do carrinho de compras com a indicação da quantidade de produtos. Abaixo, há a lista com os cards dos produtos adicionados, ocupando novamente de uma borda a outra da tela. Na parte inferior da tela há um botão verde claro escrito "Finalizar", que ocupa de uma borda a outra da tela.

Isso tudo foi feito sem ter que passar via props na navegação, já que está visível globalmente em toda a aplicação. Também temos a tela "Finalizar", para onde somos direcionados ao clicarmos no botão "Finalizar" na parte inferior da tela "Resumo".

A tela "Finalizar" exibe as informações do usuário que entrou no sistema, que vieram da autenticação. Isso também foi passado via Context API. Na parte superior da tela "Resumo" há as informações de entrega, que são o nome, endereço, e-mail e telefone do usuário. Em seguida há a quantidade de produtos e o preço total.

Na parte inferior da tela, aparece novamente o botão "Finalizar". Ao clicarmos nele, voltamos para tela principal, finalizando a compra, como mostra um aviso no centro da tela.

Utilizamos o Context em outra situação muito comum, tanto em sites, quanto aplicativos, que é a alteração do tema. Se clicarmos no ícone de engrenagem, no canto superior direito, iremos para tela de configurações. Na tela "Configurações", conseguimos alterar o tema de toda aplicação de escuro para claro, apertando na chave.

Tela de configurações. A tela tem o fundo azul marinho e a palavra "Configuração" no centro. Abaixo, em uma fonte bem menor, está escrito "Tema: escuro", indicando o tema da aplicação. Abaixo tem uma chave onde, se clicar, o tema é alterado.

Ao apertarmos a chave, as cores do aplicativo foram alteradas do tema escuro para o tema claro, inclusive a tela de Login, como vemos se voltamos para ela. Percebemos que toda aplicação foi alterada de forma global, graças ao Context API.

Ficaram curiosos ou curiosas para saber como isso foi implementado? Vem comigo nessa jornada!

@@02
Preparando o ambiente: instalação do Expo e download do projeto
PRÓXIMA ATIVIDADE

Olá!
Antes de iniciar nossa jornada de aprendizados, é preciso que você leia com atenção algumas instruções e baixe os materiais necessários para acompanhar bem o curso.

Instalando o Expo
Neste curso, teremos um aplicativo de e-commerce que vai nos auxiliar durante toda a nossa caminhada de estudos sobre o Context API e esse aplicativo foi construído no React Native com Expo.

Por isso, é necessário ter o expo instalado na sua máquina. Caso você não tenha, separamos um artigo para você fazer a instalação de forma descomplicada. Para acessá-lo, clique aqui.

Baixando o código no git
Após concluir a instalação, você também pode baixar o projeto base do nosso curso, para acompanhar com mais eficiência as aulas. Para acessá-lo, clique aqui.

Na página do git, clique no botão “Code” e selecione a opção “Download ZIP” para baixar o projeto. Recomendamos que teste o projeto e veja se ele apresenta os comportamentos esperados.

Orientações e dicas de estudo
No nosso curso, teremos atividades práticas e teóricas para que você teste o seu conhecimento e aprofunde os seus estudos. Vamos ver dicas para que você siga da melhor forma possível no curso?

Busque ajuda! Tudo bem se não conseguir realizar alguma atividade, o erro faz parte do processo e estamos aqui para ajudar você;
Caso sinta-se cansado(a) ou não esteja entendendo algo, dê uma pausa, tome uma água, e depois assista novamente as videoaulas;
Procure o fórum e aproveite para interagir com outras pessoas, tirando dúvidas e até mesmo ajudando alguém - ensinar é uma ótima forma de aprender;
Evite fontes de distração como redes sociais e, de preferência, deixe o celular um pouco mais afastado, pois a concentração e foco são essenciais para estudar e fixar bem os conteúdos.
O importante é não desistir! Preparado(a)? Podemos começar.

Bons estudos!

https://www.alura.com.br/artigos/como-instalar-configurar-expo-do-react-native?utm_source=gnarus&utm_medium=timeline&_gl=1*1dbnw31*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwNDU3Mjg3MS4xNTQuMS4xNzA0NTc3MzgwLjAuMC4w*_fplc*eWlaWGZWcDBqWnhlVyUyQklEJTJCSnNLN0pkTUhzd05ObnRORFI4eHRqJTJCYzB3RWVES3o1Q1l1bUZQSkNIZEtwNXNFdXo1TTFIbEpZdWhUV0RPY3NtSiUyQmlwSG5vJTJGWlAzTW9YODVtc0ViNW9aSHFaQUxYcEI4TzlUd3cyNmJqRXduZyUzRCUzRA..

https://github.com/alura-cursos/react-native-context-api/tree/projeto-base

@@03
O projeto

O objetivo deste curso é aplicar os conceitos de Context API no React Native. Então é importante que saibam que não iremos construir uma aplicação do zero aqui.
Vamos usar um projeto base e, a partir dele, aplicaremos os conceitos do curso. Esse projeto estará disponível por meio de uma atividade, onde vocês poderão entrar no GitHub, baixá-lo e o executar no computador de vocês. Vejamos o que tem dentro desse projeto.

Depois de baixar e executar a aplicação no computador de vocês, perceberão que esse projeto foi feito com o Expo. Isso porque, com o React Native CLI, seria da mesma forma que usar Context API. Por isso preferimos usar o Expo, para facilitar ainda mais esse curso.

Depois de executar a aplicação, notarão que ele entrou na tela de Login. Essa é uma aplicação de e-commerce, então terá uma lista de produtos que, futuramente, poderemos colocar em uma lista no carrinho. A partir disso, aplicaremos os conceitos de Context API aqui. Vamos descobrir o que tem em cada tela.

Na coluna da esquerda, onde fica o Explorador, vamos clicar no arquivo "App.js" para abri-lo. Veremos que ele está importando as Rotas, que estão no arquivo "rotas" dentro da pasta "src". Então, na coluna da esquerda, acessaremos "src > rotas".

Dentro desse arquivo, estão sendo importadas as três telas: a principal, a de login e a tela de configuração. Estamos utilizando o React Navigation aqui para navegar entre essas três telas. Vamos descobrir o que tem em casa uma delas.

Na coluna da esquerda, vamos navegar para "src > telas > Login". Vemos que nessa pasta temos os estilos, em "estilos.js", e o arquivo principal, o "index.js". Esse arquivo principal não é muito diferente do que vimos em outros cursos.

Nele temos a View, englobando a tela inteira, temos dois TextInput, um para e-mail e outro para senha, temos o texto escrito "Login" e temos o botão. Esse botão, ao clicar, usará o navigation para ir para tela principal.

Então, no emulador, temos a nossa aplicação aberta na tela de Login, onde clicaremos no botão "Entrar". Com isso, somos direcionados para tela principal, onde alguns produtos estão listados.

Na coluna da esquerda, podemos acessar "src > telas > Principal". Notamos que, nesta pasta, existem os arquivos "estilos.js" e "index.js", que é o arquivo principal. No "index.js" temos o Text, informando o nome, o ícone de carrinho, o ícone de engrenagem e uma FlatList.

A FlatList está carregando alguns produtos. Se olharmos no começo desse código, vemos que esses produtos estão sendo importados de um arquivo chamado "produtos", que também está na pasta "Principal".

Ao abrirmos o arquivo "produtos.js", reparamos que ele é um vetor de objetos que contém alguns produtos. Cada produto tem imagem, que está sendo importada de uma pasta chamada "imagens".

A pasta "imagem" pode ser acessada na coluna da esquerda, e vocês podem olhar as imagens com mais calma, se quiserem. Ainda em "produtos.js", cada produto também tem a informação de texto, com o nome do produto, e preco, com o preço.

Além disso, na FlatList da tela principal, temos o ListHeaderComponent que contém outra FlatList. Por enquanto, ela não está sendo utilizada, mas os "Últimos vistos" aparecerão futuramente na parte superior da tela, antes dos produtos. Se repararmos, atualmente o ultimosVistos é um vetor vazio, por isso não tem nada sendo exibido.

Na nossa aplicação, se clicarmos no ícone do carrinho, no canto superior direito, nada acontece por enquanto. Contudo, se clicarmos na engrenagem, ao lado dele, somos redirecionados para tela de configuração.

Na coluna da esquerda do editor de códigos, temos a pasta "Configuracao", que contém os arquivos "estilos.js" e "index.js". Nesse arquivo principal também tem uma View e um Text, mas há um componente novo, que é o Switch.

O Switch também está sendo importado do React Native e ele é como um botão, mas alterna o estado quando clica nele. No nosso aplicativo, se clicarmos nesse botão, ele irá mexer como se fosse uma chave.

No nosso código vemos que essa ação altera uma variável chamada estado. Sendo assim, ao clicarmos no Switch, ele altera o estado de true para false. Utilizaremos esse switch para alterar o tema da nossa aplicação, de escuro para claro. Além disso, utilizaremos o Context para aplicar isso globalmente na aplicação.

Uma coisa diferente que não costumamos fazer nos outros cursos e projetos, é o arquivo chamado "estilosGlobais.js". Acessamos ele pelo caminho "src > telas > estilosGlobais.js". Esse arquivo é um objeto, chamado tema, que contém alguns estilos.

No tema temos o fundo, que recebe um hexadecimal. Isso também se aplica ao titulo, texto e outras propriedades desse objeto. Cada uma delas recebe um hexadecimal.

Se repararmos, esse tema está sendo importado para todos os arquivos de estilo. Assim podemos usá-lo, por exemplo, no background.

Então temos o código backgroundColor: tema.fundo, no qual usamos o valor hexadecimal da propriedade fundo que está dentro do tema. Isso será muito importante para alterarmos o tema da nossa aplicação, como veremos durante a aplicação do Context API.

Neste vídeo vemos o que tem no nosso projeto base. No próximo vídeo entenderemos, de fato, o que é o Context API.

@@04
O que é Context API

Acabamos de ver o projeto base que será usado neste curso. Vamos agora entender o que é Context API.
Imaginando uma situação comum, e usando como base o projeto deste curso, descreverei como acontece uma troca de telas. Começamos na tela de Login. Ao clicarmos no botão "Entrar", passamos para tela seguinte, que é a tela de produtos, onde todos os produtos do nosso e-commerce estão listados.

Ao clicarmos no ícone de carrinho, na parte superior, passamos para tela de Resumo, onde estão listados os produtos que estavam na lista do carrinho. Ao clicarmos no botão de finalizar, na parte inferior da tela, passamos para última tela, que é a "Finalizar".

Na tela de Finalizar há as informações de nome, endereço, e-mail e telefone do usuário que logou. Além disso, há o preço total dos produtos que ele irá adquirir ao finalizar a compra. Contudo as informações do usuário que estão nesta última tela vieram da primeira tela, que é a de Login. Em uma situação comum, passaríamos essas informações via props entre as telas.

Props: (usuário)
{
  nome,
  endereco,
  email,
  telefone
}COPIAR CÓDIGO
Então, ao fazer o Login, teríamos acesso ao nome, endereço, e-mail e telefone, passando essas informações, via props, para tela seguinte, que é a de produtos. Depois passaríamos esses dados via props para tela seguinte, que é a de Resumo.

Ao clicarmos em "Finalizar", também passaríamos as informações via props para tela Finalizar. Percebam que precisamos passar esses dados entre duas telas que estavam no caminho entre a tela de Login e a tela de Finalizar sem que elas sequer exibissem essas informações.

Em uma situação com poucas telas, até podemos aplicar isso, mas imaginem uma aplicação que começa a crescer e passa a ter muitas telas. Acaba ficando complexo ter que passar muitas informações via props entre as telas.

Para entendermos o motivo da passagem de parâmetros funciona desse jeito, precisamos entender como funciona a hierarquia de componentes no React Native. A estrutura do React Native é muito parecida com uma árvore.

Temos o topo, que podemos imaginar que é o arquivo "App.js", ou seja, o arquivo principal. No exemplo eu chamei esse arquivo de "Nó".

Esse Nó será responsável por ter as rotas, que são as telas da nossa aplicação. Eu chamei de "Pai 1" e "Pai 2", mas imaginem que é a "Tela 1" e a "Tela 2" da nossa aplicação. A Tela 1 terá alguns componentes, que eu chamei de "Filho 1" e "Filho 2".

Supondo que o Filho 1 é um componente de cabeçalho, onde tem o nome e a foto da pessoa, ele terá algumas coisas dentro dele, que eu chamei de "Neto 1" e "Neto 2". Podemos imaginar que é o texto e a imagem. Então o React Native funciona com essa hierarquia, igual a uma árvore.

Fundo azul com a estrutura de hierarquia de componentes do React Native. No topo temos um retângulo escrito "Nó", de onde sai duas setas: uma apontando para esquerda, onde tem o retângulo "Pai 1", e outra apontando para direita, onde tem o retângulo "Pai 2". Do retângulo "Pai 1" saem mais duas setas: a da esquerda aponta para o "Filho 1" e a da direita aponta para o "Filho 2". Do "Filho 1" saem mais duas setas: a da esquerda aponta para o "Neto1" e a da direita aponta para o "Neto 2".

Entretanto, percebam que, se quisermos passar uma variável que está no Nó, que é o primeiro arquivo, conseguimos passar para o Pai 1 e o Pai 2. Uma vez que está no Pai 1, podemos passar essa propriedade para o Filho 1 e o Filho 2. Tendo ela no Filho 1, conseguimos passar para o Neto 1 e Neto 2.

Vamos supor que criamos uma variável no Pai 1. Nesse caso, não conseguimos passar ela diretamente para o Pai 2, porque eles estão na mesma hierarquia. Só conseguimos passar essa variável para os filhos dele.

Sendo assim, temos acesso limitado a estados ou variáveis de componentes que estão no mesmo nível de hierarquia do React Native. Entretanto, existe outra forma de passar esse parâmetros, então aprenderemos como lidar com isso em aplicativos grandes.

Recapitulando, no fluxo normal temos um componente que é pai de outro em uma escala de hierarquia. Dessa forma conseguimos passar as propriedades do componente 1 para o 2 e do componente 2 para o 3, via props.

Existe também o fluxo com Context API, que nos permite pular os componentes que estão no meio do caminho. Assim o componente 1 consegue passar uma propriedade diretamente para o componente 3, sem ter que passar para o componente 2.

Isso funciona, mais ou menos, da seguinte maneira: imaginemos que o Context API é um cubo que fica globalmente disponível na aplicação, ou seja, qualquer componente da aplicação pode acessá-lo. Esse cubo conterá todas as informações que queremos salvar nele, como variáveis, funções, entre outras. Essas informações são chamadas de estados.

Podemos salvar esses estados a partir de qualquer componente ou tela da nossa aplicação. Então, na imagem, temos o primeiro componente, que é o Nó, enviando e salvando uma informação para o Context API. Essa informação está sendo acessada pelos componentes A, B e C, mas diretamente do Context.

Do lado esquerdo temos um diagrama com uma hierarquia e do lado direito temos um cubo escrito "Context API". A hierarquia começa com um círculo branco, que é o primeiro componente, ou o nó. Uma linha liga esse nó ao Context API e, sobre a linha, está escrito "Enviar". Na hierarquia, o primeiro nó está ligado a dois círculos azuis abaixo dele, o A, que está mais à esquerda, e o B, que está mais à direita. De ambos também sai uma linha para o Context API. O círculo A está ligado a outro círculo em branco abaixo dele, que está mais à esquerda. Já o círculo B está ligado a dois círculos brancos abaixo dele, um mais à esqueda e outro mais à direita. O círculo da direita está ligado a outro círculo azul claro, que é o C, de onde também sai uma linha para o Context API. Abaixo dessa linha está escrito "Consumir".

Então tudo que for alterado no Context será refletido nas outras telas. Deste modo não precisaremos ficar passando de um componente para o outro via props. Conseguimos acessar uma informação do primeiro nó no último, sem ter que passar pelas telas.

Isso tornar nossa aplicação mais versátil. Além disso, a organização fica melhor para, eventualmente, encontrar algum bug. Não será necessário voltar entre as telas para descobrir de onde vem a propriedade, uma vez que ela está acessível globalmente no arquivo.

Recapitulando, na situação comum, a informação é passada, via props, de uma tela para outra até chegar na tela que precisamos. Já com o Context API temos as mesmas telas, mas as informações que estão na primeira tela, que é a de Login, são salvas diretamente no Context, que é um arquivo onde as variáveis ficam globalmente visíveis.

Assim podemos acessar as informações diretamente da última tela, que seria a "Finalizar", pulando as telas do meio, que não vão usar essas informações diretamente. Em resumo, usamos o Context API porque ele organiza o crescimento do projeto, ajudando-nos a lidar melhor com complicações maiores, como muitas telas.

O Context API não é a única solução. Existem outras bibliotecas que fazem a mesma coisa que o Context, como o Redux, que é uma biblioteca bem famosa. O Context consegue fazer praticamente tudo que o Redux faz, mas o Redux faz algumas coisas a mais.

Entretanto, como o Redux é uma biblioteca externa, que depende da comunidade para ser mantida, nesse curso usaremos o Context API, que é nativo do React. Assim não precisaremos baixar nada, apenas usaremos as propriedades do React que nos permitem usar o Context API.

Se tiverem a curiosidade de saber como funciona o Redux e o que ele consegue fazer além do Context, terá um artigo no Para saber mais. Nele vocês descobrirão o que o Redux faz e poderão até implementá-lo, se quiserem.

Talvez estejam se perguntando a diferença entre uma Web API e um Context API. Para entendermos, precisamos partir da definição de API, que é uma Interface de Programação de Aplicações.

Ela é um conjunto de definições e protocolos para criar e integrar softwares. Então a Web API é uma interface que integra diferentes sistemas. No nosso caso, integrava um aplicativo no celular e um servidor, que é um computador que armazena as informações. Eles são aplicações diferentes que se comunicam através da Web API.

Já o Context API conecta diferentes componentes do mesmo aplicativo. Então ele permite a comunicação de um componente com outro, mas tudo internamente. Se pegarmos um celular, não temos acesso a informações de outro celular.

Sendo assim, com a Web API, conseguimos colocar uma informação em um dispositivo, enivar para o servidor e acessar essa aplicação de outro dispositivo. Já com o Context API, as informações só estão disponíveis dentro do próprio aplicativo, onde os componentes interagem uns com os outros, trocando informações entre eles.

Vamos implementar isso no nosso projeto!

@@05
Sobre Context API
PRÓXIMA ATIVIDADE

Muitas aplicações tomam uma proporção tão grande que acessar dados de uma tela em outra tela, ou até mesmo um componente, pode se tornar uma tarefa complexa e trabalhosa.
Por isso, nessa aula vimos que o Context API nos ajuda em situações como essa, nos auxiliando a facilitar essa tarefa. Considerando o conteúdo abordado, marque a alternativa verdadeira:

O Context API é a única maneira que existe de acessar os estados de forma global.
 
Alternativa correta
O React Context API é um gerenciador de estado global. Com ele, é possível acessar variáveis e funções nas mais diversas telas e componentes da nossa aplicação.
 
Muito bom! O Context API deixa globalmente visíveis as variáveis, permitindo acessá-las em telas definidas, nos ajudando a lidar melhor com aplicações maiores e facilitando o processo de desenvolvimento do projeto.
Alternativa correta
O Context API é a mesma coisa que uma Web API. A grande diferença é que a Web API funciona online e, o Context API, não.
 
Alternativa correta
O Context API não tem muita aplicação no dia a dia, portanto, seu uso não é obrigatório nas aplicações, sendo muito mais tranquilo acessar as informações via props.

@@06
Para saber mais: Context API vs Redux
PRÓXIMA ATIVIDADE

O Context API é uma forma de organizar a construção de um projeto, lidando melhor com aplicações maiores. Contudo, como já mencionamos, ele não é o único que pode nos auxiliar nisso, pois existem outras soluções como o Redux.
Se você quiser saber mais sobre o Redux e suas diferenças em relação ao Context API, dá uma conferida nesse nosso artigo!

https://www.alura.com.br/artigos/estados-globais-diferencas-redux-context-api?utm_source=gnarus&utm_medium=timeline&_gl=1*13kp0jb*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwNDY2MzY2NC4xNTYuMS4xNzA0NjY0ODI3LjAuMC4w*_fplc*cGE0WEtnZ0toWXNXSSUyRlRrcVN0WjRGaiUyQndQZk12aHdudGxkWmMxU25GMEhmUVlnUUswTzZ6WDBIY3UyViUyQnBUcjZoTnJlWSUyQmtxWTdKblZyc2FRQ0pDSXZmZkhYUVBaaDNKcUE1Y3RIWkwwNXd0cFpvMFBzZm5mbEl0Z1VpMEElM0QlM0Q.

@@07
Aplicando o Context API

Já vimos nosso projeto base e a teoria por trás do Context API. Agora vamos implementá-lo.
Como vimos, o Context é nativo do React, então não precisaremos baixar ou instalar uma biblioteca externa no projeto. Para manter uma boa prática de programação, criaremos uma pasta dentro da "src" chamada "contexts". Essa pasta conterá todos os Context APIs que quisermos criar na aplicação.

Poderíamos fazer tudo em um arquivo só, mas é uma boa prática de programação isolar as características de uma determinada função ou comportamento. Por exemplo, teremos um Context API específico para o tema, outro para os nossos produtos e assim por diante.

Como só queremos testar, criaremos um arquivo chamado "GlobalContext.js" dentro da pasta "contexts". Como eu disse, o Context já é do React, então vamos importá-lo para o nosso arquivo recém-criado, a partir de uma função chamada createContext. Em seguida, criaremos uma variável onde usaremos essa função.

import { createContext } from 'react'

const GlobalContext = createContext()COPIAR CÓDIGO
Já poderíamos inicializar a createContext() com alguma coisa, inclusive recebemos uma sugestão se clicamos nos parâmetros da função, mas colocaremos vazio, ou seja, createContext({}). Poderíamos escrever algo dentro, como uma variável, mas por enquanto será um context vazio.

Precisamos deixar essa função disponível para usar em outras telas, então vamos exportá-la, com export const GlobalContext. Também precisamos criar uma função que será responsável por enviar os dados que queremos compartilhar nas telas ou componentes. Chamamos esse tipo de função de Provider. Então criaremos a função InfoProvider, já fazendo sua exportação.

import { createContext } from 'react'

const GlobalContext = createContext({})

export function InfoProvider() {

}COPIAR CÓDIGO
Dentro dessa função, retornaremos nosso Provider, que terá as variáveis ou funções que queremos deixar disponível globalmente na nossa aplicação. Para isso usamos o return (). Dentro do return() adicionamos o GlobalContext que criamos, acessando o Provider dele, com .Provider.

import { createContext } from 'react'

export const GlobalContext = createContext({})

export function InfoProvider() {
    return (
        <GlobalContext.Provider>

        </GlobalContext.Provider>
    )
}COPIAR CÓDIGO
Agora tudo que estiver dentro do <GlobalContext.Provider> terá acesso às variáveis que criarmos dentro da InfoProvider. Vamos testar isso. Dentro da função, criaremos a variável const valor = 150;.

Queremos acessar essa variável em todas as telas ou componentes. Para isso, dentro do .Provider temos uma propriedade chamada value, que deixará a variável disponível globalmente. Passaremos o valor para o value como objeto, assim essa variável ficará disponível para todos os componentes.

export function InfoProvider() {
    const valor = 150;

    return (
        <GlobalContext.Provider value={{
            valor
        }}>

        </GlobalContext.Provider>
    )
}COPIAR CÓDIGO
Contudo, temos que englobar as telas, ou seja, precisamos colocar o .Provider por volta de todas as telas. Lembram da hierarquia? Temos o nó principal que terá dois filhos. Esses filhos terão outros filhos e assim por diante. Então temos que deixar o Context passando desde o primeiro nó até o último.

Para isso, vamos colocar um {children}, ou seja, um filho, nos parâmetros da InfoProvider. Vamos importá-lo e vocês logo entenderão o porquê. Em seguida vamos passá-lo dentro do <GlobalContext.Provider>.

export function InfoProvider( {children} ) {
    const valor = 150;

    return (
        <GlobalContext.Provider value={{
            valor
        }}>
            {children}
        </GlobalContext.Provider>
    )
}COPIAR CÓDIGO
Se colocarmos o GlobalContext por volta de algum componente, ele terá acesso ao nosso Provider. Para fazer isso, garantindo que todas as telas terão acesso a esse valor do Provider, importaremos diretamente no "App.js".

Colocaremos em volta das <Rotas />, já que elas contêm todas as telas e as telas contêm todos os componentes. Então primeiro importaremos a InfoProvider para o "App.js" e, em seguida, colocaremos ele em volta das <Rotas />.

import Rotas from "./src/rotas";
import { InfoProvider } from "./src/contexts/GlobalContext";

export default function App() {
    return (
        <InfoProvider>
            <Rotas />
        </InfoProvider>
    )
}COPIAR CÓDIGO
Agora todas as telas e componentes têm acesso à nossa variável. Vamos testar se está funcionando. Na coluna da esquerda, acessaremos "src > telas > Login > index". No começo do código, ao invés de "Login", vamos colocar esse valor.

Para isso, vamos importar o useContext do React. Esse useContext é um hook do React com o qual poderemos acessar a variável valor, que criamos.

Então, dentro da function Login, teremos esse valor, que será armazenado dentro de uma const e acessado via useContext. Para isso escrevemos const { valor } = useContext(). Agora precisamos passar o Context API que criamos, ou seja, o arquivo "GlobalContext". Iremos importá-lo escrevendo useContext(GlobalContext).

//Trecho de código suprimido

import { useContext } from "react";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { valor } = useContext(GlobalContext)

//Trecho de código suprimidoCOPIAR CÓDIGO
Com esse código, o GlobalContext é automaticamente importado da pasta "contexts". Então vamos pegar o valor e atribuí-lo ao Login.

//Trecho de código suprimido

import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { valor } = useContext(GlobalContext)

    return (
        <View style={estilos.container}>
            <StatusBar />
            <Text style={estilo.titulo}>Login = {valor}</Text>

//Trecho de código suprimidoCOPIAR CÓDIGO
Ao salvarmos, na tela de Login do nosso aplicativo aparece "Login = 150" antes dos campos de e-mail e senha. Portanto ele pegou o valor do nosso Context e exibiu na tela de Login. Se voltarmos ao arquivo "GlobalContext" e alterarmos para const valor = 200;", ao salvarmos, o título na tela do aplicativo muda para "Login = 200".

Também conseguimos importar esse valor para tela principal. Então, no aplicativo, vamos apertar o botão "Entrar", na tela de Login, para sermos direcionados para tela principal. Já no código, vamos copiar a linha em que criamos a const {valor}.

Vamos acessar "src > telas > Principal > index" e vamos colar a const { valor } dentro da function Principal, lembrando de importar o useContext e o GlobalContext. Em seguida, vamos adicionar o valor no lugar do "NOME".

//Trecho de código suprimido

import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Principal({ navigation }) {
    const [ultimosVistos] = []

    const { valor } = useContext(GlobalContext)

    return (
        <View style={estilos.container}>
            <StatusBar />
            <Text style={estilo.tituloArea}>
            <Text style={estilo.titulo}Olá, {valor}</Text>

//Trecho de código suprimidoCOPIAR CÓDIGO
Ao salvarmos o código, vemos no aplicativo que, no canto superior esquerdo, aparece "Olá, 200". Não faz sentido, mas conseguimos importar o valor.

Vamos criar outra variável no nosso "GlobalContext" para vocês entenderem ainda melhor. Usaremos o useState() nesse arquivo, criando a const [nome, setNome] = useState(). Para isso, precisamos importar o useState para o "GlobalContext".

Além disso, vamos colocar ("Andre") como valor default do useState(), assim a variável nome agora recebe "Andre". Depois passaremos essa variável para o .Provider, para acessarmos de qualquer tela.

import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export function InfoProvider( {children} ) {
    const valor = 150;
    const [nome, setNome] = useState("Andre")

    return (
        <GlobalContext.Provider value={{
            valor,
            nome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

}COPIAR CÓDIGO
Agora, na tela de Login, além de importarmos o valor, importaremos o nome. Então, no "index.js" do Login, escrevemos const { valor, nome } = useContext(GlobalContext).

Em seguida, no <Text Input />, substituiremos o {email} por {nome} em value={nome}. Com isso, na tela de Login do nosso aplicativo, aparece "Andre" no campo de e-mail. Da mesma forma, podemos importar essa variável para outras telas.

Para conseguirmos alterar o valor do nome no "index.js", voltaremos para o arquivo "GlobalContext" e passaremos o setNome para o .Provider. Assim vocês perceberão que também é possível passar funções para o Context. Ao escrevermos o setNome, ela fica verde, indicando que se trata de uma função.

//Trecho de código suprimido

    return (
        <GlobalContext.Provider value={{
            valor,
            nome,
            setNome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}COPIAR CÓDIGO
Voltando para o "index.js" do Login, vamos importar o setNome, ou seja, na const { valor, nome, setNome} = useContext(GlobalContext). Em seguida substituiremos o {setEmail} por {setNome} em onChangeText={setNome}.

Assim, se escrevermos "Andre 123" no campo e-mail do aplicativo, ele altera o nome. Para conferirmos se alteramos, vamos importar o nome na tela principal.

Então no "index.js" de "Principal", vamos escrever const { valor, nome } = useContext(GlobalContext). Além disso, ao invés de exibirmos Olá, {valor}, exibiremos Olá, {nome}.

//Trecho de código suprimido

import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Principal({ navigation }) {
    const [ultimosVistos] = []

    const { valor, nome } = useContext(GlobalContext)

    return (
        <View style={estilos.container}>
            <StatusBar />
            <Text style={estilo.tituloArea}>
            <Text style={estilo.titulo}Olá, {nome}</Text>

//Trecho de código suprimidoCOPIAR CÓDIGO
Ao pressionarmos "Entrar" na tela de Login do nosso aplicativo, somos direcionados para tela principal e, no canto superior esquerdo, aparece "Olá, Andre 123". Vamos voltar para tela de Login, apagar tudo do campo e-mail e escrever "Teste". Ao clicarmos novamente no botão "Entrar", aparece "Olá, Teste" na nossa tela principal.

Como observamos, importamos o GlobalContext e deixamos variáveis e funções globais, podendo ser acessadas de qualquer tela. Nos próximos vídeos usaremos esse conceito do Context API para alterar o tema do nosso aplicativo.

@@08
Faça como eu fiz: aplicando o Context API
PRÓXIMA ATIVIDADE

Nessa aula, fizemos a implementação do Context API em nosso projeto base. Vamos colocar isso em prática?
Nossa aplicação, por enquanto, possui poucas telas e passar informações - via props - de uma tela para a outra é uma tarefa relativamente simples!

Mas, à medida que vamos implementando funcionalidades, mais telas e componentes vão aparecendo. Logo, fica complexo e demorado acessar informações específicas de uma tela e manipulá-las via props.

Para facilitar o nosso lado de desenvolvedor e desenvolvedora, temos ferramentas como o Context API, que disponibiliza, de forma global, nossos estados na aplicação.

Logo, para que você possa testar isso no seu projeto, siga os passos abaixos:

Criar um arquivo chamado "contexts" dentro da pasta "src";
Criar um arquivo chamado "GlobalContext.js" dentro da pasta "contexts";
Seguir os passos do vídeo 4.1 para configurar o seu arquivo "GlobalContext.js";
Importar o Provider desse arquivo no "App.js";
Usar os estados globais na tela ou componente que desejar.
Dica: a implementação já foi vista nos vídeos anteriores e você é capaz de replicá-la.

Se tiver dúvidas ou precisar de ajuda, pergunte no fórum para oferecermos o suporte necessário!

Bons estudos ;)

O objetivo desta atividade é estimular você a colocar a mão na massa e praticar os conceitos e passo a passo vistos em vídeos, implementando o Context API.
Primeiro, nós criamos um arquivo para o Context API, chamado "GlobalContext.js" e deixamos ele globalmente visível por adicionando-o no App.js;
Em seguida, criamos alguns estados no Context e acessamos eles nas telas, sem precisar passar a informação via props.
A implementação do GlobalContext no projeto base se encontra nesse repositório do Github!

Qualquer dúvida ou curiosidade, comente com a gente no fórum!

https://github.com/alura-cursos/react-native-context-api/tree/a0fee1c241e3f483d80bba1a070c171c2392240e

@@09
O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula, aprendemos sobre:
O que é o Context API e sua função: vimos que ele guarda, centraliza e disponibiliza estados (variáveis e funções) globalmente na aplicação - o que é de grande importância quando lidamos com uma aplicação muito grande, com várias telas e componentes;
O porquê utilizar Context API: quando cresce a aplicação, é necessário centralizar informações e estados em um único lugar, portanto, o Context API economiza tempo e facilita a manutenção do projeto, além de agilizar a escrita do código;
Como passar informações via props pode deixar a aplicação mais confusa e dificulta a correção de bugs no futuro, logo, o Context API é essencial para solucionar esse problema.
Você finalizou a aula 1 e se ficou com alguma dúvida ou tem alguma curiosidade para compartilhar, dá uma passadinha lá no nosso fórum. Vamos adorar ver sua interação por lá.

Nos vemos na próxima aula!
