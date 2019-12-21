 class Api::V1::CategoryShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  has_many :topics
end