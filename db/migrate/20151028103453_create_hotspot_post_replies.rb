class CreateHotspotPostReplies < ActiveRecord::Migration
  def change
    create_table :hotspot_post_replies do |t|
      t.string :title
      t.string :hotspot_postid
      t.string :username
      t.string :content
      t.timestamptz :date

      t.timestamps null: false
    end
  end
end
