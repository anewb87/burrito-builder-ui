import React, { Component } from 'react';
import './OrderForm.css'


class OrderForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name && this.state.ingredients.length) {
      const newOrder = {
        id: Date.now(),
        ...this.state
      }
      this.props.addOrder(newOrder)
      this.clearInputs();
    }
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  handleButton = (e) => {
    e.preventDefault()
    if (!this.state.ingredients.includes(e.target.name)) {
      this.setState({ ingredients: [...this.state.ingredients, e.target.name] })
    }
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleButton(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
