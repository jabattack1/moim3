class AdminsController < ApplicationController
	
    def index
  
      @admin = Admin.all
  end

def create

    if Admin.find_by(email: params['email'])
        
      

      redirect_to "/adminlands"

    else
    	adminNew = Admin.create({
        first_name: params["first_name"],
        last_name: params["last_name"],
        email: params["email"],
        password: params["password"]
      })

      redirect_to "/adminlands"
    end
  end

end