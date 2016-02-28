class AdminSessionController < ApplicationController
# protect_from_forgery
  def new

  end

  def create 
  	user = Admin.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      # session[:error] = nil # "Success"
      redirect_to '/adminlands'
    else

      @popup_message = "username/password incorrect"

      redirect_to '/admins'
    end
  end

  def destroy

    # binding.pry
    # log_out
    reset_session
    # session[:user_id] = nil

    redirect_to '/admins'
  end

end