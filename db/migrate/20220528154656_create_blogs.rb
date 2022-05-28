class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :content
      t.string :topic
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :views

      t.timestamps
    end
  end
end
