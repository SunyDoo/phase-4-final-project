class Blog < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :commented_users, through: :comments, class_name: "User", source: "user"
end
