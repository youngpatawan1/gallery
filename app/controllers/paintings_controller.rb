class PaintingsController < ApplicationController
  def new
    @painting = Painting.new
  end

  def create
    user = current_user
    @painting = Painting.new(painting_params)
    if @painting.save
      redirect_to current_user
    else
      render 'new'
    end
  end

  def destroy
  end

  private
  def user_params
      params.require(:user).permit(:gallery, :custom_image, :title)
  end
end
