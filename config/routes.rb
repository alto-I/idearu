Rails.application.routes.draw do
  devise_for :users
  root to: 'ideas#index'
  post 'ideas/confirm', to: 'ideas#confirm'
  resources :ideas, only: %i[show new]
  namespace :api do
    namespace :v1 do
      resources :ideas, only: %i[index show]
    end
  end
end
