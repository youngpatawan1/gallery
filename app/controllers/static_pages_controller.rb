class StaticPagesController < ApplicationController
    def home
    end

    def discover
        @users = User.all
    end

    def canvas
    end
end
