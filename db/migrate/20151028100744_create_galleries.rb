class CreateGalleries < ActiveRecord::Migration
  def change
    create_table :galleries do |t|
      t.string :file
      t.string :description
      t.string :eventdate
      t.string :event
      t.string :link
      t.timestamptz :date

      t.timestamps null: false
    end
  end
end
