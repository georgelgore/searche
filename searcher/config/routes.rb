Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :user
      resources :article
      resources :topic
    end
  end
end
