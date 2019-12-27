class Api::V1::TopicShowSerializer < ActiveModel::Serializer
  attributes :id, :title

  # belongs_to :category
  has_many :posts

  # def posts
  #   posts = object.posts
  #   # ActiveModel::ArraySerializer.new(object, each_serializer: RecordSerializer).to_json


  #   self.object.posts.map do |post|
  #     {
  #     content: post.content 
  #     user: post.user.username,
  #     }
  # end
end