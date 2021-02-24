class PaintingsController < ApplicationController
  attr_accessor :custom_image, :title, :user_id
  def new
    @user = User.find(params[:user_id])
  end

  def create
    @painting = Painting.create!(painting_params)
  end

  def destroy
  end

  private
  def painting_params
      params.require(:painting).permit(:custom_image, :title)
  end
end
