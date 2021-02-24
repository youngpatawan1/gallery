module UsersHelper
    def find_paintings(user)
        paintings = Painting.find(user.id)
    end  
end
