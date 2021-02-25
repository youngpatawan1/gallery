class Painting < ApplicationRecord
    belongs_to :user
    accepts_nested_attributes_for :user
    has_one_attached :custom_image
    attr_accessor :likes

end
