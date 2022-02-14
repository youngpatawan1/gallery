class Caption < ApplicationRecord
  belongs_to :user
  belongs_to :painting
  belongs_to :parent, class_name: 'Caption', optional: true

  has_many :replies, class_name: 'Caption', foreign_key: 'parent_id'
end
