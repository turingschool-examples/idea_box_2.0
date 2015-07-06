Rails.application.routes.draw do
  root to: "idea#index"

  resources :ideas, only: [ :new ]
end
