class Painting < ApplicationRecord
    belongs_to :user
    has_many :likes_joins, dependent: :destroy
    has_many :captions, dependent: :destroy
    accepts_nested_attributes_for :user
    has_one_attached :custom_image
    attr_accessor :likes

end
