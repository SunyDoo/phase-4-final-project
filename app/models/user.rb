class User < ApplicationRecord
    has_many :blogs
    has_many :comments
    has_many :commented_blogs, through: :comments, class_name: "Blog", source: "blog"
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
