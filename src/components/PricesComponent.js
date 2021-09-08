import React from 'react';
import Modal from './Modal';

function pricesComponent() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '360px', height: '400px', padding: '30px' }}>
        <h5 className='mb-4'>Select the category of crops to predict the price</h5>
        <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Predict price
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <Modal />
        </div>
      </div>
    </div>
  )
}

export default pricesComponent;