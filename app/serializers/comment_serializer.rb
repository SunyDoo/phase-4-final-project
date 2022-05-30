class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :dislikes, :user
  has_one :user
  has_one :blog
end
