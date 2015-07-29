---
layout: post
title: Criando temas wp - parte 2
date:   2015-07-29 05:00:00 -00:00
categories: wordpress, temas
excerpt_separator: <!--more-->
description: Criação de temas wordpress parte 2.
---

{: .excerpt}
Criação de temas wordpress parte 2.

<!--more-->

Fala galera, daremos continuidade no post [Criando temas wp - parte 1](https://raank.github.io/blog/2015/07/criando-temas-wp-parte-1.html){:target="_blank"}

### Passo 6:
Organizando semântica do código html junto ao PHP

Percebemos que foi inserido a tag:

~~~php
get_template_part( "loop" );
~~~

Essa função é nativa do Wordpress, é igual a ``include 'file.php'`` do php, inseri para não repetir código ao longo do processo.
<br>Também foi adicionado a tag header nas páginas, para setarmos o título de cada página.

[Atualizando semantica do tema](https://github.com/raank/wp-theme/commit/a53f517dab7be7ddac1da6fd3d9b46ebeaa7ed9d){:target="_blank"}


### Passo 7:
Funções

{: .list-components}
 - [functions.php](https://github.com/raank/wp-theme/commit/3e4ca577660dce67b499961ea16d3e21905e91c2){:target="_blank"} / Arquivo de funções do tema
 - [core/scripts.php](https://github.com/raank/wp-theme/commit/91d96a4c83224146f04ec88790eda8b59d133724){:target="_blank"} / Onde vamos inserir os CSS e JS
 - [core/core.php](https://github.com/raank/wp-theme/commit/91d96a4c83224146f04ec88790eda8b59d133724){:target="_blank"} / Funções básicas do Wordpress
 - [core/helpers.php](https://github.com/raank/wp-theme/commit/91d96a4c83224146f04ec88790eda8b59d133724){:target="_blank"} / Helpers do tema

Não iremos usar o **functions.php** para colocar nossas funções porque pode virar bagunça, temos que modularizar as coisas..

### Passo 8:
Header

Nesse passo iremos diagramar a parte do header - [Link](https://github.com/raank/wp-theme/commit/2694a324623a37247fd7a168aa372d21d62201a0){:target="_blank"}<br>
O html do header foi usado o mesmo do **[wpOdin](http://wpod.in/){:target="_blank"}**
<br><small>Dúvidas sobre o header é só mandar email via [contato](https://raank.github.io/contato){:target="_blank"}</small>

### Passo 9:
Sidebar

No [código](https://github.com/raank/wp-theme/commit/81e7e0c274488e8f5d4fda3a0c1fe3b547351f02){:target="_blank"} adicionei o aside com id e classe e dentro dele um IF, caso o usuário não insira **widget** nenhum no painel, ele exibirá esses três **widgets**.

### Passo 10:
JS e SASS

Nesse [commit](https://github.com/raank/wp-theme/commit/94cbac1305f87c38d37edc9fc52bd02f6a41f63a){:target="_blank"} eu inseri um js e dois estilos.
<br>No arquivo **assets/sass/style.css - linha 01** temos o seguinte código:

~~~sass
@import "bootstrap-sass-official/assets/stylesheets/bootstrap";
~~~

Onde está o arquivo do **boostrap**? Fácil! Está nos components do bower, logo no inicio do primeiro passo.

{: .list-components}
 - [Primeiros passos com NodeJS](http://tableless.com.br/o-que-nodejs-primeiros-passos-com-node-js/){:target="_blank"}
 - [Gulp: O novo automatizador](http://tableless.com.br/gulp-o-novo-automatizador/){:target="_blank"}
 - [Bower na prática](http://tableless.com.br/bower-na-pratica/){:target="_blank"}
 - [Instalando SASS na máquina – video](http://tableless.com.br/instalando-sass-na-maquina-video/){:target="_blank"}

<small>Dúvidas sobre como utilizar essas ferramentas é só mandar email via [contato](https://raank.github.io/contato){:target="_blank"}</small>

É chato instalar, eu sei! Porém é muito prático nas próximas vezes. Garanto!<br>
Após ter terminado de instalar todas essas ferramentas você vai até a pasta do tema e roda o comando de linha no terminal:

~~~bash
$ sudo npm install && bower install
~~~

Após o termino da instalação das dependências do Gulp e dos componentes do Bower, você só precisa rodar o gulp no comando de linha!

<small>Dúvidas!? Mande email via [contato](https://raank.github.io/contato){:target="_blank"}</small>

É galera, por hoje é só!
Valeu e até a próxima!

<img class="lazyload" data-src="http://i.imgur.com/jOCaybJ.gif" alt="vlw flw">

### Passos:

{: .list-components}
 - [Parte 1](https://raank.github.io/blog/2015/07/criando-temas-wp-parte-1.html)
 - [Parte 2](https://raank.github.io/blog/2015/07/criando-temas-wp-parte-2.html)
