class VideosController < ApplicationController
  def index
    @videoss= Video.order('created_at')
    @videos = Video.paginate(:page => params[:page], :per_page => 20)
  end



end