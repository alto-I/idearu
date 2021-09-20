Rails.application.routes.draw do
  devise_for :users
  root to: 'ideas#index'
  get 'term_of_service', to: 'tos#index'
  post 'ideas/:id/solved', to: 'ideas#solved'
  post 'ideas/:id/not_solved', to: 'ideas#not_solved'
  resources :ideas, only: %i[show new create edit update destroy] do
    resources :comments, only: %i[create destroy]
  end
  resources :users, only: %i[show]

  namespace :api do
    namespace :v1 do
      resources :ideas, only: %i[index show create]
      resources :likes, only: %i[show create destroy]
    end
  end
end
