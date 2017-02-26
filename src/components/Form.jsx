import React from 'react';
import TextInput from './TextInput.jsx'
import calculator from '../utils.js'

export default class Form extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    const form = new FormData(document.getElementById('mortgage-form'));
    const principal = form.get('principal')
    const rate = form.get('rate')
    const payments = form.get('number_of_payments')
    const monthly_payment = calculator().monthlyPayments(principal, rate, payments)
    alert(monthly_payment);
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)} id="mortgage-form">
        <fieldset>
          <legend>Calculating Mortgage Payments</legend>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="principal">Principal</label>
            <div className="col-md-5">
              <TextInput id="principal" name="principal" placeholder="Principal"/>
              <span className="help-block">Amount borrowed or the amount still owed on a loan</span>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="rate">Anual rate</label>
            <div className="col-md-4">
              <div className="input-group">
                <TextInput id="rate" name="rate" placeholder="Rate"/>
                <span className="input-group-addon">%</span>
              </div>
              <p className="help-block">Annual interest rate </p>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="number_of_payments">Mortgage term</label>
            <div className="col-md-4">
              <div className="input-group">
                <TextInput id="number_of_payments" name="number_of_payments" placeholder="Mortgage term"/>
                <span className="input-group-addon">months</span>
              </div>
              <p className="help-block">The number of months you will be paying the loan</p>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="submit"></label>
            <div className="col-md-4">
              <button id="submit" name="submit" className="btn btn-primary">
                Calculate
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}
