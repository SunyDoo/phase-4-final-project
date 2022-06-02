class Blog < ApplicationRecord

  #Associations
  belongs_to :user
  has_many :comments
  has_many :commented_users, through: :comments, class_name: "User", source: "user"

  #Validations
  validates_presence_of :title, :topic, :content

  #Methods
  def uniq_commentors
    self.commented_users.uniq
  end

end
