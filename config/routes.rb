Rails.application.routes.draw do
  devise_for :users
  root to: 'ideas#index'
  post 'ideas/new/confirm', to: 'ideas#confirm'
  resources :ideas, only: %i[show new create]
  namespace :api do
    namespace :v1 do
      resources :ideas, only: %i[index show]
      resources :likes, only: %i[index create destroy]
    end
  end
end
