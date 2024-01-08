Rails.application.routes.draw do
  # devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ('/')
  root 'members#index'

  resources :members do
    collection do
      get :clean_ranking
      patch :reset
    end
  end
  resources :winrates
  resources :configs
end
