class LikesJoinsController < ApplicationController

    before_action :find_painting
    before_action :find_like, only: [:destroy]
    before_action :set_user, only: [:create, :show]

    def create
        if already_liked?
          flash[:danger] = "You can't like more than once"
        else
          @painting.likes_joins.create!(:user_id => current_user.id)
        end
        redirect_to user_painting_path(@user, @painting)
      end
    
      def destroy
        if !(already_liked?)
          flash[:notice] = "cannot unlike"
        else
          @like.destroy
        end
      end
    
    
      private
    
        def find_painting
          @painting = Painting.find(params[:painting_id])
        end
    
        def find_like
          @like = @painting.likes_joins.find(params[:user_id])
        end

        def set_user
            @user = User.find(@painting.user_id)
        end

        def already_liked?
            LikesJoin.where(user_id: current_user.id, painting_id: params[:painting_id]).exists?
        end
end
