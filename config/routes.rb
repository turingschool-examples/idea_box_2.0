Rails.application.routes.draw do
  root to: "idea#resume_box"

  namespace :api do
    namespace :v1 do
      resources :idea
    end
  end
end
