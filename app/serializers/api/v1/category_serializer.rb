class Api::V1::CategorySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :board_id
  has_many :topics
end