class GalleriesController < ApplicationController

  def index
  
  @gallery = Gallery.all
 

  @galleryStuff = []
 

  @gallery.each do |media|
  if media.course == "Lunch"

  @galleryStuff.push(media)
  end
  end

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
      
    #     create_table "galleries", force: :cascade do |t|
    # t.string   "file"
    # t.string   "username"
    # t.string   "count"
    # t.string   "description"
    # t.string   "eventdate"
    # t.string   "event"
    # t.string   "link"
    # t.datetime "date"
    # t.datetime "created_at",  null: false
    # t.datetime "updated_at",  null: false
    
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