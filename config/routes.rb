Rails.application.routes.draw do
  get 'paintings/new'
  get 'paintings/create'
  get 'paintings/destroy'
  resources :users do
      resources :paintings
  end
  
  root 'static_pages#home'
  get 'static_pages/home'
  get 'signup', to: 'users#new'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

end
