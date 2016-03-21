class UsersController < ApplicationController

def index

end

def create

    user_item = User.find_by(email: params['email'])

    if User.find_by(email: params['email'])
     
     
    # binding.pry

    elsif params["sex"] == nil || params["last_name"] == nil || params["username"] == nil || params["email"] == nil || params["password"] == nil || params["day"] == nil || params["month"] == nil || params["year"] == nil
    
      @trigger = nil
    
    
    # elsif params["sex"] != nil && params["last_name"] != nil && params["username"] != nil && params["email"] != nil && params["password"] != nil && params["day"] != nil && params["month"] != nil && params["year"] != nil
  
      
  else
      userNew = User.create({
        first_name: params["first_name"],
        last_name: params["last_name"],
        username: params["username"],
        email: params["email"],
        password: params["password"],
        dob: params["month"] + params["day"] + params["year"],
        location: params["location"],
        gender: params["sex"],
        school: params["school"],
        company: params["company"]
      })


      session[:user_id] = userNew.id

      redirect_to '/useralert'
    end

end

def update

end



end

