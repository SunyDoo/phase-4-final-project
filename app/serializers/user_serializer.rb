class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :avatar, :commented_blogs
  has_many :blogs
end
