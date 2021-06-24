import { Component } from "react";

import TextInput from "./TextInput";
import FormButton from "./FormButton";
import ChoiceInput from "./ChoiceInput";
import SelectInput from "./SelectInput";

// const cities = [
//   { city: "São Paulo" },
//   { city: "Miami" },
//   { city: "Cidade do México" },
// ];

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    acceptedTermsOfUse: false,
    campus: "São Paulo",
    bootcamp: "Web Dev",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    if (this.state.acceptedTermsOfUse) {
      // Previne o comportamento padrão do formulário de enviar as informações por URL
      event.preventDefault();
      console.log(this.state);
    } else {
      alert("Por favor aceite os termos de uso!");
    }
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

          {/* Checkbox */}
          <ChoiceInput
            onChange={() => {
              this.setState({
                acceptedTermsOfUse: !this.state.acceptedTermsOfUse,
              });
            }}
            checked={this.state.acceptedTermsOfUse}
            name="acceptedTermsOfUse"
            label="Aceito os termos de uso"
            type="checkbox"
          />

          <h4>Selecione seu campus: </h4>
          {/* Radio */}
          {/* {cities.map((cityObj) => {
            return (
              <ChoiceInput
                onChange={this.handleChange}
                checked={this.state.campus === cityObj.city}
                name="campus"
                label={cityObj.city}
                type="radio"
                value={cityObj.city}
              />
            );
          })} */}
          <ChoiceInput
            onChange={this.handleChange}
            checked={this.state.campus === "São Paulo"}
            name="campus"
            label="São Paulo"
            type="radio"
            value="São Paulo"
          />
          <ChoiceInput
            onChange={this.handleChange}
            checked={this.state.campus === "Cidade do México"}
            name="campus"
            label="Cidade do México"
            type="radio"
            value="Cidade do México"
          />
          <ChoiceInput
            onChange={this.handleChange}
            checked={this.state.campus === "Miami"}
            name="campus"
            label="Miami"
            type="radio"
            value="Miami"
          />

          <SelectInput
            label="Selecione seu bootcamp"
            id="signupFormBootcamp"
            items={[
              { text: "Web Dev", value: "WD" },
              { text: "UX/UI Design", value: "UX" },
              { text: "Data Analytics", value: "DA" },
              { text: "Cyber Security", value: "CY" },
            ]}
            onChange={this.handleChange}
            value={this.state.bootcamp}
            name="bootcamp"
          />

          <FormButton />
        </form>
      </div>
    );
  }
}

export default SignupForm;
