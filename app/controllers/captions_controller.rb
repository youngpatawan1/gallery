class CaptionsController < ApplicationController
  def new
  end
  
  def create 
    binding.pry
  end

  private
    def captions_params
      params.permit(:value, :user_id, :painting_id)
    end
end
