class Painting < ApplicationRecord
    belongs_to :user
    has_one_attached :custom_image

    validates :custom_image, presence: true
end
