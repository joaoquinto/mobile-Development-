# Sintaxe Básica

```css
seletor {
  propriedade: valor;
}

h1 {
  color: red;
  font-size: 16px;
}
```

## Incluir Css em html

    - Inline
    - Interno
    - Externo

```css
/* Inline */
<p style=""></p>

/* Interno, dentro do head */
<style></style>

/* Externo */
<link href=""rel="stylesheet">
```

## Seletor de Elemento

```html
<p></p>

<p class="minha-classe"></p>
<p id="meu-id"></p>
```

```css
p {
}
/* Selecionar por classe */
.minha-classe {
}
/* Selecionar por id */
#meu-id {
}
```

## Css fonts

    - font-family
    - font-size
    - font-syle
    - font-variant

# Css text

    - text-align
    - text-decoration
    - text-indent
    - text-transform

# Box Model

![Box Model](img.md\boxmodel.png)

    - As propriedades padding são somadas aos seus antecessores

Para nulificar esse efeito é usado o par box-sizing: border-box

```css
div {
  background: orange;
  width: 150px;
  height: 100px;
  margin: 10px;
}

/* width atual  200px */
/* height atual 150px */
#div1 {
  /* Sem border-box */
  /* Aplica o padding, mas mantém o width e o height estabelecido */
  padding: 25px;
}

/* width atual 150px */
/* height atual 100px*/
#div2 {
  /* com border-box */
  padding: 25px;
  box-sizing: border-box;
}
```

# Margin

<!-- Diferentes elementos com margin iguais: As margins não são somadas, acaba prevalecêndo o maior valor -->

    - margin-left:
    - margin-right:
    - margin-top:
    - margin-bottom:

## Abreviação de margin e padding

    - Começa no sentido horário
    - Se houver de faltar um arg o navegador irá, preencher com o seu antecessor

```css
/*top|right|bottom|left*/
p {
  margin: 50px 40px 30px 20px;
}

/*top|right|bottom|left*/
p {
  padding: 50px 40px 30px 20px;
}
```

# Border

    - border-style:
    - border-width:
    - border-color:
    - border-lugar-style:
    - border-lugar-width:
    - border-lugar-color:

## Abreviação de border

```css
/*style|espessura|cor*/
h1 {
  border: dotted 5px red;
}
/*style|espessura|cor*/
h1 {
  border-lugar: dotted 5px red;
}
```

# Pseudo Classes em links

    - a:link{}
    - a:visited{}
    - a:hover{}
    - a:active{}

atrn: text-decoration: none;

# List Style

    - list-style-type
    - list-style-position: outside || inside
    - list-style-image

# Multiplas referências

```css
p,
h1,
h2 {
}
ul li {
  list-style-type: disc;
}
```

## Imagens no css

```css
/* Usada quando só tem uma carga visual */
backgroun-image: url();
```

## Centralizar o body

```css
/* usar o max-width: ; melhora como o navegador lida
     com a largura do conteúdo em telas pequenas */
max-width: largura-que-voce-quer;
/* Se colocar margin: auto ele irá centralizar */
margin: auto;
```

## Atributo float

```css
/* Faz a img ficar flutando e obriga o conteúdo a se encaixar junto á img */
float: left;
/* Para resolver os efeitos colaterais do float é usado o atr clear */
div {
  background: orange;
  width: 150px;
  height: 100px;
  margin: 10px;
}

/* width atual  200px */

/* height atual 150px */

#div1 {
  padding: 25px;
  box-sizing: border-box;
  float: right;
}

#div2 {
  padding: 25px;
  box-sizing: border-box;
  /* Sem o clear a div 2 e 3 iriam para o antigo local da div 1 */
  clear: right;
}

#div3 {
  padding: 25px;
  box-sizing: border-box;
}
```

## Mexendo com img

```css
/* determina se aquela posição da imagem é fixa com o viewport, 
    ou se irá rolar juntamente com o seu bloco. */
background-attachment: fixed;
/* especifica o tamanho das imagens de fundo 
    contain: Vai ocupar a área toda do elemento pai, privilegiando o conteúdo da img.
    cover:  Vai ocupar  a área toda do elemento pai, mesmo se tiver que esconder uma parte da img
    */
background-size: cover;
/* Diz onde a img tem que iniciar e alinhada */
background-position: right bottom;
```

### Display

```css
display: none; /* Remove o elemento */

display: block; /* Ocupa normalmente toda a área disponivél do elemento pai e gera uma quebra de linha (p, h1...h6, div, ul, ol, li, footer). Box-Model pode ser aplicado */

display: inline; /* Não gera quebra de linha e não ocupa 100% do elemento pai (a , strong, b, em, i, span, img). Box-Model não pode ser aplicado */

display: inline-block; /*Se comporta como elemento de linha, mas com caracteristicas de elemento de bloco*/
```

## Sombreamento em textos

```css
/* deslocamento-x | deslocamento-y | raio-de-desfoque | cor */
text-shadow: 1px 1px 2px black;
```
