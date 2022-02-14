class CaptionsController < ApplicationController
  def new
  end

  def update
    @caption = Caption.find_by(id: params[:captionId])
    @caption.update(caption: params[:value])
    render :json => @caption
  end
  
  def create 
    @caption = Caption.create(user_id: params[:userId],
                   painting_id: params[:paintingId],
                   caption: params[:value])
    render :json => @caption
  end

  private
    def captions_params
      params.permit(:value, :user_id, :painting_id)
    end
end
