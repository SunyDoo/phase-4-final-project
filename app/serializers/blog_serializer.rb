class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :topic, :views
  has_one :user
  has_many :comments, dependent: :destroy

end
