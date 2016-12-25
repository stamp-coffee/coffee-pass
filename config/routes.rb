Rails.application.routes.draw do
  root 'home#index'
  resources :shops, only: [:show] do
    member do
      get :payment
    end
  end
end
