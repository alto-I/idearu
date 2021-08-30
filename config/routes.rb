Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'ideas#index'
  resources :ideas, only: %i[show]
  namespace :api do
    namespace :v1 do
      resources :ideas, only: %i[index show]
    end
  end
end
