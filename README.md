## Os três pilares do React, parte 3: State

No React, state é o estado atual de um componente da interface de usuário, em relação à quais informações estão sendo exibidas. Por exemplo, um componente "player de vídeo" pode estar no estado "tocando (playing)", "pausado", "carregando (buffering)" ou "finalizado".

### Componentes de classe (ou stateful)

Para usarmos state, precisamos declarar um componente de classe, pois o state é herdado da classe `Component`, que vem do React:

```javascript
import React from "react"; // Importando o objeto React, que contém a classe Component

class ClickCounter extends React.Component {
  // Nosso componente herda a classe Componente e todos seus atributos e métodos
  state = {
    count: 0,
  }; // O state SEMPRE deve ser atribuído para um atributo chamado `state`, e SEMPRE deve ser um objeto literal

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Todo componente de classe deve retornar seu JSX através de um método chamado `render`
  render() {
    console.log(this.state);
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleDecrement}>
          -
        </button>
        <span style={{ fontSize: "2rem", fontStyle: "bold" }}>
          {this.state.count}
        </span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          +
        </button>
      </div>
    );
  }
}

export default ClickCounter;
```

### Atualizações do state e o método `setState`

No React, não podemos atualizar o state diretamente, pois isso causa uma dessincronização entre os dados que estão armazenados no state, e o que está sendo exibido na tela. Para atualizarmos o state, o React fornece o método `setState`, herdado da classe `Component`:

Por exemplo, o código a seguir cria um componente que atualiza os dados do state, porém não atualiza o HTML que está sendo renderizado e exibido pelo navegador:

```javascript
class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.state.count++;
  };

  handleDecrement = () => {
    this.state.count--;
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleDecrement}>
          -
        </button>
        <span style={{ fontSize: "2rem", fontStyle: "bold" }}>
          {this.state.count}
        </span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          +
        </button>
      </div>
    );
  }
}
```

> Note como o state está sendo modificado diretamente dentro dos métodos `handleIncrement` e `handleDecrement`. Isso é proibido pelo React.

A forma correta de atualizar o state é através do método `setState`. O método `setState` recebe como parâmetro um objeto literal contendo qual propriedade do state deve ser atualizada, e seu novo valor. Esse objeto não precisa conter todas as propriedades do state, podemos atualizar somente o que realmente foi alterado. Mas também é possível atualizar várias propriedades de uma vez:

```javascript
class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 }); // Note que não podemos usar this.state.count++ aqui, pois isso é a mesma coisa que this.state.count = this.state.count + 1, o que configura uma modificação direta
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleDecrement}>
          -
        </button>
        <span style={{ fontSize: "2rem", fontStyle: "bold" }}>
          {this.state.count}
        </span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          +
        </button>
      </div>
    );
  }
}
```

> Toda vez que `setState` é invocado, o React re-renderiza o componente, ou seja, invoca novamente o método `render` com os valores do state atualizados. A única forma de re-renderizar um componente no React é através do `setState`.

Quando nosso state contém objetos e arrays, precisamos tomar cuidado na hora da atualização:

```javascript
class TodoList extends React.Component {
  state = {
    todoList: ["An item", "A second item"],
    newTodo: "",
  };

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleClick = () => {
    this.state.todoList.push(this.state.newTodo);
  };
// ... resto do código
```

> Nesse caso, estamos modificando a array original do state, logo, é uma atualização proibida, pois o método `push` modifica a array original.

Para realizar uma atualização imutável de array, precisamos criar um clone do state original, e modificar o clone. Então, substituímos a array do state pelo clone atualizado:

```javascript
class TodoList extends React.Component {
  state = {
    todoList: ["An item", "A second item"],
    newTodo: "",
  };

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleClick = () => {
    const clone = [...this.state.todoList];
    clone.push(this.state.newTodo);
    this.setState({ todoList: clone });
  };
// ... resto do código
```

> É muito comum usarmos o operador spread (...) para criar clones de array sem referência à array original

### Formulários e inputs

No React, não conseguimos acessar diretamente como no DOM o `value` dos inputs que os usuários preenchem. Por isso, precisamos salvar o que o usuário está digitando no state. Para evitar perda de sincronia entre o state e o valor interno do input, aplicamo o conceito de "input controlado". Um input é considerado controlado quando seu evento `change` é usado para atualizar o state, e seu atributo `value` aponta para esse mesmo state:

```javascript
// ... código acima

handleChange = (event) => {
  this.setState({ newTodo: event.target.value });
};

// ...

<input
  className="form-control form-control-lg"
  placeholder="Digite uma nova tarefa"
  onChange={this.handleChange} // Toda vez que ocorrer uma alteração no value (o usuário digitar algo), atualizamos o state
  value={this.state.newTodo} // Força o value o input a ser o próprio state
/>;

// ... código abaixo
```
