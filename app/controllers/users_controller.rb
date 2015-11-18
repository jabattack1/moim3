class UsersController < ApplicationController

  def index
  

  end

def create
    # Create the user from params
    # @user = User.new(params[:user])
    if User.find_by(username: params['username'])
        status = ({Status: 'Error', Message: 'A user with that username already exists'})

      render :action => 'index'
    	# @user.save
      # Deliver the signup email
    else
    	userNew = User.create({
        first_name: params["first_name"],
        last_name: params["last_name"],
        username: params["username"],
        email: params["email"],
        ethnicity: params["ethnicity"],
        company: params["company"]
        school: params["school"]
        password: params["password"]
        dob: params["dob"]
        location: params["location"]
        gender: params["gender"]
      })

      UserNotifier.send_signup_email(userNew).deliver
      redirect_to '/'
    end
  end

end
