class UsersController < ApplicationController

def show

end

def create

    user_item = User.find_by(email: params['email'])
    
    if User.find_by(email: params['email'])

      @user = User.all
      @trigger = []

      @user.each do |person|
      @trigger.push(person)
      end
    # binding.pry
    
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

    @admin = User.all
    @trigger = nil  
    session[:user_id] = userNew.id

    redirect_to '/useralert'
    end

end

def update

end

end

