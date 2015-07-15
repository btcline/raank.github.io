---
layout: post
title: Formulário de contato para sites estáticos.
date:   2015-05-31
categories: jekyll, contato
excerpt_separator: <!--more-->
---

{: .excerpt}
Uma solução simples para quem tem um site estático e precisa de um formulário de contato.

<!--more-->

<span class="alert alert-warning">UPDATE on 15.07.2015</span>

E aí galera, tudo tranquilo!? <br>Hoje vou compartilhar uma informação útil que eu encontrei para o 'temor' de alguns developers, que é o contato.

Primeiramente eu achei essa ferramenta muito útil, pois não precisa de php e também não precisa saber muito para inseri-lo em páginas estáticas, vou fazer um passo-a-passo bem simples, vocês iram ver que é bem fácil.

Iremos usar a ferramenta **Formspree**, o envio é apenas via **javascript**.<br>Pimeiro passo é inserir o formulário:

~~~html
<form id="formulario" method="POST">
    <input type="text" placeholder="Seu nome" name="name" />
    <input type="email" placeholder="Seu email">
    <textarea placeholder="Sua Mensagem"></textarea>
    <input type="submit" value="Enviar">
</form>
~~~

Veja que adicionamos o formulário, mas para ele enviar os dados para a variável POST da ferramenta, precisamos inserir o atributo de action, tem duas maneira, via html ou javascript puro, irei fazer os dois.

~~~html
<form id="formulario" action="//formspree.io/seu-email@email.com" method="POST">
    <input type="text" placeholder="Seu nome" name="name" />
    <input type="email" placeholder="Seu email" name="_replyto" />
    <textarea placeholder="Sua Mensagem"></textarea>
    <input type="submit" value="Enviar">
</form>
~~~

Pronto, adicionamos as tags via html, para inserir via js é bem simples também.

~~~html
<form id="formulario" method="POST">
    <!-- Código -->
</form>
<script>
    var contactform =  document.getElementById('formulario');
    contactform.setAttribute('action', '//formspree.io/' + 'seu-email' + '@' + 'email' + '.' + 'com');
</script>
~~~

> Legal!

Agora vamos aos parâmetros adicionais. O primeiro campo adicional é o ``_next``, esse campo é o resultado após o envio, seria a mensagem que o usuário recebe se o contato for enviado.

~~~html
<input type="hidden" name="_next" value="//meusite.com/contato-sucesso.html" />
~~~

Também temos o campo que o usúario insere o ``Assunto`` do contato, que a nossa ferramenta usa como variável é ``_subject``.

~~~html
<input type="hidden" name="_subject" value="Assunto" />
~~~

Agora pintou um problema! Como evitar spams?<br>
A resposta é simples, escondemos um campo do usúario, ele não vera esse campo, mas os boots sim, os boots preenchem todos os campos de um formulário, a ferramenta **Formspree** vai checar esse campo, se ele estiver preenchido, ele não lhe enviará spams, legal né? :D

~~~html
<input type="text" name="_gotcha" style="display:none" />
~~~

Para deixar desabilitado para o usuário, apenas adicione o css inline ``display: inline;``

Nosso formulário ficará assim:

~~~html
<form id="formulario" method="POST">
	<input type="text" placeholder="Seu nome" name="name" />
	<input type="email" placeholder="Seu email" name="_replyto" />
	<input type="hidden" name="_subject" value="Assunto" />
	<textarea placeholder="Sua Mensagem"></textarea>
	<input type="text" name="_gotcha" style="display:none" /> <!-- Campo anti-spam -->
	<input type="hidden" name="_next" value="//meusite.com/contato-sucesso.html" /> <!-- Mensagem de sucesso -->
	<input type="submit" value="Enviar">
</form>
<script>
    var contactform =  document.getElementById('formulario');
    contactform.setAttribute('action', '//formspree.io/' + 'seu-email' + '@' + 'email' + '.' + 'com');
</script>
~~~

### Testando seu formulário

A estapa final é bem simples, você mesmo fará um teste de envio de email, para o sistema **Formspree** reconhecer o seu e-mail e sua URL, nas imagens abaixo tem a explicação.

#### Passo 1

<img class="lazyload" data-src="{{ "images/posts/formspree-confirm.png" | prepend: site.baseurl }}" alt="">

#### Passo 2

<img class="lazyload" data-src="{{ "images/posts/formspree-confirm-2.png" | prepend: site.baseurl }}" alt="">

O serviço tem limite de e-mails de contato enviado, são 1000 envios por mês.

### Conclusão
Para sites estáticos alojados no github, ou em hospedagens próprias, apenas para portfólio e/ou serviço simples, isso auxilia bastante. É uma ferramenta sensacional!

Espero ter ajudado, até mais pessoas.


<img class="lazyload" data-src="http://i.imgur.com/FzhaHex.gif">

### Contribuitions
    - [@brulima](https://github.com/brulima)