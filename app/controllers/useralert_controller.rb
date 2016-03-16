class UseralertController < ApplicationController

def index
  	# binding.pry
  	if session[:user_id]  
 	  @user = User.all
 	  reset_session
 	else
      redirect_to '/users'
    end
  end

end