Rails.application.routes.draw do
  root to: "idea#index"

  resources :ideas, only: [ :create ]
end
