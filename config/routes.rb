Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/front_page', to: "site#index"
  get '/boards', to: "static_pages#index"
  get '/categories', to: "static_pages#index" 
  get '/categories/:id', to: "static_pages#index"
  get '/categories/:id/topics/new', to: "static_pages#index"
  get '/categories/:id/topics/:tid', to: "static_pages#index"

    namespace :api do
    namespace :v1 do
      resources :profiles, only: [:index, :show, :create, :destroy]
      resources :categories, only: [] do
        resources :topics, only: [:show, :new, :create] do
          resources :posts, only: [:create]
        end
      end
      resources :boards, only: [:index, :show] do
        resources :categories, only: [:index, :show, :create, :destroy] do
          resources :topics, only: [:show, :new, :create, :destroy] do
            resources :posts, only: [:new, :create, :destroy]
          end
        end
      end
    end
  end
end
