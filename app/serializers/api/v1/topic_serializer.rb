class Api::V1::TopicSerializer < ActiveModel::Serializer
  attributes :id, :title, :category_id
  belongs_to :category
end