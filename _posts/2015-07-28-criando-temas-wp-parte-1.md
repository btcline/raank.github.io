---
layout: post
title: Criando temas wp - parte 1
date:   2015-07-28 22:00:00 -03:00
categories: wordpress, temas
excerpt_separator: <!--more-->
description: Criação de temas wordpress parte 1.
---

{: .excerpt}
Criação de temas wordpress parte 1.

<!--more-->

Fala galera, primeiramente vamos definir a estrutura de um tema, isso vareia de acordo com o que precisamos, vamos criar algo básico.

### Passo 1:
Criando arquivos

{: .list-components}
 - 404.php / Página de erro
 - archive.php / Arquivos de posts
 - author.php / Posts do autor
 - category.php /  Arquivos de posts por Categorias
 - footer.php / Rodapé
 - functions.php / Funções do tema
 - gulpfile.js / Ferramenta de automatização
 - header.php / Cabeçalho
 - index.php / Home (arquivo principal)
 - package.json / Dependências do gulp
 - page.php / Template de páginas padrão
 - search.php / Template de busca
 - searchform.php / Formulário de busca
 - sidebar.php / Sidebar
 - single.php / Post único
 - style.css / Estilos
 - tag.php / Arquivos de posts por tag

 [Link do Commit](https://github.com/raank/wp-theme/commit/4ff7b33560d537ab39793628fee2320d1d5188ff){:target="_blank"}

### Passo 2:
Pastas adicionais

{: .list-components}
 - core/ Modularização das funções e etc
 - assets/ [ sass, js, images ] Arquivos de estilos e scripts js
 - build/ [ css, js, images ] Arquivos compilados

### Passo 3:
Ferramentas de automatização e componentes

{: .list-components}
 - [gulpfile.js](https://github.com/raank/wp-theme/commit/571b92e42d92556eebfb9020d41054d730440b7a){:target="_blank"}
 - [package.json](https://github.com/raank/wp-theme/commit/f788963cea4fa63661dc5e0a97eef0deceff18b8){:target="_blank"}
 - [bower.json](https://github.com/raank/wp-theme/commit/3b2fb843980bb8febea037882143ba7c754a761a){:target="_blank"}

Usaremos os components do Modernizr e Bootstrap.

### Passo 4:
Inserindo as informações do tema

~~~css
/*
Theme Name: Wp Theme
Author: Felipe Rank
Author URI: https://raank.github.io/
Description: Tema básico para wordpress
Version: 1.0.0
*/
~~~
PS: esse comentário acima tem que ser inserido no "style.css" do nosso tema.
[Link do Commit](https://github.com/raank/wp-theme/commit/742f8e883f0a57e3b74fb1eac21f221803421f5b){:target="_blank"}

### Passo 5:
Inserindo html no tema

{: .list-components}
 - [Inserindo html básico do head e footer](https://github.com/raank/wp-theme/commit/748169d49d47cdd0f82000e405c2830027e9273c){:target="_blank"}
 - [Inserindo as duas tags principais nos arquivos](https://github.com/raank/wp-theme/commit/aec65597480b1be93fd9d70ba0c8137e37ab97c8){:target="_blank"}
 - [Adicionando estrutura padrão](https://github.com/raank/wp-theme/commit/650124e567d6454260452cd46c51b7f594ec9261){:target="_blank"} / Usaremos essa estrutura para todos os arquivos com loop


Bom galera, essa foi a primeira parte, serão 5 passos por posts, dúvidas, erros é só entrar em [contato](https://raank.github.io/contato/) ou fazer seu comentário!<br>
Até a próxima marujos.


<img class="lazyload" data-src="http://i.imgur.com/jOCaybJ.gif" alt="vlw flw">