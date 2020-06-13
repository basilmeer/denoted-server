# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'

  authenticated :user do
    resource :notes, only: %w[new] do
      post :new
    end
  end
end
