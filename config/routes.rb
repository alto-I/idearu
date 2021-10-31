Rails.application.routes.draw do
  devise_for :users
  root to: 'ideas#index'
  get 'term_of_service', to: 'tos#index'
  get 'policy', to: 'policy#index'
  # namespace :ideas do
  #   resources :solveds, only: %i[update destroy]
  # end
  resources :ideas, only: %i[show new create edit update destroy] do
    resources :comments, only: %i[create destroy]
    resources :solved, only: %i[update destroy], module: "ideas"
  end

  namespace :api do
    namespace :v1 do
      resources :ideas, only: %i[index show create]
      resources :likes, only: %i[show create destroy]
    end
  end
end
