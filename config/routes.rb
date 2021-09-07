Rails.application.routes.draw do
  devise_for :users
  root to: 'ideas#index'
  post 'ideas/new/confirm', to: 'ideas#confirm'
  resources :ideas, only: %i[show new create] do
    resources :comments, only: %i[create destroy]
  end
  resources :users, only: %i[show]

  namespace :api do
    namespace :v1 do
      resources :ideas, only: %i[index show]
      resources :likes, only: %i[show create destroy]
    end
  end
end
