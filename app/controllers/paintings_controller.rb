class PaintingsController < ApplicationController


  before_action :set_user, only: [:new, :create, :show]
  def new
    @painting = @user.paintings.new
  end

  def create
    @painting = @user.paintings.create!(painting_params)
    if @painting.save
      redirect_to @user
    else
      flash[:danger] = "Invalid Format"
    end
  end

  def show
    @painting = Painting.find(params[:id])
  end

  def destroy

  end

  def set_user
    # use params.require to use strong params
    @user = User.find(params.require(:user_id))
  end

  private
  def painting_params
      params.require(:painting).permit(:custom_image, :title)
  end
end
