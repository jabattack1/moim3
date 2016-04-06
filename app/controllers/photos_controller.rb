class PhotosController < ApplicationController
  def index
    @photos = Photo.order('created_at')

  end

  def new
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)
 
    if @photo.save
      flash[:success] = "The photo was added!"
      redirect_to "/photos/new"
    else
      render 'new'
    end
  end


  def destroy
  @photo = Photo.find(params[:id])
  @photo.destroy
  flash[:success] = "The photo was destroyed."
  redirect_to "/photos"
  end

  def destroy_multiple
    photo = params['photo']
    
    if photo == nil
      flash[:success] = "No photo(s) selected."
      redirect_to "/photos"
    else 
      photo.each { |x| 
      foto = Photo.find_by(id: x)
      Photo.destroy(foto) 
      }
      flash[:success] = "Photos were destroyed."
      redirect_to "/photos"
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:image, :title, :description)
  end



end


