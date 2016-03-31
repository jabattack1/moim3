class GalleriesController < ApplicationController

  def index
  # @photos = Photo.all
  @gallery = Gallery.all
  @photos = Photo.paginate(:page => params[:page], :per_page => 20)
  

  end

  def create
    
    galleryNew = Gallery.create({
        file: params["file"],
        username: params["username"],
        description: params["description"],
        event: params["event"],
        eventdate: params["eventdate"]
      })

      redirect_to "/adminlands"
      
  end

def update
  if Gallery.find_by(email: params['email'])
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
  if Gallery.find_by(email: params['email'])
    admin_item = Gallery.find_by(email: params['email'])
    # binding.pry

    admin_item.destroy
    redirect_to "/adminlands"
  else
  redirect_to "/adminlands"
  end
end

end

