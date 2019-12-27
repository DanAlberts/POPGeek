class Api::V1::PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :username
  # attributes :id, :content, :user

  # belongs_to :topic
  belongs_to :user

  def username
    object.user.username
  end

end