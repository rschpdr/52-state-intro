import { Component } from "react";

import TextInput from "./TextInput";
import FormButton from "./FormButton";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    // Previne o comportamento padrão do formulário de enviar as informações por URL
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Formulário de Cadastro</h1>

        <form onSubmit={this.handleSubmit}>
          <TextInput
            label="Nome"
            id="signupFormName"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />

          <TextInput
            label="E-mail"
            id="signupFormEmail"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
          />

          <TextInput
            label="Password"
            id="signupFormPassword"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
          />

          <FormButton />
        </form>
      </div>
    );
  }
}

export default SignupForm;
