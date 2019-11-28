class Category < ApplicationRecord
  has_many :topics
  belongs_to :board
end