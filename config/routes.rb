Rails.application.routes.draw do
  resources :users do
      resources :paintings do
        resources :likes_joins
      end
  end
  
  root 'static_pages#home'
  get 'static_pages/discover', to: 'static_pages#discover'
  get 'static_pages/canvas', to: 'static_pages#canvas'
  get 'signup', to: 'users#new'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

end
