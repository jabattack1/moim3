class CreateExpressYourselfPostReplies < ActiveRecord::Migration
  def change
    create_table :express_yourself_post_replies do |t|
      t.string :title
      t.string :express_yourself_postid
      t.string :username
      t.string :content
      t.datetime :date
      t.timestamps null: false
    end
  end
end
