Rails.application.routes.draw do
  devise_for :users
  root to: 'ideas#index'
  resources :ideas, only: %i[show]
  namespace :api do
    namespace :v1 do
      resources :ideas, only: %i[index show]
    end
  end
end
