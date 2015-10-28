class CreateCareerPostReplies < ActiveRecord::Migration
  def change
    create_table :career_post_replies do |t|
      t.string :title
      t.string :career_postid
      t.string :username
      t.string :content
      t.timestamptz :date

      t.timestamps null: false
    end
  end
end
