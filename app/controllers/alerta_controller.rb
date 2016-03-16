class AlertaController < ApplicationController

def index
	if session[:username] 
      @user = User.all
      reset_session
    else
      redirect_to '/users'
    end

end

def create

	user_item = User.find_by(email: params['email'])

    if user_item
    	session[:username] = user_item
      redirect_to '/alerta'
    else
    	return
    end

end

end