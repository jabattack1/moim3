Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  resources :users, only: [:index, :create]
  resources :admins
  resources :admin_session
  resources :adminlands
  resources :session, only: [:create, :destroy, :new]
  resources :teams, only: [:index, :create]
  resources :teams_session
  resources :admin_error
  
  resources :galleries
  resources :expresses
  resources :localhotspots
  resources :careerboards
  resources :partnerevents

  resources :events do
    resources :eventposts, { shallow: true }
  end


  resources :external_events do
    resources :external_eventposts, { shallow: true }
  end


  resources :blogs do
    resources :blog_posts, { shallow: true }
  end


 resources :presses do
    resources :press_posts, { shallow: true }
  end


  resources :express_yourselves do
    resources :express_yourself_posts, { shallow: true }
  end


  resources :careers do
    resources :career_posts, { shallow: true }
  end


  resources :hotspots do
    resources :hotspot_posts, { shallow: true }
  end


  resources :freeboards do
    resources :freeboard_posts, { shallow: true }
  end
  

  get '/mission' => 'abouts#mission'
  get '/chronicle' => 'abouts#chronicle'
  get '/team' => 'abouts#team'
  get '/getinvolved' => 'abouts#getinvolved'





  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
