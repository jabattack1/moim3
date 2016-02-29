class AdminlandsController < ApplicationController

  def index
  	# binding.pry
  	if session[:user_id]  
 	  @admin = Admin.all
 	else
      redirect_to '/admins'
    end
  end

  def update
    # announcement_item = Announcement.find(params[:id])
    # announcement_item.update({
    # message: params["message"],
    # })

  redirect_to "/adminlands"

  end

end