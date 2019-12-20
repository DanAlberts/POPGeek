class Board < ApplicationRecord
  has_many :categories
  has_many :users
end