Rails.application.routes.draw do
  root to: "idea#index"

  resources :idea, only: [:edit, :update, :index]

  namespace :api do
    namespace :v1 do
      resources :idea
    end
  end
end
