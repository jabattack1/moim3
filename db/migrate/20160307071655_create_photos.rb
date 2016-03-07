class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.string :username
      t.string :count
      t.string :description
      t.string :eventdate
      t.string :event
      t.string :link

      t.timestamps null: false
    end
  end
end
