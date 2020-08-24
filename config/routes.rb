# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'

  resource :notes, only: %w[update] do
    get :index
    post :save
  end

  resources :categories, only: %i[index create]
end
