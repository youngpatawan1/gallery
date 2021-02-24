module UsersHelper
    def set_user
        @user = User.with_attached_paintings.find(params[:id])
    end
end
