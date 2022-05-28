class User < ApplicationRecord

    #Associations
    has_many :blogs
    has_many :comments
    has_many :commented_blogs, through: :comments, class_name: "Blog", source: "blog"

    #Validations
    has_secure_password
    validates :username, presence: true, uniqueness: true

    #Scope Methods
    def uniq_blogs_commented_on
        self.commented_blogs.uniq
    end
    
end
