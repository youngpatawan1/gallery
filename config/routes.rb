Rails.application.routes.draw do
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
