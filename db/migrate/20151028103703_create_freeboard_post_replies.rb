class CreateFreeboardPostReplies < ActiveRecord::Migration
  def change
    create_table :freeboard_post_replies do |t|
      t.string :title
      t.string :freeboard_postid
      t.string :username
      t.string :content
      t.datetime :date
      t.timestamps null: false
    end
  end
end
