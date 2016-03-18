class AlertbController < ApplicationController

def index
	# binding.pry
	if session[:username] 
      @user = User.all
      reset_session
    else
      redirect_to '/users'
    end
end

def create

    user_item1 = User.find_by(username: params['username'])

    if user_item1
  		session[:username] = user_item1

      # redirect_to '/alertb'
      redirect_to(controller: 'alertb', id: session[:username].to_param)
      return
    else
    	return
    end

end

end