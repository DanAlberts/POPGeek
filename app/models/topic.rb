class Topic < ApplicationRecord
  has_many :posts
  belongs_to :category
  # belongs_to :user
end