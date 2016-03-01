class AdminsController < ApplicationController
	
def index
  
      @admin = Admin.all
end

def create
    admin_item = Admin.find_by(email: params['email'])
    
    if Admin.find_by(email: params['email'])
    
    @admin = Admin.all

      @trigger = []

  @admin.each do |person|
  

      @trigger.push(person)
  end
    # binding.pry
    

    # @popup = render :js => "alert('Hello Rails');"
    # redirect_to "/adminlands"  
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

def update
  if Admin.find_by(email: params['email'])
    admin_item = Admin.find_by(email: params['email'])
    admin_item.update({
    email: params["email"],
    password: params["password"]
    })

  redirect_to "/adminlands"

  else
  redirect_to "/adminlands"
  end
end

def destroy
  if Admin.find_by(email: params['email'])
    admin_item = Admin.find_by(email: params['email'])
    # binding.pry

    admin_item.destroy
    redirect_to "/adminlands"
  else
  redirect_to "/adminlands"
  end
end

end