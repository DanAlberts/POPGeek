Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/front_page', to: "site#index"
  get '/boards', to: "static_pages#index"

    namespace :api do
    namespace :v1 do
      resources :profiles, only: [:index, :show, :create, :destroy]
      resources :boards, only: [:show] do
        resources :categories, only: [:create, :destroy] do
          resources :topics, only: [:create, :destroy] do
            resources :posts, only: [:create, :destroy]
          end
        end
      end
    end
  end
end
