class User < ApplicationRecord
    has_many :paintings, dependent: :destroy
    has_many :likes_joins, dependent: :destroy
    has_one_attached :profile_pic

    before_save {self.email = email.downcase }
    EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :username, presence: true, length: { maximum: 40 }, uniqueness: true
    validates :about, length: {maximum: 200}
    validates :email, presence: true, length: { maximum: 200 }, format: { with: EMAIL_REGEX }, uniqueness: true
    has_secure_password
    validates :password, presence: true, length: { minimum: 7 }, allow_nil: true
    def User.digest(string)
        cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
          BCrypt::Engine.cost
         BCrypt::Password.create(string, cost: cost) 
        end
      
end
