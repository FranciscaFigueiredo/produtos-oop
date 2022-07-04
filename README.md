Estamos criando um E-Commerce e para isso precisamos definir a principio seguintes classes:

- Item
  - Possui category, description e price
- Order
  - Possui uma lista de Items
  - Possui um método addItem que adiciona um Item a lista de Items
  - Possui um método getTotal que retorna a soma dos preços dos Items
  - Possui um método getTaxes que retorna a soma dos impostos dos Items (leia-se imposto = preco \* taxa de imposto)

Categorias e suas taxas de impostos:

- Beer -> taxa de 20%
- Cigar -> taxa de 25%
- Eletronics -> taxa de 30%
- Water -> isento de impostos

Primeiro crie o código de modo que os testes em Order.test.ts passem

Depois, para utilizar melhor a Orientação a Objetos, faça as seguintes modificações:

- [] Crie uma classe TaxItem que herda de Item e possui um método calculateTax que recebe uma taxa de imposto por parâmetro e retorna o imposto do Item
  - [] Modifique os testes e a implementação de Order para adequar essa nova classe
- [] Crie uma classe para cada Categoria já apresentada (Beer, Cigar, Eletronics e Water)
  - [] As categorias que são isentas de imposto devem herdar de Item
  - [] As categorias que possuem taxas de imposto devem herdar de TaxItem e possuir um método getTax que retorna a taxa de imposto do produto (TaxItem deve implementar getTax com uma taxa de imposto padrão)
  - [] Modifique os testes e a implementação de Order e TaxItem para adequar essas novas classes
- [] Para assegurar que nenhum futuro desenvolvedor fará besteira, modifique as classes Item e TaxItem de modo que elas não possam ser instanciadas (**Dica**: pesquise por classes abstratas)
  - [] Faça com que o método getTax de TaxItem seja um método abstrato (não terá mais implementação)
