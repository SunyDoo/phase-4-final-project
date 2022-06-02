class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :avatar
  has_many :blogs
end
