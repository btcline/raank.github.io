---
layout: post
title: Criando temas wp - parte 1
date:   2015-07-28 22:00:00 -00:00
categories: wordpress, temas
excerpt_separator: <!--more-->
description: Criando os arquivos para o tema da série.
---

{: .excerpt}
Criando os arquivos para o tema da série.

<!--more-->

Fala galera, primeiramente vamos definir a estrutura e os arquivos de um tema, isso vai depender de acordo com o que precisamos, vamos criar algo básico.

### Passo 1:
Criando arquivos básicos que seram necessários

{: .list-components}
 - 404.php / **Página de erro**
 - archive.php / **Arquivos de posts**
 - author.php / **Posts do autor**
 - category.php / **Arquivos de posts por Categorias**
 - footer.php / **Rodapé**
 - functions.php / **Funções do tema**
 - gulpfile.js / **Ferramenta de automatização**
 - header.php / **Cabeçalho**
 - index.php / **Home (arquivo principal)**
 - package.json / **Dependências do gulp**
 - page.php / **Template de páginas padrão**
 - search.php / **Template de busca**
 - searchform.php / **Formulário de busca**
 - sidebar.php / **Sidebar**
 - single.php / **Post único**
 - style.css / **Estilos**
 - tag.php / **Arquivos de posts por tag**

### Passo 2:
Pastas adicionais, serão usadas para organizar melhor o nosso tema

{: .list-components}
 - core/ **Modularização das funções e etc**
 - assets/ **[ sass, js, images ] Arquivos de estilos e scripts js**
 - build/ **[ css, js, images ] Arquivos compilados**

### Passo 3:
Ferramentas de automatização e componentes

{: .list-components}
 - [gulpfile.js](https://github.com/raank/wp-theme/commit/571b92e42d92556eebfb9020d41054d730440b7a){:target="_blank"}
 - [package.json](https://github.com/raank/wp-theme/commit/f788963cea4fa63661dc5e0a97eef0deceff18b8){:target="_blank"}
 - [bower.json](https://github.com/raank/wp-theme/commit/3b2fb843980bb8febea037882143ba7c754a761a){:target="_blank"}

**ATENÇÃO:** Esse passo não será necessário se você não tiver conhecimento com essas ferramentas. <br>Se você não tiver conhecimento com essas ferramentas, não se preocupe, vamos chegar na parte onde iremos fazer do jeito "antigo".

### Passo 4:
Identificando o nosso tema

~~~css
/*
	Theme Name: Wp Theme
	Author: Felipe Rank
	Author URI: https://raank.github.io/
	Description: Tema básico para wordpress
	Version: 1.0.0
*/
~~~

[**Theme Name**] Nome do tema <br>
[**Author**] Nome do autor que criou o tema <br>
[**Author URI**] Site do autor <br>
[**Description**] Uma breve descrição do tema <br>
[**Version**] Versão do tema <br>
**[Link para o arquivo](https://github.com/raank/wp-theme/blob/master/style.css){:target="_blank"}**

### Passo 5:
Adicionando html básico no nosso tema

**header.php** - [Link para o arquivo](https://github.com/raank/wp-theme/blob/master/header.php){:target="_blank"}<br>
**footer.php** - [Link para o arquivo](https://github.com/raank/wp-theme/blob/master/footer.php){:target="_blank"}<br>
**index.php** - [Link para o arquivo](https://github.com/raank/wp-theme/blob/master/index.php){:target="_blank"}<br>

Esses três arquivos, mais o **style.css** são o necessário para ter um tema.<br>Por isso coloquei o código html neles primeiro, coloquei os links para não ficar com muito código.

{:.endpost}
Dúvidas!? Mande email via [contato](https://raank.github.io/contato){:target="_blank"}

{:.byebye}
Bom galera, essa é a primeira parte, espero que gostem!<br>Até a próxima!

<img class="lazyload" data-src="http://i.imgur.com/jOCaybJ.gif" alt="vlw flw">

### Passos:

{: .list-components}
 - [Parte 1](https://raank.github.io/blog/2015/07/criando-temas-wp-parte-1.html)
 - [Parte 2](https://raank.github.io/blog/2015/07/criando-temas-wp-parte-2.html)
 - [Parte 3](https://raank.github.io/blog/2015/08/criando-temas-wp-parte-3.html)