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

Nesta aula, aprendemos sobre:
O que é o Context API e sua função: vimos que ele guarda, centraliza e disponibiliza estados (variáveis e funções) globalmente na aplicação - o que é de grande importância quando lidamos com uma aplicação muito grande, com várias telas e componentes;
O porquê utilizar Context API: quando cresce a aplicação, é necessário centralizar informações e estados em um único lugar, portanto, o Context API economiza tempo e facilita a manutenção do projeto, além de agilizar a escrita do código;
Como passar informações via props pode deixar a aplicação mais confusa e dificulta a correção de bugs no futuro, logo, o Context API é essencial para solucionar esse problema.
Você finalizou a aula 1 e se ficou com alguma dúvida ou tem alguma curiosidade para compartilhar, dá uma passadinha lá no nosso fórum. Vamos adorar ver sua interação por lá.

Nos vemos na próxima aula!

#### 07/01/2023

@02-Configuração e alteração de tema

@@01
Projeto da aula anterior

Caso queira começar o curso a partir desta aula, você pode fazer o download do projeto, clicando aqui.

https://github.com/alura-cursos/react-native-context-api/tree/a0fee1c241e3f483d80bba1a070c171c2392240e

@@02
Configurando os temas do Context API

Acabamos de aplicar o Context no nosso projeto e vimos como acessar os estados em telas diferentes. Isso porque conseguimos deixar variáveis e funções globalmente disponíveis para acessá-las e as manipular em qualquer tela.
Porém, o Context pode ser aplicado nos mais diversos contextos, um deles é alterando o tema da nossa aplicação, que é o que faremos daqui a pouco. O tema da aplicação envolve mudar a cor, o layout e assim por diante. No nosso caso, mudaremos a cor do fundo, das letras, do input e do botão. Começaremos pelo setup de configuração do Context do tema.

Não vamos mais usar o "GlobalContext". Usamos ele apenas para exemplificar como funciona o useContext() e o Context API no nosso projeto. Criaremos um novo Context para o tema, clicando com o botão direito em "contexts", selecionando "Novo Arquivo". Nomearemos o arquivo como "TemaContext.js".

Todos os nossos Context API terão a mesma estrutura que criamos no "GlobalContext", então vamos copiá-la e colar no "TemaContext". A diferença é que mudaremos os nomes das variáveis para deixar mais intuitivo o que estamos tratando.

Ao invés de const GlobalContext, vamos mudar para const TemaContext. Com isso os demais comandos que eram GlobalContext também mudaram. Além disso, vamos alterar de InfoProvider para TemaProvider, onde proveremos os temas.

Não teremos as variáveis valor e nome, então podemos apagá-las. Contudo, teremos uma variável pela qual poderemos manipular as cores da nossa aplicação, mudando do tema escuro para o claro. Criaremos esta variável com o comando const [temaAtual, setTemaAtual] e usaremos o useState() nela.

Já iremos inicializá-la com uma string, então vamos escrever useState('escuro'), ou seja, quando a aplicação iniciar, o tema atual será no modo escuro. Porém poderemos alterar essa string para ('claro') e nossa aplicação ficará com outras cores, referentes ao tema claro.

Por fim, passaremos a variável e a função no nosso .Provider, para conseguirmos acessá-las, por exemplo, na tela de configuração.

import { createContext, useState } from 'react'

export const TemaContext = createContext({})

export function TemaProvider( {children} ) {
    const [temaAtual, setTemaAtual] = useState('escuro')

    return (
        <TemaContext.Provider>
            temaAtual,
            setTemaAtual
        </TemaContext.Provider>
    )
}COPIAR CÓDIGO
Lembrando que temos que colocar o TemaContext por volta da nossa aplicação. Portanto, acessaremos o "App.js", importaremos o TemaProvider e, ao invés de InfoProvider, usaremos TemaProvider. Até podemos tirar o import do GlobalProvider, porque não vamos usá-lo.

import Rotas from "./src/rotas";
import { TemaProvider } from "./src/contexts/TemaContext";

export default function App() {
    return (
        <TemaProvider>
            <Rotas />
        </TemaProvider>
    )
}COPIAR CÓDIGO
Ao fazermos essa alteração, vemos que a tela de Login do nosso aplicativo deixa de exibir os textos que passamos. Isso porque o Context API não está mais em volta da nossa aplicação, provendo aquelas variáveis do GlobalContext.

Então voltaremos ao "index.js" do "Login" para removermos as informações do GlobalContext. Sendo assim, apagaremos o = {valor} do Text, deixando apenas Login. Além disso, removeremos o código de importação do useContext, ou seja, a linha const {} = useContext(GlobalContext). Também apagaremos a importação do GlobalContext e, no TextInput, voltaremos o código para value={email} e onChangeText={setEmail}.

//Trecho de código suprimido

import { useContext } from "react";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={estilos.container}>
            <StatusBar />
            <Text style={estilo.titulo}>Login</Text>

//Trecho de código suprimido

                <TextInput
                    style={estilo.input}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    autoCapitalizer="none"
                    value={email}
                    onChangeText={setEmail}
                />

//Trecho de código suprimidoCOPIAR CÓDIGO
Por fim, acessaremos o "index.js" da "Principal", onde também importamos o GlobalContext. Apagaremos a const {} = useContext(GlobalContext) e, Text, voltaremos para Olá, NOME, removendo o {nome}. Por fim, apagaremos a importação do GlobalContext.

//Trecho de código suprimido

import { useContext } from 'react';

export default function Principal({ navigation }) {
    const [ultimosVistos] = []

    return (
        <View style={estilos.container}>
            <StatusBar />
            <Text style={estilo.tituloArea}>
            <Text style={estilo.titulo}Olá, NOME</Text>

//Trecho de código suprimidoCOPIAR CÓDIGO
Agora, para alterarmos o tema da aplicação, usaremos a tela de Configuração. Para isso, acessaremos "src > telas > Configuracao > index.js". Abrindo esse código, importaremos o Context de tema para conseguirmos alterar a variável, ou seja, import { useState, useContext } from 'react';.

Em seguida, criaremos uma const {} = useContext(), igual fizemos ao usar o GlobalContext. Passaremos o (TemaContext) como parâmetro, gerando a importação dele.

//Trecho de código suprimido

import { useState, useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';

export default function Configuracao({ navigation })
    const [estado, setEstado] = useState(true);

    const { temaAtual, setTemaAtual } = useContext(TemaContext)COPIAR CÓDIGO
O Switch do nosso código altera o estado, seja de true para false ou false para true. Então temos variável estado, que tem o estado true. Se clicarmos no switch, na tela de configuração do aplicativo, o estado passa a valer false.

Porém não usaremos o switch agora, e sim o temaAtual para alterar de escuro para claro. Para isso, faremos um if dentro do value={}. Se o tema atual for 'escuro', colocaremos true, senão, será false.

//Trecho de código suprimido
<Switch
    onValueChange={() => setEstado(!estado)}
    value={temaAtual === 'escuro' ? true : false}
/>COPIAR CÓDIGO
Essa estrutura pode ser novidade, mas é um if ternário, e funciona da mesma forma de um if/else. Se fizéssemos do um if/else da forma mais comum, teríamos if(temaAtual === 'escuro'){}, e nas chaves teria uma ação, senão, else{}, com uma ação diferente nessas chaves.

No if ternário é a mesma coisa. Então temaAtual === 'escuro' ? significa "se o tema atual for 'escuro'", com a <?> indicando a pergunta, ou seja, o if. Nesse caso, será true. O else, que é o "senão", é representado por <:>. Portanto, se não for 'escuro', é igual a false. Dessa forma, configuramos o value para true ou false.

Agora teremos que alterar o estado de 'escuro' para 'claro' no onValueChange, ou seja, quando mudar a chave. Para fazermos isso, usaremos outro if ternário. Vamos até quebrar a linha para melhorar a visualização.

//Trecho de código suprimido
<Switch
    onValueChange={() =>
        temaAtual === 'escuro' ?
        setTemaAtual('claro') :
        setTemaAtual('escuro')
    }
    value={temaAtual === 'escuro' ? true : false}
/>COPIAR CÓDIGO
Portanto, quando a chave mudar, se a variável temaAtual for escuro, vamos alterar para 'claro', caso contrário, o tema estará claro e mudaremos para 'escuro'. Salvamos e, para testarmos se está funcionando, ao invés de escrevermos Tema: {'escuro'}, de forma estática, colocaremos a variável temaAtual, ou seja, Text style={estilo.subtitulo}>Tema: {temaAtual}</Text>.

Com a tela "Configurações" aberta na nossa aplicação, acima do switch está escrito "Tema: escuro". Quando clicamos no switch, o texto muda para "Tema: claro". Ao clicarmos novamente, volta para "Tema: escuro". Nosso tema não está sendo alterado de fato, estamos apenas configurando o ambiente do nosso Context de tema. A parte de alterar o tema ficará para outro vídeo.

Para finalizar, faremos mais uma configuração. Acessando o arquivo "estilosGlobais.js", percebemos que temos o objeto tema com algumas cores. Precisamos de duas cores diferentes: uma para o tema escuro e outra para o tema claro.

Então vamos copiar o tema e colar duas vezes seguidas para criarmos essas versões. Na primeira cópia, ao invés de tema, escreveremos const escuro ={}, para representar o tema escuro. Na outra cópia escreveremos const claro = {}, para representar o tema claro.

Como o tema já tem uma configuração escura, não iremos alterar as cores do tema escuro. Já no tema claro, alteraremos os hexadecimais para outras cores.

const claro = {
    fundo: '#FFFFFF',
    titulo: '#051933',
    texto: '#000000',
    branco: '#000000',
    preto: '#FFFFFF',
    cinza: '#EBEBEB',
    ultimosVistos: '#CCEFFF',
    botao: '#2A663C'
    input: '#0P2A52'
}COPIAR CÓDIGO
Além disso, precisamos exportar esses dois objetos, então, após os temas, escrevermos export { tema, escuro, claro }. Vamos salvar e, em seguida, iremos para o "TemaContext.js". Agora vamos importar esses temas para o nosso Context com import { escuro, claro } from '../estilosGlobais'.

No próximo vídeo pegaremos esses dois objetos que criamos e faremos uma lógica para alterar o tema do nosso app por completo. Nos vemos lá!

@@03
Para saber mais: a origem das coresw

Vimos, na configuração do tema do app, que foi copiado e colado um trecho de código que já continha as cores do projeto. Você pode se perguntar: “mas de onde saiu isso? O Professor meteu essa do nada?”
Na verdade, isso é bem comum no dia a dia de trabalho de uma pessoa desenvolvedora. Muitos projetos no dia a dia são feitos a partir de um mockup criado por um designer, que vai enviar um modelo e cores prontas para você implementar. O projeto que usamos nesse curso não foi diferente; é tarefa do designer pensar nas melhores cores que se encaixam em cada parte dos componentes e telas do aplicativo - e a tarefa do dev é implementar o protótipo criado pelo designer.

Assim, usamos um arquivo chamado estilosGlobais.js que contém exatamente as paletas de cores que estavam no mockup do projeto, são elas:

  fundo: '#051933',
  titulo: '#FFFFFF',
  texto: '#FFFFFF',
  branco: '#FFFFFF',
  preto: '#000000',
  cinza: '#093245',
  ultimosVistos: '#093245',
  botao: '#A3FEBF',
  input: '#FFFFFF',COPIAR CÓDIGO
Cada cor foi nomeada para se adequar melhor em cada componente ou parte da tela. A criação desse arquivo global de estilos facilita na alteração de uma determinada cor no aplicativo.

Por exemplo, imagine que o designer decidiu mudar a cor do botão de "azul" para "verde": se tivesse escrito o hexadecimal da cor do botão em cada tela que ele aparece, você precisaria ir em cada tela para alterar essa informação, o que pode ser demorado e maçante.

Já da forma como veio no projeto base, usando o estilosGlobais.js, basta alterar o hexadecimal apenas nesse arquivo que a mudança será refletida em todas as telas automaticamente. Muito mais fácil e rápido, concorda?

@@04
Alterando o tema do Appw

Já configuramos nosso ambiente para alterar o tema, mas ainda não estamos alterando. Vamos fazer isso.
No nosso "TemaContext", criamos a variável temaAtual, que terá escuro ou claro, e importamos dois objetos, o escuro e o claro. Quando clicamos em algum dos objetos, aparece uma janela flutuante na parte inferior mostrando as propriedades e tipos de cada um, como fundo: string. Essas strings são os hexadecimais para alterar o tema da aplicação.

O que precisamos fazer agora é implementar uma lógica para que ele ofereça ou o objeto escuro, ou o claro, para as páginas pegarem esse objeto e alterarem o tema. Existem duas formas de fazer isso.

Uma delas é fazer um if normal que verifica a string do tema atual e retorna o objeto correspondente. Então se for 'claro', ele retorna o objeto claro, se for 'escuro', ele retorna o objeto escuro.

Contudo, imaginemos uma situação em quem o aplicativo tenha vários temas, como "carnaval" e "copa do mundo", com cores referentes a esses temas. Uma forma de fazer com que a pessoa escolha entre vários temas é criando um dicionário.

Quando usamos um dicionário, procuramos uma palavra e, ao encontrarmos, temos vária descrições para ela. Também conseguimos fazer um dicionário em JavaScript, que funcionará da seguinte forma: criaremos uma variável chamada const temas que será o dicionário, ou seja, um objeto contendo os temas.

Nesse objeto, escreveremos o nome do tema como string e atribuiremos o objeto do tema em questão a ele.

const temas = {
    'escuro': escuro,
    'claro': claroCOPIAR CÓDIGO
Dessa forma, se procurarmos a string 'escuro' no dicionário, ele encontrará e retornará o objeto escuro, que terá todas as strings contidas nele. Para fazermos isso, retornaremos o objeto que queremos passar no TemaContext.Provider.

Então escreveremos temaEscolhido: temas[temaAtual]. Na prática, criamos a variável temaEscolhido que irá procurar no nosso dicionário temas a palavra que estiver em temaAtual.

return (
    <TemaContext.Provide value={{
        temaAtual,
        setTemaAtual,
        temaEscolhido: temas[temaAtual]
    }}>COPIAR CÓDIGO
Então, como temos useState('escuro'), ele irá procurar 'escuro' no nosso dicionário e retornará o objeto escuro, ou seja, o tema escolhido terá o objeto escuro. Se a palavra for "claro", ele procurará no dicionário a string 'claro', retornará o objeto claro e o colocará no temaEscolhido.

Agora acessaremos o "telas > Configuracao > index.js" e importaremos o temaEscolhido também.

//Trecho de código suprimido

export default function Configuracao({ navigation })
    const [estado, setEstado] = useState(true);

    const { temaAtual, setTemaAtual, temaEscolhido } = useContext(TemaContext)COPIAR CÓDIGO
Uma coisa que é importante falar é que, qualquer coisa que importamos do useContext, não conseguiremos importar diretamente para os "estilos.js". Isso porque a const estilo é um objeto, e só conseguimos importar o Context API para componentes que são funções.

Então teremos que, de alguma forma, passar a importação que fizemos no "index.js" para o "estilos.js". Assim conseguiremos alterar o tema, que vem de "estilosGlobais", para claro ou escuro.

Para fazer isso, vamos transformar o objeto estilo na função estilos para receber o parâmetro (tema). Então, antes do StyleSheet, vamos escrever () => { return. Por fim, fechamos a chave após o código.

Agora que estilos é uma função, podemos passar a variável tema para os parâmetros, ou seja, export const estilos = (tema) => {. Esse tema que irá alterar o tema da nossa aplicação. Com isso, podemos até apagar a importação do "estilosGlobais", ou seja, o import { tema } from '../../estilosGlobais';.

import { StyleSheet } from 'react-native';

export const estilos = () => {
    return StyleSheet.create({

        //Trecho de código suprimido

}COPIAR CÓDIGO
Se abrirmos a tela de configuração do nosso aplicativo no emulador, perceberemos que ele não encontrará nada, porque o tema está vazio, o que significa que ele está buscando algo que ainda não existe. Então voltaremos para o "index.js" dessa tela e faremos algumas alterações.

Primeiramente mudaremos o import de estilo para import { estilos } from /.estilos';. Depois, na function Configuracao, acima do return(), criaremos uma variável const estilo = estilos(temaEscolhido), ou seja, uma variável que recebe as informações do tema escolhido.

//Trecho de código suprimido

import { estilos } from './estilos';
import { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext';

export default function Configuracao({ navigation })
    const [estado, setEstado] = useState(true);

    const { temaAtual, setTemaAtual, temaEscolhido } = useContext(TemaContext)

    const estilo = estilos(temaEscolhido)

    return (
        //Trecho de código suprimidoCOPIAR CÓDIGO
Agora, se entrarmos na tela de configuração na aplicação, percebemos que não dá nenhum erro e, acima do switch, está escrito "Tema: escuro". Ao clicarmos no switch, as cores do sistema mudam, assim como o texto, que passa para "Tema: claro". Portanto, conseguimos ativar tanto o modo escuro como o modo claro.

Porém, ao sairmos da tela de configuração, percebemos que o tema das outras telas não foi alterado. Sendo assim, precisaremos repetir o processo que fizemos em "Configuracao" nas outra telas. Antes disso, no "index.js", apagaremos a const [estado, setEstado] = useState(true), porque não estamos mais utilizando.

Em seguida, acessaremos o "telas > Login > estilos.js" e faremos as mesmas alterações do "estilos.js" de "Configuracao". Isso significa que mudaremos o nome para estilos e transformaremos em uma função com export const estilos (tema) => { return StyleSheet.create({//...}. Depois apagaremos a importação do "estilosGlobais", que não é mais necessária.

No simulador, a aplicação irá quebrar, mas isso não tem problema. Acessaremos o "index.js" do "Login", importaremos o Context. Para isso, dentro da function Login, escrevemos const { temaEscolhido } = useContext(TemaContext).

Em seguida, confirmaremos se ocorreu o import { TemaContext } e mudaremos o import de estilo para import { estilos } from './estilos';. Por fim, criaremos nossa variável const estilo = estilos(temaEscolhido).

//Trecho de código suprimido

import { estilos } from './estilos';
import { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext';

export default function Login({ navigation })
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { temaEscolhido } = useContext(TemaContext)
    const estilo = estilos(temaEscolhido)

    //Trecho de código suprimidoCOPIAR CÓDIGO
Ao salvarmos, notamos que, no emulador, a tela Login está no tema escuro. Vamos pressionar o botão de "Entrar", para sermos direcionados para página principal, e depois na engrenagem no lado superior direito, para acessarmos a tela de configuração.

Em "Configurações", notamos que está no "Tema: escuro", então vamos clicar no switch para ativarmos o "Tema: claro". Com isso, ao voltarmos para tela de Login, vemos que agora ela também mudou para tema claro.

Falta aplicarmos essa alteração na última tela. Podemos copiar as variáveis { temaEscolhido } e estilo para aplicar no "index.js" da "Principal". Vamos colar essas variáveis dentro da function Principal, antes do return().

export default function Principal({ navigation })
    const ultimosVistos = []

    const { temaEscolhido } = useContext(TemaContext)
    const estilo = estilos(temaEscolhido)

    //Trecho de código suprimidoCOPIAR CÓDIGO
Em seguida, iremos importar o { TemaContext } e alterar o import de estilo para import { estilos } from './estilos';.

import { estilos } from './estilos';
import { TemaContext } from "../../contexts/TemaContext';COPIAR CÓDIGO
Agora, no "estilos.js" do "Principal", vamos transformar o estilo em função com o mesmo código de antes, ou seja, export const estilos = (tema) => { return StyleSheet.create({//...}.

Após salvarmos o código, observamos que, na aplicação, o tema de todas as telas foi alterado para o claro. Acessando a tela de configuração e mudaremos novamente para o tema escuro. Com isso, toda aplicação muda para tema escuro. Ao voltarmos para o tema claro, todo o app fica no tema claro.

Essa é uma das formas para alterarmos o tema da nossa aplicação. Existem outras formas, inclusive bibliotecas externas que fazem isso, mas usamos o Context API para alterarmos o tema de forma global.

Então alteramos a string de claro e de escuro e isso mudou a escolha do objeto que estamos importando do "estilosGlobais". Assim conseguimos refletir isso em todas as telas sem precisar ficar passando a informação por props. Importamos de forma individual o Context API para cada tela.

No próximo vídeo, aplicaremos o Context API em outro contexto.

@@05
Mudança de temaw

Você, como um bom e curioso Dev, percebeu que, ao apertar o switch (botão) na tela de configuração, o tema do aplicativo não alterou de escuro para claro, mesmo aplicando o Context API na mudança de tema.
Isso aconteceu, porque, para aplicar a mudança do tema na aplicação, tivemos que fazer algumas mudanças nos nossos arquivos de estilos.js.

Considerando o que estudamos até agora, o que pode ser feito para resolver esse problema?

Importar o Context API do tema diretamente no arquivo de estilos.js e acessar a variável temaEscolhido. Dessa forma, é possível alterar as cores da tela da aplicação.
 
Alternativa correta
Fazer a importação do TemaContext nos arquivos index.js de cada tela e acessar os estados do tema em cada tela. Depois, é só substituir o "​​estilo" da tela pela variável temaEscolhido, que tudo funciona perfeitamente.
 
Alternativa correta
A importação do TemaProvider no arquivo App.js é a única alteração necessária para a mudança de tema na aplicação, não precisando alterar mais nenhum arquivo das telas ou componentes.
 
Alternativa correta
Fazer a importação do TemaContext nos arquivos index.js de cada tela e acessar os estados do tema, como o temaEscolhido, em cada tela. Em seguida, para passar essa variável para o arquivo de estilos.js, é necessário fazer uma mudança da exportação da variável estilo para uma função chamada estilos. Por se tratar de uma função, é possível enviar o temaEscolhido via parâmetro do arquivo index.js para o estilos.js e, com isso, a mudança do tema é aplicada em todas as telas.
 
Excelente, parabéns!

@@06
Faça como eu fizw

Realizamos a primeira aplicação real de um Context API: a funcionalidade de um botão que altera o tema (dark ou light mode) da aplicação.
Agora, é sua vez de seguir os passos e a lógica ensinada em vídeo e colocar isso em prática no projeto.

Vamos lá?

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@07
O que aprendemos?w

Nesta aula, vimos sobre:
Como criar um setup de configuração do Context API para modificarmos o tema da nossa aplicação, conseguindo mexer em cores e fontes de letras;
Como é possível acessar de forma global um objeto de cores vindo do Context API e passar esse objeto como parâmetro para os nossos arquivos de estilos, transformando nossos estilos em uma função. Isso tudo permitiu que nosso aplicativo mudasse todo o seu tema, do modo escuro para o claro.
Você finalizou mais uma aula do nosso curso. Muito bem!

Se ficou com alguma dúvida ou tem alguma curiosidade, não hesite e passe lá no nosso fórum para compartilhar com a gente.

Nos vemos na próxima aula!

#### 08/01/2024

@03-Autenticação com Context API

@@01
Projeto da aula anterior

Caso queira começar o curso a partir desta aula, você pode baixar o projeto da aula anterior, clicando aqui.

https://github.com/alura-cursos/react-native-context-api/tree/d04979003904f40c5b6a29cd48571877526f237b

@@02
Funcionamento da autenticação

Acabamos de implementar o Context API para mudança de tema do nosso aplicativo. Vejamos o que mais conseguimos fazer com ele.
Neste curso usaremos o Context API em três situações diferentes: na mudança do tema, na autenticação e para adicionar os itens no carrinho. A parte de temas já foi feita e a parte de adicionar os itens no carrinho será vista perto do final do curso. Nesta aula focaremos na implementação da autenticação do aplicativo.

No nosso contexto, a autenticação estará voltada para tela de Login. É a parte em que o usuário digita o e-mail dele a senha para entrar, de fato, no aplicativo.

A autenticação é implementada para fornecer uma segurança maior, tanto para as pessoas que estão fazendo a compra, quanto para nós que desenvolvemos o e-commerce. Não queremos que um usuário anônimo entre, compre em nome de outro usuário e não precise pagar nada.

Por isso temos a autenticação, para termos mais segurança no aplicativo. Ainda assim existem outros contextos em que podemos usar a autenticação, como para personalização. Iremos comentar esse ponto posteriormente.

Existem algumas formas que podemos implementar a segurança na autenticação no aplicativo. Algumas delas são: biometria facial, biometria digital, senha por desenho e senha numérica. No nosso contexto de e-commerce, a segurança será através do Login, que é o e-mail e a senha, que pode ser numérica ou uma string qualquer.

A autenticação também nos permite ter uma maior customização do aplicativo. Quando logamos no Instagram, aparecem postagens e stories referentes a pessoas que seguimos. Se outra pessoa loga no perfil dela, ainda que seja o mesmo aplicativo, aparecerão outras informações para ela. Isso está relacionado à customização.

Uma vez que a autentificação é feita através do Login do aplicativo, o app retorna as informações específicas para o usuário. No nosso caso, a customização estará relacionada aos "Últimos vistos", que são os produtos que a pessoa clicou e viu que tinha interesse. Eles ficarão na nossa lista ultimosVistos. Essa será uma customização para o usuário autenticado.

Para fazermos essa implementação, teremos a tela de Login com os campos de e-mail e senha para serem preenchidos. Deixaremos um e-mail e uma senha no código para compararmos com os que forem digitados no input do aplicativo. Se o e-mail e senha passados no app forem iguais aos do código, autorizaremos o login da pessoa.

Ao logar, deixaremos algumas informações do usuário diretamente no código, como o nome, telefone e a rua. Caso o usuário logado esteja correto, ou seja, se o e-mail e senha digitadas estiverem corretos, salvaremos essas informações em uma variável.

Vocês devem estar se perguntando como é feita uma implementação de autenticação em um aplicativo real. No caso, temos o aplicativo no celular que também terá uma tela de autenticação.

Quando a pessoa digitar o e-mail e a senha, ao invés da verificação ocorrer diretamente com os dados do código, essas informações serão passadas para um servidor, por meio de uma Web API. Então o servidor será o responsável por verificar se o usuário e senha digitados estão corretos. Caso estejam corretos, o servidor retornará, por meio de uma Web API, os dados criptografados.

Antes de explicar como isso acontece, vejamos primeiro um exemplo do que é uma criptografia. Temos uma string na tela com mais de 20 caracteres e cheia de números, símbolos e letras maiúsculas e minúsculas. A princípio parecem caracteres aleatórios, mas é uma mensagem criptografada.

Vamos entender porque fazemos criptografia. Imaginem-se logados em um WiFi público e aberto. Pensem que alguém consegue acessar esse WiFi e ter acesso às informações de quando vocês fizerem o Login no aplicativo do seu banco, por exemplo.

Essa pessoa terá acesso ao seu nome, e-mail, telefone entre várias outras informações. Para evitar isso, as informações são passadas para o aplicativo de forma criptografada.

A criptografia era muito utilizada em guerras. Imaginem um exército querendo se comunicar com a base para informar que atacarão o inimigo no dia seguinte, e o inimigo intecepta essa mensagem. Se ele acessa a mensagem, ele conseguirá se proteger do ataque e até contra-atacar.

Para evitar isso, o exército mandava uma mensagem que parecia não fazer sentido, mas que a base entendia. Então ao invés de falar "vamos atacar o inimigo amanhã", eles falavam "hoje o dia está lindo". O inimigo pegaria essa mensagem e não entenderia nada. Contudo, a base saberá que se chegar a mensagem "hoje o dia está lindo", quer dizer que eles atacarão o inimigo amanhã.

Assim eles conseguiam se entender e se comunicar. Com o passar do tempo, a tecnologia e o poder computacional aumentaram, e conseguimos transformar a mensagem "vamos atacar o inimigo amanhã" nessa string cheia de caracteres, que chamamos de hash.

Para descriptografar, precisamos de uma chave de acesso, ou seja, um código, que pode ser um número ou uma string. Com esse código, podemos usar uma função que pega a mensagem criptografada, mistura com a chave de acesso e traduz. Acreditem ou não, a criptografia exibida na tela significa "Hello World".

Dessa forma, os atualmente as informações do usuário são passadas criptografadas e o aplicativo descriptografa e exibe como endereço, telefone, e-mail, entre outros. Isso fornece uma maior segurança para o aplicativo e para as pessoas, uma vez que são dados sensíveis para serem exibidos em qualquer lugar.

É importante salientar que, neste curso, não iremos implementar a criptografia. A explicação foi para entenderem como a autenticação acontece na prática, seja da forma que eu expliquei ou de outra forma.

Contudo, neste curso faremos a autenticação apenas com o e-mail e senha, que já estarão completamente ditados no código. Então não implementaremos a segurança de criptografia.

Em seguida faremos a implementação da autenticação.

@@03
Para saber mais: tipos de autenticação

A autenticação é de suma importância para garantir a segurança da nossa aplicação. Por isso, caso tenha curiosidade em saber mais sobre autenticação e os tipos que são usados atualmente, dê uma conferida neste artigo da nossa plataforma! Tenho certeza que será muito útil.
Bons estudos!

https://www.alura.com.br/artigos/tipos-de-autenticacao?_gl=1*peynzo*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwNDc1MzIwMS4xNTcuMS4xNzA0NzUzODA5LjAuMC4w*_fplc*dW1nRmczQUYwa3N6VjRIN1lueU1Yb01qTTIwWDgxZjZPeHdUcFh1Q3lUNmFiSTRHWFl6VVFPNG1nMW1TSnozc09xN3g4cWZ6NmdhdyUyQms4R1FUVFVDSFJNdTEwVjdJZk9VQlRsY0dQWXoyUyUyRnA2ZWlLZWdvb3I0T2hQdkdqUSUzRCUzRA..

@@04
Revisando autenticação

Quando trabalhamos com aplicativos que envolvem pagamento e dados dos usuários (CPF, cartão de crédito etc), o uso da autenticação se faz bastante necessário, já que não queremos que as pessoas tenham suas informações roubadas de um App que fizemos, não é mesmo?
Com base no que foi abordado na videoaula, o que podemos afirmar sobre a autenticação de um aplicativo?

No dia a dia, uma aplicação voltada a garantir a segurança de seus usuários utiliza uma autenticação com login (email e senha) e os dados do usuário, como o nome, email e telefone, são retornados diretamente para o aplicativo de forma criptografada, assim, só o código interno do App decifra os dados retornados do usuário.
 
Excelente, parabéns!
Alternativa correta
A criptografia foi uma ideia criada para o contexto das guerras, garantindo que as mensagens enviadas não fossem capturadas pelo exército inimigo. Atualmente esse método ainda é utilizado, mas em menor proporção, e está quase em desuso. Os Apps, por exemplo, garantem muita segurança sem precisar usar criptografia.
 
Alternativa correta
É fortemente recomendado que toda aplicação tenha autenticação, visto que garante maior segurança para o seu App e protege os dados do usuário.
 
Alternativa correta
No dia a dia, uma aplicação voltada a garantir a segurança de seus usuários utiliza uma autenticação com login (email e senha) e os dados do usuário, como o nome, email e telefone são retornados diretamente para o aplicativo em formatos de string.
 
Alternativa correta
Existem várias formas de autenticar uma aplicação. Uma delas é usar o email e senha, e também podemos implementar reconhecimento facial ou biométrico.
 
Perfeito. A maneira de autenticação mais comum solicita email e senha, mas atualmente vários Apps já permitem que o usuário se autentique simplesmente usando sua biometria.

@@05
Tela de autenticação

Agora que entendemos melhor como funciona a autenticação, iremos implementá-la usando o Context API.
Da mesma forma que fizemos para mudança de tema, criaremos um Context voltado para autenticação, então acessaremos "src > contexts" e criaremos um novo arquivo chamado "AutenticacaoContext.js". A estrutura desse arquivo será similar a que fizemos no "TemaContext" e no "GlobalContext".

Sendo assim, vamos copiar o código do "GlobalContext", colar no "AutenticacaoContext" e fazer as alterações necessárias, para ficar voltado para autenticação. Então onde estiver escrito GlobalContext mudaremos para AutenticacaoContext e onde está InfoProvider será AutenticacaoProvider.

Além disso, não usaremos as variáveis do "GlobalContext" para a autenticação, então podemos apagá-las. Também apagaremos o conteúdo que estiver em value={}.

import { createContext, useState } from 'react'

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider( {children} ) {

    return (
        <AutenticacaoContext.Provider value={{

        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}COPIAR CÓDIGO
Precisaremos de duas coisas na autenticação: uma função para logar no sistema e uma variável para salvar as informações do usuário, como nome, e-mail e telefone. Para isso, vamos criar uma const [usuario, setUsuario] que receberá o useState(). Inicialmente ele será um objeto vazio, porque ainda não teremos informações do usuário, ou seja, const [usuario, setUsuario] = useState({}).

Em seguida, criaremos a função para logar, então vamos escrever a function login(). Dentro dessa função, passaremos duas informações como parâmetro, para verificarmos se estão corretas, no caso, o email e a senha, que são os dois inputs da tela de login.

Dentro da função, faremos uma verificação simples usando o if/else. No if, usaremos um e-mail fictício, eu vou usar `'andre@email.com', e uma senha. Portanto,if(email == 'andre@email.com' && senha == 123){}. Nesse caso, retornaremos a string'ok'. Caso o e-mail e a senha não sejam válidos, faremos umelseonde retornaremos'E-mail ou senha incorretos'`.

//Trecho de código suprimido

export function AutenticacaoProvider( {children} ) {
    const [usuario, setUsuario] = useState({})

    function login(email, senha){
        if(email == 'andre@email.com'
        && senha == 123){
            return 'ok'
        }
        else {
            return 'E-mail ou senha incorretos';
        }
    }

//Trecho de código suprimidoCOPIAR CÓDIGO
Antes dele retornar o 'ok', ele pode salvar as informações do usuário. Como estamos fazendo um login fictício, apenas para testarmos a autenticação na tela de Login, também criaremos dados fictícios para o usuário que estamos logando.

Salvaremos as informações do usuário com setUsuario(), que escreveremos dentro do if. Essas informações serão: nome, email, endereco e telefone. Nesse caso, usarei dados fictícios. Além disso, usaremos o mesmo e-mail do login, então podemos declarar como email: email, passando o dado que recebemos nos parâmetros do if().

    function login(email, senha){
        if(email == 'andre@email.com'
        && senha == 123){
            setUsuario({
                nome: 'André',
                email: email,
                endereco: 'Av. Paulista',
                telefone: '(11) 99999-9999'
            return 'ok'
        }
        else {
            return 'E-mail ou senha incorretos';
        }
    }COPIAR CÓDIGO
Agora, ao fazermos o login, salvamos esses dados na variável usuario. Deixaremos esses dados disponíveis globalmente usando o Context, para conseguirmos acessar nas outras telas.

Sendo assim, no Autenticacao.Provider value={{}}, passaremos o usuario. Além disso, passaremos também a função login, assim podermos usá-la na tela de Login.

//Trecho de código suprimido

return (
    <AutenticacaoContext.Provider value={{
        usuario,
        login
    }}>
        {children}
    </AutenticacaoContext.Provider>
)COPIAR CÓDIGO
Agora precisamos usar a AutenticacaoContext globalmente na nossa aplicação. Para isso, na coluna da esquerda, vamos acessar o "App.js" e, da mesma forma que fizemos com o TemaProvider, faremos com o AutenticacaoProvider.

Começaremos importando o { AutenticacaoProvider }. Em seguida, antes das <Rotas />, mas dentro do <TemaProvider>, colocaremos nosso <AutenticacaoProvider>. Vocês também podem deixar a autenticação por volta de tudo, mas eu prefiro envolver tudo com o tema. Com isso conseguiremos acessar o AutenticacaoProvider em qualquer tela.

import Rotas from "./src/rotas";
import { TemaProvider } from "./src/contexts/TemaContext";
import { AutenticacaoProvider }  from "./src/contexts/TemaContext";

export default function App() {
    return (
        <TemaProvider>
            <AutenticacaoProvider>
                <Rotas />
            </AutenticacaoProvider>
        </TemaProvider>
    );
}COPIAR CÓDIGO
A primeira tela na qual usaremos o AutenticacaoContext é a de Login. para conseguirmos fazer o login. Então acessaremos "src > telas > Login > index.js" e importaremos o Context de autenticação, assim como fizemos com o Context de Tema.

Portanto, dentro da function Login vamos criar uma const { login }, para chamar a função login(), e passar o useContext(AutenticacaoContext). Em seguida será feito o import do { AutenticacaoContext}, na linha 6.

//Trecho de código suprimido

import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { temaEscolhido } = useContext(TemaEscolhido)
    const estilo = estilos(temaEscolhido)

    const { login } = useContext(AutenticacaoContext)COPIAR CÓDIGO
Agora temos acesso à função login(). A partir disso, criaremos uma função dentro deste arquivo da página de Login, que será a function logandoNoSistema(){}. Dentro dessa função, usaremos a login().

Como a função login() retorna uma string 'ok' ou 'Email ou senha incorretos', podemos salvar isso em uma variável. Então escrevemos const resultado = login() e passaremos (email, senha) como parâmetro'.

//Trecho de código suprimido

function logandoNoSistema(){
    const resultado = login(email, senha)
}COPIAR CÓDIGO
Em seguida, faremos um if/else. Se o resultado for 'ok', navegaremos para próxima tela. Caso seja não seja válido, vamos exibir uma informação, usando o Alert, que será importado do React Native. Então voltaremos aos nossos imports para importarmos o Alert.

import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';COPIAR CÓDIGO
Agora, dentro do else{}, colocaremos Alert.alert() e passaremos o (resultado), que será a mensagem 'Email ou senha incorretos'.

//Trecho de código suprimido

function logandoNoSistema(){
    const resultado = login(email, senha)
    if(resultado == 'ok'){

    }
    else {
        Alert.alert(resultado)
    }

}COPIAR CÓDIGO
Voltando para o if(), caso dê 'ok', navegaremos para outra tela. Atualmente a tela de Login já tem um botão Entrar que, ao ser clicado, usa o navigation.navigate para a tela Principal. O que faremos é retirar o navigation do onPress={}. No lugar, passaremos o logandoNoSistema().

//Trecho de código suprimido

<TouchableOpacity
    style={estilo.botao}
    onPress={() => logandoNoSistema()}
>COPIAR CÓDIGO
Em seguida, na logandoNoSistema(), faremos a navegação entre telas se o resultado for 'ok'.

//Trecho de código suprimido

function logandoNoSistema(){
    const resultado = login(email, senha)
    if(resultado == 'ok'){
        navigation.navigate('Principal')
    }
    else {
        Alert.alert(resultado)
    }

}COPIAR CÓDIGO
Vamos testar. Acessando a tela de Login no emulador, vamos digitar qualquer coisa nos campos de e-mail e senha e, em seguida, clicar no botão "Entrar". Com isso aparece uma caixa de mensagem no centro da tela do emulador escrito "Email ou senha incorretos". No canto inferior direito da caixa de mensagem tem um "OK", onde clicamos para fechar o alerta.

Agora digitaremos o e-mail e senha válidos, que foram os que passamos no nosso Context. Ao clicarmos em "Entrar", somos direcionados para nossa tela de produtos, que é a principal.

O que podemos melhorar nessa autenticação? Percebam que a senha está sendo exibida, mas normalmente ela é deixada oculta. Para fazermos isso, no TextInput /> da senha, vamos colocar secureTextEntry={}, porque é uma questão de segurança. Depois passaremos {true}.

Agora, no emulador, percebemos que tudo que escrevemos no campo da senha fica em formato de <•>, não exibindo a senha diretamente na tela. Quando digitamos a senha corretamente e clicamos em entrar, percebemos que ainda somos direcionados para tela de produtos.

Outra coisa que podemos fazer com o Context de autenticação é, no canto superior esquerdo da tela de produtos, exibir o nome do usuário onde está escrito "Olá, NOME". Para isso, na coluna da esquerda, acessamos "Principal > index.js".

Em seguida, importaremos o Context de autenticação. Então, dentro da function Principal, escreveremos const { usuario } = useContext(AutenticacaoContext). Com isso, estamos pegando o usuário do nosso Context de autenticação. Lembrem-se que é necessário que o { AutenticacaoContext } seja importado

//Trecho de código suprimido

import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";

export default function Principal({navigation}) {
    const ultimosVistos = []

    const { temaEscolhido } = useContext(TemaEscolhido)
    const estilo = estilos(temaEscolhido)

    const { usuario } = useContext(AutenticacaoContext)COPIAR CÓDIGO
Feito isso, onde está escrito Olá, NOME, vamos trocar por Olá, {usuario?.nome}. O <?> é para sabermos se o usuário não é vazio e o .nome é para acessarmos a propriedade que queremos, ou seja, o nome. Salvando, no emulador vemos que a saudação no lado superior esquerdo mudou para "Olá, André".

Nessa aula implementamos o Context API para autenticação. Fizemos o login na tela de Login e conseguimos acessar os dados do usuário logado também na tela de produtos.

Nas próximas aulas, aprenderemos a usar o Context API em outras situações.

@@06
Faça como eu fiz: implementando autenticação

Nesta aula, configuramos a nossa aplicação para aplicar a parte de autenticação, usando o Context API.
Bora colocar isso em prática?

Imagine que você quer oferecer uma experiência mais personalizada para o usuário do app, o que é possível criando um sistema de autenticação e que registra as informações do usuário.

Dessa forma, configure o ambiente do seu app e implemente a autenticação simples, utilizando login e senha. Para fazer isso, siga o passo a passo:

Crie o arquivo do Context API para Autenticação;
Deixe ele disponível globalmente no App.js;
Crie uma variável para salvar as informações do usuário logado;
Construa uma função responsável pelo login.
Caso tenha outra ideia e consiga realizar na autenticação, sinta-se à vontade para realizar. Faça o teste e veja se o app funciona e apresenta os comportamentos esperados.

Depois, poste do fórum o seu projeto, vamos adorar ver a evolução do seu trabalho. Precisando de ajuda ou tendo alguma dúvida, não deixe de nos perguntar no fórum para que possamos te ajudar!

Bons estudos ;)

A autenticação foi implementada no projeto usando o Context API.
Vamos ver uma forma possível de solucionar o exercício proposto?

Primeiro, nós criamos um arquivo para o Context API de autenticação e deixamos ele globalmente visível por adicionando-o no App.js;
Em seguida, criamos uma função de login que verificava se o email e senhas digitadas estavam corretas;
Depois, salvamos as informações do usuário logado para poder acessar futuramente em outras telas da aplicação.
Se quiser dar uma conferida na forma que foi implementada, dê uma olhadinha neste repositório do Github.

https://github.com/alura-cursos/react-native-context-api/tree/11428bbc625781235ceb42473f79aa633b49ecef

@@07
O que aprendemos?

Nesta aula, aprendemos sobre:
A importância de uma autenticação em um aplicativo e quando que ela é utilizada. Vimos que no dia a dia, as mensagens de autenticação vem criptografadas para garantir maior segurança dos dados do usuário que está logando no sistema;
A aplicação do Context API para simular uma autenticação com o login, usando email e senha e salvando os dados do usuário de forma global na aplicação para que conseguíssemos exibir esses dados (como o nome) nas mais diversas telas.
Agora, você já deve conseguir criar aplicações com uma autenticação simples. Muito bom, né?

Você chegou ao final de mais uma aula. Parabéns!

Não esqueça de visitar o nosso fórum. Lá você pode encontrar algumas questões levantadas por outros alunos, compartilhar algo e caso tenha ficado alguma dúvida, podemos te ajudar.

Nos vemos na próxima aula!

#### 09/01/2024

@04-Criando telas e salvando no carrinho

@@01
Projeto da aula anterior

Caso queira começar o curso a partir desta aula, você pode fazer o download do projeto, clicando aqui.

https://github.com/alura-cursos/react-native-context-api/tree/11428bbc625781235ceb42473f79aa633b49ecef

@@02
Adicionando itens ao carrinho

Até esse momento, aplicamos o Context API em duas situações diferente: a mudança do tema, de escuro para claro, e na autenticação, onde fizemos o login. Contudo, por ser um aplicativo de e-commerce, seria interessante colocarmos funcionalidades de e-commerce, ou seja, adicionar os itens no carrinho. Então vamos fazer isso.
Seguindo nosso padrão, acessaremos "src > context" e, nesta pasta, criaremos um novo arquivo de Context API, agora voltado para o carrinho. Então clicamos com o botão direito na pasta, selecionamos "Novo Arquivo" no menu flutuante e nomeamos como "ProdutosContext.js".

A estrutura nesse arquivo será semelhante aos outros Context que criamos, então podemos copiar a estrutura do "GlobalContext" e colar no "ProdutosContext". Em seguida, alteraremos as informações para corresponder ao novo Context.

Começaremos trocando de GlobalContext para ProdutosContext. Em seguida, o InfoProvider será substituído por ProdutosProvider. Apagaremos as variáveis e estados que foram criados, porque não vamos utilizá-los, e deixaremos o value={}, a princípio, vazio.

import { createContext, useState } from 'react';

export const ProdutosContext = createContext({})

export const ProdutosProvider( {children} )

    return (
        <ProdutosContext.Provider value={{

        }}>
            {children}
        </ProdutosContext.Provider>
    )
}COPIAR CÓDIGO
Agora colocaremos esse Context em volta das nossas rotas para termos acesso a ele em todas as telas. Então vamos em "App.js", importaremos o { ProdutosContext } e depois, antes das <Rotas /> colocaremos o <ProdutosProvider>. Agora teremos acesso às variáveis de forma global.

//Trecho de código suprimido

import { ProdutosProvider } from "./src/contexts/ProdutosContext";

export default function App() {
    return (
        <TemaProvider>
            <AutenticacaoProvider>
                <ProdutosProvider>
                    <Rotas />
                </ProdutosProvider>
            </AutenticacaoProvider>
        </TemaProvider>
    )COPIAR CÓDIGO
Feito isso, precisaremos colocar as funcionalidades do carrinho dentro do Context. Sendo assim, voltaremos para o "ProdutosContext".

No emulador, acessaremos para o tela de produtos, colocando o e-mail e senha corretos nos campos de login e pressionaremos o botão "Entrar". Percebam que, nos nossos cards de produtos, temos o botão de <+>, localizado na extrema direita.

O ideal seria que, ao clicar neste botão, o item fosse adicionado e salvo ao carrinho. Além disso, que o valor do indicador, que fica no canto inferior direito do ícone de carrinho, fosse alterado para quantidade de itens adicionados.

Para fazermos isso, criaremos uma variável no ProdutosProvider(). Então vamos escrever const [quantidade, setQuantidade] = useState(0);. Portanto, passamos a quantidade e o setQuantidade para essa variável e iniciamos o useState() com 0.

Também criaremos um estado para o carrinho, escrevendo const [carrinho, setCarrinho] = useState([]);. Iniciamos o useState() com um vetor vazio, que será uma lista de produtos.

Fora isso, em um e-commerce, quando acessamos um produto, ele aparece no histórico de últimos vistos. Para essa aplicação, também faremos os últimos vistos, então escreveremos uma variável const [ultimosVistos, setUltimosVistos] = useState([]);. Então também iniciamos a ultimosVistos com um vetor vazio.

import { createContext, useState } from 'react';

export const ProdutosContext = createContext({})

export const ProdutosProvider( {children} )
    const [quantidade, setQuantidade] = useContext(0);
    const [carrinho, setCarrinho] = useContext([]);
    const [ultimosVistos, setUltimosVistos] = useContext([]);

    return (
        <ProdutosContext.Provider value={{

        }}>
            {children}
        </ProdutosContext.Provider>
    )
}COPIAR CÓDIGO
A ideia é que, ao clicar no botão <+>, o produto entre na lista de últimos vistos e no carrinho. Portanto precisamos fazer a lógica para que, ao clicar no botão, ele salve essas informações.

Para isso, criaremos a function viuProduto(){}, passando o produto para os parâmetros, ou seja, (produto). Assim que chamarmos essa função, implementaremos a quantidade, então vamos passar a quantidade dentro da função com setQuantidade(quantidade+1).

export const ProdutosProvider( {children} )
    const [quantidade, setQuantidade] = useContext(0);
    const [carrinho, setCarrinho] = useContext([]);
    const [ultimosVistos, setUltimosVistos] = useContext([]);

    function viuProduto(produto){
        setQuantidade(quantidade+1)
    }COPIAR CÓDIGO
Além disso, precisamos adicionar o item no carrinho. Então vamos criar uma variável dentro da viuProduto(), escrevendo let novoCarrinho = carrinho, ou seja, atribuindo o vetor do carrinho a essa variável.

Em seguida, faremos um push() para colocar os itens na nova lista que criamos, ou seja, novoCarrinho.push();, e passaremos como parâmetro o (produto). Agora que temos uma nova lista, salvaremos ela dentro do carrinho, escrevendo setCarrinho(novoCarrinho).

function viuProduto(produto){
    setQuantidade(quantidade+1)

    let novoCarrinho = carrinho
    novoCarrinho.push(produto)
    setCarrinho(novoCarrinho)
}COPIAR CÓDIGO
Em seguida, precisamos fazer os últimos vistos, que é um pouco diferente do carrinho. Isso porque, quando clicamos no <+> do produto "Camisa bonita", ele adicionará uma camisa no carrinho. Se clicarmos novamente no <+> do mesmo produto, significa que queremos comprar duas camisas, que serão adicionadas no carrinho.

Contudo, não é interessante que mostremos a "Camisa bonita" duas vezes no últimos vistos, porque é a mesma camisa. Só precisamos mostrar o produto nesta lista apenas uma vez, sem mostrar a quantidade.

Para fazermos isso, usaremos uma propriedade do JavaScript, que também existem em algumas outras linguagens, que é o Set. O Set é uma maneira de criarmos um objeto com vários itens dentro. Ao adicionar um novo item, ele verificará se o item já existe na lista e, se tiver, ele não adiciona. Portanto ele só adiciona itens novos.

Vamos criar uma variável chamada let novoUltimosVistos. Nela criaremos um novo objeto com a propriedade Set, escrevendo new Set(), passando como parâmetro os (ultimosVistos).

Portanto temos uma variável que é um objeto com alguns itens dentro e adicionaremos mais um item lá. Para isso vamos chamar a novoUltimosVistos e adicionar um novo produto com .add(produto).

function viuProduto(produto){
    setQuantidade(quantidade+1)

    let novoCarrinho = carrinho
    novoCarrinho.push(produto)
    setCarrinho(novoCarrinho)

    let novoUltimosVistos = new Set(ultimosVistos);
    novoUltimosVistos.add(produto)
}COPIAR CÓDIGO
O que está acontecendo é o seguinte: se na nossa lista temos "mesa, sofá, camisa", se tentarmos adicionar um novo sofá, ele irá checar que o sofá já existe na lista e não vai adicionar. Com isso, continuará tendo apenas três itens, que é o que precisamos.

Se fizéssemos um .push(), como fizemos no carrinho, ele adicionaria outro sofá na lista do exemplo anterior. Isso não é o que queremos para o ultimosVistos, queremos que ele confira se o item já existe e só adicione na lista caso ele não exista. É isso que o Set() faz.

O novoUltimosVistos é um objeto que, dentro dele, terá vários objetos, que serão os produtos. Entretanto, para exibirmos esses produtos em formato de lista, precisamos converter o novoUltimosVistos em uma array.

É muito simples fazer isso no JavaScript. Escreveremos um setUltimosVistos() e, ao invés de passarmos apenas os novoUltimosVistos, colocaremos em volta de colchetes com ... na frente. Portanto temos setUltimosVistos([...novoUltimosVistos]).

Isso significa que ele fará uma cópia dos itens dentro do novoUltimosVistos e converterá em um vetor, o qual conseguiremos usar normalmente. Para finalizar, dentro do .Provider passaremos todas essas informações.

//Trecho de código suprimido

    let novoUltimosVistos = new Set(ultimosVistos);
    novoUltimosVistos.add(produto)
    setUltimosVistos([...novoUltimosVistos])
}

return (
    <ProdutosContex.Provider value{{
        quantidade,
        carrinho
        ultimosVistos
        viuProduto
    }}>COPIAR CÓDIGO
Vamos salvar e importar esse Context que criamos para tela Principal. Então, na coluna da esquerda, acessamos "telas > Principal > index.js".

Primeiramente vamos separar o que já fizemos para ficar mais organizado, quebrando as linhas dos nossos const. Em seguida faremos outro import com const { quantidade, ultimosVistos }, vindos do useContext(ProdutosContext).

Com isso, o VS Code já faz o autoimport do { ProdutosContext }, mas caso não aconteça, é necessário importá-lo. Além disso, na function Principal já tinha uma variável chamada ultimosVistos, mas vamos apagá-la porque não vamos mais utilizá-la.

//Trecho de código suprimido

import { ProdutosContext } from "../../contexts/ProdutosContext";

export default function Principal({navigation}) {

    const { 
        temaEscolhido
    } = useContext(TemaEscolhido)
    const estilo = estilos(temaEscolhido)

    const {
        usuario
    } = useContext(AutenticacaoContext)

    const {
        quantidade,
        ultimosVistos
    } = useContext(ProdutosContext)COPIAR CÓDIGO
Por fim, podemos passar a quantidade no lugar do 0, deixando como <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>. Nós não importamos o carrinho para "Principal" porque nessa tela não exibimos nossa lista de carrinhos, apenas a quantidade e os últimos vistos.

Agora acessaremos o aplicativo no nosso emulador e faremos o login para acessarmos a nossa tela principal. Feito isso, vamos testar. Ao clicarmos no botão <+>, que fica na extrema direita do card do produto, nada acontece ainda. Isso porque o botão <+> está dentro do Produto.

Esse Produto é um componente criado na pasta "componentes/produto". Então vamos acessar "src> componentes/Produto > index.js" e importar o ProdutosContext para lá.

Então vamos criar a const { viuProduto } e passar o useContext(ProdutosContext). Além disso, vamos conferir se ocorreu o import do { ProdutosContext } e importar o { useContext } do React.

//Trecho de código suprimido

import { ProdutosContext } from "../../contexts/ProdutosContext";
import { useContext } from 'react/cjs/react.production.min';

export default function Produto({item, adicionar}) {

    const {
        viuProduto
    } = useContext(ProdutosContext)

//Trecho de código suprimidoCOPIAR CÓDIGO
Em seguida, no <TouchableOpacity>, que é o botão, no onPress={() => {}} chamaremos o viuProduto() passando o (item) como parâmetro dessa função. Esse item é o produto que foi clicado.

{ adicionar &&
<TouchableOpacity style={estilos.botaoAdicionar} onPress={() => viuProduto(item)}>
    <Text style={estilos.botaoTexto}>+</Text
</TouchableOpacity>}COPIAR CÓDIGO
Salvamos e, no nosso emulador, ao clicarmos no <+> do produto "Tênis bacana", ele é adicionado no carrinho e aparece nos "Últimos vistos", que fica na parte superior da lista de produtos. Se clicarmos no <+> da "Mesa chique", notamos que indicador do carrinho passa para "2" e a mesa também aparece na lista dos "Últimos vistos".

Se clicarmos no <+> do "Tênis bacana" novamente, vemos o indicador do carrinho passar para "3", ou seja, o tênis foi para o carrinho, mas os "Últimos vistos" continua com dois itens. É exatamente isso que queríamos.

Se voltarmos para o "index.js" da tela "Principal", notaremos que temos a FlatList com data={produtos}. Esses produtos são os itens que aparecem nos cards do nosso aplicativo.

Temos também a ListHeaderComponent, que é o header da nossa FlatList, ou seja, a parte que fica acima da lista de produtos no aplicativo, onde estão os "Últimos vistos". Nele criamos uma <View> que verifica se tem algum item nos ultimosVistos e, se tiver, ele coloca uma nova FlatList, mas com scroll horizontal, carregando os ultimosVistos.

Para ficar ainda melhor, podemos configurar para que, se não tiver nenhum item no carrinho, ele não mostrar nenhum indicador, ao invés de mostrar indicador "0". Para isso, vamos acessar a parte do código onde está escrito {quantidade}, colocar a <View> inteira dentro de {} e, dentro das chaves, escrever quantidade >0 &&.

//Trecho de código suprimido

{quantidade > 0 && <View style={estilo.carrinhoQuantidadeArea}>
    <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>
</View>}

//Trecho de código suprimidoCOPIAR CÓDIGO
É como se tivéssemos escrito um if, ou seja, se quantidade for maior que "0", ele mostra a quantidade, senão ele não mostra nenhum indicador. Atualmente o indicador aparece no carrinho do nosso aplicativo porque adicionamos itens, mas se não tivéssemos colocado nada, o indicado não apareceria.

Para testarmos, vamos recarregar a aplicação, abrindo o terminal e passando o comando "R", de reload. A nossa aplicação recarrega e somos redirecionados para tela de Login.

Vamos logar novamente e, quando acessamos a tela principal, notamos que o ícone do carrinho, no canto superior direito, não possui nenhum indicador. Quando clicamos no <+> de algum produto, o indicador aparece, mostrando "1".

Nesta aula aprendemos a adicionar itens no carrinho, usando o Context API. Também descobrimos que podemos usar uma função do Context em um componente, não apenas nas telas, e usamos os estados na tela Principal.

Aprendemos como adicionar um item usando o Set(), que é uma propriedade do JavaScript que nos permite adicionar itens em um objeto, verificando se esse item já existe lá. Caso exista, ele não será duplicado.

No próximo vídeo criaremos a tela para ver a lista de carrinhos.

@@03
Faça como eu fiz: tela do carrinho

Até esse ponto, configuramos a nossa aplicação para aplicar o Context API na lista do nosso carrinho.
Agora é sua vez! Configure seu ambiente, caso ainda não tenha feito isso, e faça o Context API para armazenar as informações referentes ao carrinho de compras e exiba elas na tela de Resumo. Para isso, siga os passos a seguir:

Criar o Context API para os produtos;
Adicionar esse Context no App.js para deixá-lo globalmente visível na aplicação toda;
Criar a função para adicionar os itens no carrinho e também adicionar os últimos vistos, mas lembrando que os últimos vistos não devem repetir seus produtos nele.
Precisando de ajuda, pergunte no fórum para que possamos te ajudar!

Bons estudos ;)

O nosso objetivo era fazer a adição dos produtos na nossa lista do carrinho. E, para isso, primeiro, criamos um Context API específico para os produtos e depois adicionamos ele no nosso App.js para que ficasse globalmente visível.
Depois, criamos nossos estados (funções e variáveis) para salvar os dados corretamente no carrinho e na lista dos “últimos vistos”, configurando para que os “últimos vistos” não se repetissem dentro do carrinho.

Se quiser dar uma conferida na forma que foi implementada, dê uma olhadinha nesse repositório do Github.

https://github.com/alura-cursos/react-native-context-api/tree/186bc228c1c37c01de98765f498794475cf10912

@@04
Criando mais telas

Até aqui usamos o Context API na mudança do tema, na parte de autenticação e, recentemente, no carrinho, adicionando nossos produtos em uma lista. Entretanto, a grande vantagem de usar o Context API é termos várias telas e componentes, mas acessarmos nossos estados independentemente de passagem de parâmetros via props. Então podemos acessar globalmente esses estados.
Para exemplificar ainda mais o uso do Context e deixar nosso aplicativo mais próximo do e-commerce final, neste vídeo criaremos duas telas para nosso aplicativo. Uma delas será a tela de Resumo, onde estarão listados os produtos que adicionamos no carrinho, e a outra é a tela de Finalizar compra, para podermos ver os nossos dados e finalizar a compra.

Antes de começarmos a escrever os códigos, vejamos o que essas telas precisarão ter, a partir da captura dessas telas. Começaremos analisando a tela de Resumo, que é bem parecida com a tela Principal, tendo a saudação no canto superior esquerdo e os ícones do carrinho e da engrenagem no canto superior direito.

Ela tem os produtos, mas apenas os que estão no carrinho. Além disso, diferentemente da Principal, não temos os "Últimos vistos" e o card do produto não tem o botão <+>. Isso porque, na regra de negócios desse aplicativo, optamos por permitir que os itens só sejam adicionados no carrinho a partir da tela principal.

Então a tela de Resumo tem apenas lista os produtos que já estão no carrinho, por isso os cards não têm o botão <+>. Por fim, ela tem o botão "Finalizar" na parte inferior, por onde navegaremos para tela de finalizar.

A tela de finalizar, neste vídeo, deixaremos praticamente vazia. Ela terá apenas um botão centralizado na tela escrito "Finalizar", que terá a função de finalizar a compra.

Vamos começar a construir as duas telas. Como observamos, a tela "Resumo" é muito parecida com a tela "Principal", então, na coluna da esquerda, acessaremos "src > telas > Principal". Copiaremos a pasta "Principal e, para isso, clicamos na pasta, pressionamos "Ctrl + C" e, em seguida, "Ctrl + V".

Depois, clicamos com o botão direito em cima da "Principal copy" e, no menu flutuante, escolhemos a opção "Renomear". Renomearemos a pasta para "Resumo".

Agora vamos abrir o "index.js" da pasta "Resumo" e retirar algumas informações, porque essa tela tem menos itens que a "Principal". Por exemplo, os ultimosVistos não aparecem na tela de Resumo, então podemos removê-lo. Para isso, apagaremos o ListHeaderComponent={} da nossa FlatList, ou seja, deletaremos da linha 53 à linha 69.

Também não exibiremos os produtos na nossa FlatList, exibiremos o carrinho, que já está globalmente visível graças ao ProdutosContext. Então, na importação, como não exibiremos os ultimosVistos, vamos substituir, por carrinho.

const {
    quantidade
    carrinho
} = useContext(ProdutosContext)COPIAR CÓDIGO
Conseguimos acessar o carrinho, que será um vetor de objetos, porque listaremos os produtos que estão no carrinho. Sendo assim, na FlatList, substituiremos o data={produtos} por data={carrinho}.

Também mudaremos o nome da função de Principal para Resumo, ou seja, export default function Resumo({navigation}) { , já que é a tela de Resumo. Entretanto, para podemos acessar essa tela, é necessário incluí-la nas nossas "rotas.js".

Nesse caso vamos acessar "src > rotas.js" e, antes da function Rotas() faremos a importação dessa tela. Além disso, precisamos fazer o Tab.Screen dessa tela. Podemos copiar a Tab.Screen da "Configurações", colar na linha de baixo e substituir todos os campos em que está escrito "Configurações" por "Resumo".

//Trecho de código suprimido

import Resumo from './telas/Resumo';

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{ headerShow: false }}/>
                <Tab.Screen name="Principal" component={Principal} options={{ headerShow: false }}/>
                <Tab.Screen name="Configurações" component={Configuracao} options={{ headerTitleAlign: 'center' }}/>
                <Tab.Screen name="Resumo" component={Resumo} options={{ headerTitleAlign: 'center' }}/>
            </Tab.Navigator>
        </NavigationContainer>
}COPIAR CÓDIGO
Ao salvarmos, temos um erro na aplicação, mas isso é normal quando mexemos nas nossas rotas. Uma forma bem fácil de solucionar esse problema é abrir o terminal onde a aplicação está rodando, encerra a aplicação e voltar executar o código. Além disso, no emulador, encerraremos o aplicativo e abriremos novamente.

Nossa aplicação voltou a rodar normalmente, então faremos o login, digitando o e-mail e senha cadastrados e clicando em "Entrar". Agora precisamos determinar uma forma para acessar a tela de Resumo.

Uma forma interessante é, ao clicarmos no ícone de carrinho, no canto superior direito da tela Principal, sermos redirecionados para tela de Resumo. Para isso, vamos para navegar para "telas > Principal > index.js".

Percebam que temos um TouchableOpacity em volta do nosso ícone de carrinho, que é o "shopping-cart". Portanto já temos um onPress={} ao clicar no ícone, mas ele está vazio. Vamos usá-lo para navegar entre telas, escrevendo onPress={() => navigation.navigate('Resumo')}. Com isso, passamos a navegação para nossa tela 'Resumo'.

Vamos fazer um teste. No emulador, vamos adicionar o "Tênis bacana" e a "Cadeira de trabalho" no carrinho, clicando no <+> dos cards. Em seguida, vamos clicar no ícone do carrinho, no canto superior direito da tela, o que nos redireciona para tela de resumo.

Essa tela já está bem próxima do que gostaríamos, exibindo os produtos que adicionamos como na imagem de referência que vimos anteriormente. Vou abrir a imagem novamente para conferirmos o que mais precisamos fazer. No modelo temos o botão "Finalizar", na parte inferior da tela, e o botão <+> foi removido dos cards do carrinho.

Começaremos removendo o botão <+>. Para isso abriremos o "index.js" da tela de Resumo. Percebam que na FlatList tem o <Produto item={item} adicionar={true} />. Se mudarmos a informação do atributo adicionar para {false}, o botão <+> já é removido dos cards da tela de Resumo.

Pare entendermos como essa implementação funciona, vamos na coluna da esquerda e acessaremos "src > componentes/Produto > index.js". Nele percebemos que o TouchableOpacity do botão <+> está envolvido por uma variável chamada adicionar.

Essa foi a variável que passamos no Resumo como {true} ou {false}. Então se adicionar for true, o botão é exibido, se for false, ele não é exibido. Dessa forma que removemos o botão do nosso componente. Feito isso, falta criarmos o botão na parte inferior da tela de Resumo para sermos direcionados para tela "Finalizar".

Para criar esse botão, voltaremos para o "index.js" da pasta "Resumo" e criaremos um <TouchableOpacity> dentro da <View>. Dentro dele colocaremos um <Text>Finalizar</Text>. Agora daremos um estilo para o nosso botão. No TouchableOpacity vamos adicionar o style={estilo.botao} e no Text adicionaremos o style={estilo.botaoTexto}.

<TouchableOpacity style={estilo.botao}>
    <Text style={estilo.botaoTexto>Finalizar</Text>
</TouchableOpacity>COPIAR CÓDIGO
Vamos salvar e, mesmo não sendo muito visível, está escrito "Finalizar" na parte inferior da tela "Resumo", mas ele não está estilizado. Para estilizarmos, vamos mexer nos "estilos.js".

Antes disso, percebam que, na linha 3 do "index.js", temos o import { produtos }, mas não estamos utilizando, portanto vamos removê-lo. Em seguida, podemos apagar o arquivo "produtos.js" da pasta "Resumo", porque não usaremos ele nesta tela. Com isso, deixamos nossa aplicação um pouco mais limpa.

Agora abriremos o "estilos.js" da pasta "Resumo" e navegaremos para o final do código para adicionarmos o estilo do botão.

//Trecho de código suprimido

    botao: {
        margin: 16,
        marginBottom: 32,
        paddingVertical: 16,
        borderRadius: 10,
        backgroundColor: tema.botao,
    },
    botaoTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: tema.preto,
        textAlign: 'center',
    },
});COPIAR CÓDIGO
Percebam que o botao tem alguns atributos para visualizarmos melhor, como as margens e o padd07ing, que estão em CSS para o nosso botão ficar parecido com o mockup. Também o estilo para o texto, com o tamanho da fonte, a espessura da letra a cor e o alinhamento.

Salvaremos e percebam que o botão está parecido com o que gostaríamos, mas está pequeno. Para ele ocupar a tela inteira, como o tamanho do card, teremos que alterar os estilos do nosso container. Na linha 10 do "estilos.js", mudaremos o alinhamento de 'center' para alignItems: 'strech',.

Vamos salvar novamente e, com isso, percebemos que temos o botão desejado na nossa tela de "Resumo" do aplicativo. Com o tempo vocês terão mais prática em programar e estilizar os seus componentes com CSS. Neste caso, estilizamos para ficar bem próximo do que tínhamos na tela de referência para replicarmos no app.

Agora criaremos nossa tela "Finalizar". A tela de Finalizar será parecida com a de Resumo, mas sem os cards, sem a saudação no canto superior esquerdo e sem os ícones do canto superior direito

Então, na coluna da esquerda, vamos copiar a pasta "Resumo", com "Ctrl + C", e colar, com "Ctrl + V". Depois alteraremos o nome de "Resumo copy" para "Finalizar". Também podemos deixar aberto apenas o "index.js" da pasta "Finalizar", fechando os demais arquivos abertos.

Dentro do "index.js" da pasta "Finalizar", vamos alterar o nome da função para export default function Finalizar({navigation}) {. Em seguida, removeremos da linha 31 a 44, que é a parte do título que exibe a saudação e os ícones. Também podemos remover a FlatList com o data={carrinho}, deixando apenas o botão.

//Trecho de código suprimido

export default function Finalizar({navigation}) {

    const {
        temaEscolhido
    } = useContext(TemaContext)

    const {
        usuario
    } = useContext(AutenticacaoContext)

    const {
        quantidade,
        carrinho
    } = useContext(ProdutosContext)

    return (
        <View style={estilo.container}>
            <StatusBar />

            <TouchableOpacity style={estilo.botao}>
                <Text style={estilo.botaoTexto>Finalizar</Text>
            </TouchableOpacity>

        </View>
    );
}COPIAR CÓDIGO
Para conseguirmos importar nossa tela, acessaremos o arquivo "rotas.js" na coluna da esquerda. Nele vamos importar nossa tela escrevendo import Finalizar from './telas/Finalizar';. Além disso, criaremos o Tab.Screen para navegarmos para essa tela.

Então vamos copiar o Tab.Screen do Resumo e colar na linha de baixo. Em seguida, substituiremos todos os lugares em que tem Resumo por Finalizar

//Trecho de código suprimido

import Finalizar from './telas/Finalizar';

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{ headerShow: false }}/>
                <Tab.Screen name="Principal" component={Principal} options={{ headerShow: false }}/>
                <Tab.Screen name="Configurações" component={Configuracao} options={{ headerTitleAlign: 'center' }}/>
                <Tab.Screen name="Resumo" component={Resumo} options={{ headerTitleAlign: 'center' }}/>
                <Tab.Screen name="Finalizar" component={Finalizar} options={{ headerTitleAlign: 'center' }}/>
            </Tab.Navigator>
        </NavigationContainer>
}COPIAR CÓDIGO
Novamente teremos um erro por termos alterado as Rotas(), então vamos encerrar a aplicação no terminal e depois executá-la de novo. Também encerraremos a aplicação no emulador e depois abriremos mais uma vez.

Feito isso, para acessarmos a tela "Finalizar", voltaremos para o "index"js" da pasta "Resumo". No botão que criamos nesta tela, colocaremos um onPress={} para navegarmos para tela "Finalizar".

Para facilitar a visualização, quebraremos a linha após o style={estilo.botao} e escreveremos onPress={() => navigation.navigate('Finalizar')}. Então fizemos uma arrow function passando a navegação para tela "Finalizar".

//Trecho de código suprimido

<TouchableOpacity style={estilo.botao}
    onPress={() => navigation.navigate('Finalizar')
>
    <Text style={estilo.botaoTexto>Finalizar</Text>
</TouchableOpacity>COPIAR CÓDIGO
Salvaremos e vamos testar se nossa aplicação funciona. No emulador, faremos o login passando o e-mail e senha registrados. Em seguida vamos adicionar uns produtos no carrinho, como uma "Mesa chique", uma "Camisa bonita" e uma "Cadeira de trabalho".

Clicando no ícone de carrinho, no canto superior direito da aplicação, somos direcionados para tela de Resumo. Vemos que está funcionando, já que exibe os produtos adicionados.

Vamos voltar para tela Principal para fazer um teste. Adicionaremos um "Tênis bacana" e agora temos quatro produtos no carrinho. Ao clicarmos no ícone do carrinho novamente, percebemos que a lista da tela de Resumo foi atualizada.

Não passamos isso via props, e sim através do Context API que está na tela. Se analisarmos o "index.js" da tela de Resumo, na linha 23 temos a importação das variáveis usando o ProdutosContext, que criamos nos vídeos anteriores.

Na aplicação, ao clicarmos no botão "Finalizar", na parte inferior da tela de resumo, somos direcionados para tela "Finalizar" que, atualmente, é só um botão. Nosso objetivo é que, ao clicarmos no botão da tela "Finalizar", sejamos direcionados para tela Principal.

Para fazermos isso e finalizarmos esse vídeo, vamos voltar para o "index.js" da tela Finalizar e, no TouchableOpacity do botão um onPress={} criando uma arrow function com o navigation.navigate(), passando a ('Principal') como parâmetro.

//Trecho de código suprimido

<TouchableOpacity style={estilo.botao}
    onPress={() => navigation.navigate('Principal')}
>
    <Text style={estilo.botaoTexto>Finalizar</Text>
</TouchableOpacity>COPIAR CÓDIGO
Agora se, na nossa aplicação, clicarmos no botão "Finalizar" da tela Finalizar, voltamos para tela Principal.

Neste vídeo criamos mais duas telas, aproveitando códigos de telas anteriores. Assim, observamos que conseguimos acessar a tela de carrinho utilizando apenas o Context API, sem precisar passar via props.

Nos próximos vídeos aprenderemos mais sobre o Context e veremos algumas curiosidades. Se repararem, o nosso Context por si só, não está persistindo os dados. Isso significa que, se reiniciarmos a aplicação, tudo que está na lista de carrinho será perdido.

Vamos fazer um teste rápido. No terminal do VS Code, vamos reiniciar nossa aplicação. No emulador, faremos o login novamente. Ao entrarmos na aplicação, os quatro produtos que tínhamos adicionados foram perdidos.

Isso acontece porque o Context API é uma variável global, ou seja, enquanto a aplicação está rodando, os dados ficam salvos na variável. Contudo, quando a aplicação é reiniciada, por exemplo, se a pessoa fechar o aplicativo e abrir novamente, os dados são perdidos, porque a variável só roda enquanto o aplicativo está sendo executado.

Então faremos com que, mesmo fechando e abrindo o aplicativo, o usuário recupere os dados que tinha colocado anteriormente no carrinho.

Nos vemos na próxima aula.

@@05
Faça como eu fiz: tela de resumo e finalizar

Mais duas telas foram criadas na nossa aplicação: a tela de Resumo e a tela de Finalizar. E que tal testarmos o que aprendemos colocando a mão no código?
A tela de Resumo é bem semelhante a tela Principal, exceto a parte dos últimos vistos e o botão de "+" que não deve aparecer nos Cards dos produtos. Essa tela também possui um botão para navegar para a tela de Finalizar. Já a tela de Finalizar é bem simples, por enquanto, possuindo apenas um botão de finalizar a compra.

Então, siga o seguintes passos:

Crie a pasta de Resumo;
Faça as alterações de informações necessárias;
Ajuste as rotas;
Faça o redirecionamento do ícone do carrinho para a tela de resumo e remova o botão “+”;
Adicione o botão “Finalizar”;
Crie a tela de finalizar e faça o redirecionamento.
Lembre-se de que sempre que criar uma tela, devemos adicioná-la nas rotas. Caso sua aplicação "quebre" nesse processo, reinicie a aplicação no terminal e o problema será resolvido.

Precisando de ajuda, pergunte no fórum para que possamos te ajudar!

Bons estudos ;)

Aqui nosso desafio era criar mais duas telas no nosso projeto. Essas telas possuem estruturas semelhantes às telas que já haviam no projeto base. Assim, fizemos a importação das duas telas criadas no nosso arquivo de rotas para que pudéssemos navegar até elas.
Se quiser dar uma conferida na forma que foi implementada, dê uma olhadinha nesse repositório do Github.

https://github.com/alura-cursos/react-native-context-api/tree/fbb835c7976cbb13ad34c6e38dc1f36bd98cc758

@@06
Informações armazenadas

Conseguimos usar o Context API no nosso aplicativo em três situações diferentes:
Mudança do tema;
Autenticação, no Login;
Carrinho, criando uma lista de produtos.
Entretanto, reparem uma coisa. Simularemos uma pessoa usando nosso e-commerce. Abriremos a tela de Login, colocaremos nosso e-mail e senha para realizarmos o login, pressionamos o botão "Entrar" e passamos para tela de produtos.

Na tela de Produtos, clicaremos na engrenagem no canto superior direito para sermos direcionados para tela de Configuração, onde vamos alterar o tema do nosso aplicativo de escuro para claro, clicando no switch. Voltaremos para tela de produtos e adicionaremos alguns produtos na nossa lista de compras. Vou colocar uma "Mesa chique" e uma "Cadeira de trabalho".

Agora temos dois itens no carrinho. Se clicarmos no ícone do carrinho no canto superior direito, vamos para tela de Resumo, onde tem uma "Mesa chique" e uma "Cadeira de trabalho".

Entretanto, vamos supor que, sem querer, fechamos o aplicativo no celular. Então vamos para tela de aplicativos abertos e encerraremos o nosso e-commerce, simulando o fechamento do app. Agora abriremos novamente para adicionar mais itens no carrinho, mas uma coisa estranha já aconteceu. Voltamos para tela de Login e ela não está mais no tema claro.

Vamos fazer o login novamente e, ao entrarmos na tela de produto, reparamos que o carrinho foi esvaziado. Se clicarmos no ícone do carrinho, confirmamos que não há nenhum produto listado.

O Context API, por si só, deixa os estados de forma global na aplicação, mas não persiste os dados, como notamos no nosso teste. Existem várias formas de conseguirmos persistir os dados, algumas delas já até foram vistas em cursos anteriores da formação React Native. Uma dessas formas é o armazenamento local.

Por exemplo, poderíamos armazenar localmente a mudança do tema, assim, quando o aplicativo for iniciado, ele verifica qual era o último tema da aplicação. No caso, era o tema claro, então ele restauraria para o tema claro. Para os produtos no carrinho, até poderíamos usar o Async Storage, mas imaginem a seguinte situação.

Vamos supor que meu celular estragou e não liga mais, então usarei o celular de outra pessoa, entrando no mesmo aplicativo e logando com a minha conta. Seria interessante aparecer a lista de carrinho que eu fiz no meu celular. Todavia, se usarmos o Async Storage, a lista do carrinho ficará armazenado apenas no antigo dispositivo, e não no que peguei emprestado do meu amigo.

Uma forma de restaurarmos o que estava no carrinho em outros dispositivos é usando a Web API. Usaremos essas duas formas para complementarmos o Context que implementamos na nossa aplicação, persistindo as informações.

Veremos isso na próxima aula.

@@07
O que aprendemos?

Nesta aula, aprendemos a:
Usar o Context API para adicionar os produtos no carrinho;
Implementar o Set para adicionar elementos únicos no vetor de últimos vistos, considerando que, diferente do carrinho, os últimos vistos não devem exibir o mesmo produto mais de uma vez.
Agora já temos uma aplicação bem mais completa, não é mesmo?

Se você chegou até aqui, meus parabéns! Continue assim!

Não esqueça de visitar o nosso fórum. Veja e ajude em questões levantadas por outros alunos, compartilhe algo e, caso tenha dúvidas, podemos ajudar você por lá.