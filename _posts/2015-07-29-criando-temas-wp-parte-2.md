---
layout: post
title: Criando temas wp - parte 2
date:   2015-07-29 05:00:00 -00:00
categories: wordpress, temas
excerpt_separator: <!--more-->
description: Inserindo os códigos nos arquivos.
---

{: .excerpt}
Inserindo os códigos nos arquivos.

<!--more-->

Fala galera, daremos continuidade no post [Criando temas wp - parte 1](https://raank.github.io/blog/2015/07/criando-temas-wp-parte-1.html){:target="_blank"}, nesse passo iremos inserir os códigos html nos arquivos restantes.

### Passo 6:
Estrutura html padrão que vamos usar

~~~html
<div class="container">
  <div class="row">
    <div class="page-container col-sm-8"></div>
    <!-- /Sidebar -->
  </div>
</div>
~~~

Essa será nossa estrutura padrão dos arquivos: archive, author, category, index, page, single e tag.<br>
Essa estrura somente é para definir, onde temos o comentário ``<!-- /Sidebar -->`` é onde vamos colocar nossa sidebar, o miolo da div **page-container** será onde vamos inserir o conteúdo de cada um.

O nosso arquivo header php ficará assim depois de pronto:

~~~html
<?php get_header(); ?>
  <div class='container'>
    <div class='row'>
      <div class='page-container col-sm-8'>
        <?php
          if( have_posts() ):
            while( have_posts() ):
              the_post();
              get_template_part( 'loop' ); 
            endwhile;
            theme_page_nav();
          else:
          ?>
          <div class='post-notfound'>
            <h4>Nenhuma postagem encontrada</h4>
          </div>
        <?php endif; ?>
      </div>
      <?php get_sidebar(); ?>
    </div>
  </div>
<?php get_footer(); ?>
~~~

No miolo temos o **loop** de post que irá gerar a lista de posts do nosso tema.<br>A div **post-notfound** será exibida caso não tenha nenhuma postagem.

### Passo 7:
Títulos de cada página

Os títulos pode variar conforme o arquivo, um exemplo é o **single.php** e **page.php** que tem as mesmas estruturas e usam o mesmo título, porém é diferente de **archive.php** e **author.php** que também tem as mesmas estruturas.<br>Para isso eu recomendo ler o [Codex do WordPress](http://codex.wordpress.org/){:target="_blank"}.

### Passo 8:
Funções do tema

~~~php
<?php
// Funções básicas do tema
require_once get_template_directory() . '/core/core.php';
// Arquivo de scripts e estilos
require_once get_template_directory() . '/core/scripts.php';
// Arquivo de helpers para o tema
require_once get_template_directory() . '/core/helpers.php';
?>
~~~

O arquivo **functions.php** será básicamente isso, com essa estrutura podemos organizar melhor o nosso código, separando por módulos ou como preferir chamar.

[**core/core.php**]

~~~php
<?php
/**
 * Arquivo de core
 */
/*
 * Definindo a URL do novo CSS do tema
 */
if ( ! function_exists( 'theme_stylesheet_uri' ) ) {
  function theme_stylesheet_uri( $uri, $dir ) {
    return $dir . '/build/css/style.min.css';
  }
  add_filter( 'stylesheet_uri', 'theme_stylesheet_uri', 10, 2 );
}


/*
 * Paginação
 * by http://wpod.in/
 */
if ( ! function_exists( 'theme_pagination' ) ) {
  function theme_pagination( $mid = 2, $end = 1, $show = false, $query = null ) {
    // Prevent show pagination number if Infinite Scroll of JetPack is active.
    global $wp_query, $wp_rewrite;
    $total_pages = $wp_query->max_num_pages;
    if ( is_object( $query ) && null != $query ) {
      $total_pages = $query->max_num_pages;
    }
    if ( $total_pages > 1 ) {
      $url_base = $wp_rewrite->pagination_base;
      $big = 999999999;
      // Sets the paginate_links arguments.
      $arguments = apply_filters( 'theme_pagination_args', array(
          'base'      => esc_url_raw( str_replace( $big, '%#%', get_pagenum_link( $big, false ) ) ),
          'format'    => '',
          'current'   => max( 1, get_query_var( 'paged' ) ),
          'total'     => $total_pages,
          'show_all'  => $show,
          'end_size'  => $end,
          'mid_size'  => $mid,
          'type'      => 'list',
          'prev_text' => __( '&laquo; Previous', 'theme' ),
          'next_text' => __( 'Next &raquo;', 'theme' ),
        )
      );
      $pagination = '<div class="pagination-wrap">' . paginate_links( $arguments ) . '</div>';
      // Prevents duplicate bars in the middle of the url.
      if ( $url_base ) {
        $pagination = str_replace( '//' . $url_base . '/', '/' . $url_base . '/', $pagination );
      }
      return $pagination;
    }
  }
}

if ( ! function_exists( 'theme_page_nav' ) ) {
  function theme_page_nav() {
    $mid  = 2;     // Total of items that will show along with the current page.
    $end  = 1;     // Total of items displayed for the last few pages.
    $show = false; // Show all items.

    echo theme_pagination( $mid, $end, false );
  }
}
?>
~~~

Nesse arquivos vamos indicar que teremos uma nova URL para o estilo padrão do tema e também a paginação das postagens.

[**core/helpers.php**]

~~~php
<?php
/**
 * Arquivo de core
 */
/**
 * Registra a sidebar principal
 */
if ( ! function_exists( 'theme_widgets_standard' ) ) {
  function theme_widgets_standard() {
    register_sidebar(
      array(
        'name' => 'Sidebar Principal',
        'id' => 'main-sidebar',
        'description' => 'Sidebar Principal',
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widgettitle widget-title">',
        'after_title' => '</h3>',
      )
    );
  }
  add_action( 'widgets_init', 'theme_widgets_standard' );
}
/**
 * Helpers básicos e nativos do Worpdress
 */
if ( ! function_exists( 'theme_after_setup' ) ) {
  function theme_after_setup() {
    
    /**
     * Registra o menu principal
     */
    register_nav_menus(
      array(
        'main-menu' => 'Main Menu'
      )
    );
    /**
     * Suporte para post-thumbnails
     */
    add_theme_support( 'post-thumbnails' );
    /**
     * Adiciona o feed
     */
    add_theme_support( 'automatic-feed-links' );
    /**
     * Adiciona o título na tag <title></title>
     */
    add_theme_support( 'title-tag' );
    /**
     * Esconde a barra do wordpress no topo
     */
    add_filter( 'show_admin_bar', '__return_false' );
  }
  add_action( 'after_setup_theme', 'theme_after_setup' );
}
?>
~~~

Nossos helpers foram definidos, serão necessário para algumas coisas, tais como adicionar a tag title, criar o menu, imagem destacadas, widgets e etc.

[**core/scripts.php**]

~~~php
<?php
/**
 * Arquivo de core
 */
/*
 * Adicionando Scripts e Estilos no tema
 */
if ( ! function_exists( 'theme_enqueue_scripts' ) ) {
  function theme_enqueue_scripts() {
    /*
     * Definimos a URL em uma variável
     */
    $template_url = get_template_directory_uri();
    /*
     * DEMO STYLE
     * wp_enqueue_style( 'id-of-style', get_template_directory_uri() . '/url/to/new.css', dependências, versão, media-queries );
     */
    /*
     * Carregando o estilo padrão
     */
    wp_enqueue_style( 'theme-style', get_stylesheet_uri(), array(), null, 'all' );
    /*
     * DEMO SCRIPT
     * wp_enqueue_script( 'id-of-script', get_template_directory_uri() . '/url/to/new.js', dependências, versão, {{ true para ficar no rodapé  | RECOMENDADO }} );
     */
    /*
     * Carregando o jQuery
     */
    wp_enqueue_script( 'jquery' );
    /*
     * Carregando o jQuery
     */
    wp_enqueue_script( 'theme-main', $template_url . '/build/js/main.min.js', array(), null, true );
  }
  add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts', 1 );
}
?>
~~~

Aqui é onde iremos adicionar scripts/estilos adicionais no tema, no código está bem comentado para que possam entender melhor.

### Passo 9:
Definindo o sidebar

[**sidebar.php**]

~~~html
<aside id="sidebar" class="main-sidebar col-sm-4" role="complementary">
  <?php
    if ( ! dynamic_sidebar( 'main-sidebar' ) ) {
      the_widget( 'WP_Widget_Recent_Posts', array( 'number' => 10 ) );
      the_widget( 'WP_Widget_Archives', array( 'count' => 0, 'dropdown' => 1 ) );
      the_widget( 'WP_Widget_Tag_Cloud' );
    }
  ?>
</aside><!-- #sidebar -->
~~~
Esse código será incluso na página pela tag ``<?php get_sidebar(); ?>``, essa tag irá no lugar daquele comentário ``<!-- /Sidebar -->`` do **passo 6** em estrutura padrão de html.

Nesse arquivos vemos que tem um **if** com a função **dynamic_sidebar( 'main-sidebar' )**, significa que se não tiver widgets nessa sidebar, vai ser exibido três widgets, chamados pela função **the_widget()**.

### Passo 10:
Estilos e scripts

**ATENÇÃO:** Essa parte serve para usar o nodejs, sass, bower, caso não saiba usar os mesmos, siga o **passo 10-a**
<br><small><small>Recomendo aprender a usar as ferramentas de automatização</small></small>

{: .list-components}
 - [Primeiros passos com NodeJS](http://tableless.com.br/o-que-nodejs-primeiros-passos-com-node-js/){:target="_blank"}
 - [Gulp: O novo automatizador](http://tableless.com.br/gulp-o-novo-automatizador/){:target="_blank"}
 - [Bower na prática](http://tableless.com.br/bower-na-pratica/){:target="_blank"}
 - [Instalando SASS na máquina – video](http://tableless.com.br/instalando-sass-na-maquina-video/){:target="_blank"}

[**assets/sass/style.scss**]

~~~scss
@import "bootstrap-sass-official/assets/stylesheets/bootstrap";
@import "components/layout";
~~~

[**assets/js/main.js**]

~~~javascript
//import("bootstrap/dist/js/bootstrap.js");

(function( $ ) {
  "use strict";

  $(window).load(function() {
    $("body").addClass("loading");
  });
  
})(jQuery);
~~~

No arquivo **style.scss** e **main.js**, a primeira linha tem um import, que se encontra nos components do bower instaldos, caso não tenha instalado os components ainda, rode o comando de linha **bower install** e depois para gerar a build rode o comando **gulp build**.

**ATENÇÃO:** bower, gulp só irá rodar se tiver instalado globalmente as duas ferramentas, no início desse passo eu postei os links para a instalação de todos.

### Passo 10-a:
Trabalhando sem as ferramentas de automatização

Primeiramente crie as pastas **css**, **js** e **images** no tema, crie seu arquivo de css e js nas devidas pastas.

Você pode encontrar os arquivos alterados em: [fallback](https://github.com/raank/wp-theme/tree/fallback){:target="_blank"}

{:.endpost}
Dúvidas!? Mande email via [contato](https://raank.github.io/contato){:target="_blank"}

{:.byebye}
É galera, por hoje é só!<br>Valeu e até a próxima!

<img class="lazyload" data-src="http://i.imgur.com/jOCaybJ.gif" alt="vlw flw">

### Passos:

{: .list-components}
 - [Parte 1](https://raank.github.io/blog/2015/07/criando-temas-wp-parte-1.html)
 - [Parte 2](https://raank.github.io/blog/2015/07/criando-temas-wp-parte-2.html)
 - [Parte 3](https://raank.github.io/blog/2015/08/criando-temas-wp-parte-3.html)
