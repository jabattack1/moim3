class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :eventdate
      t.string :poster
      t.string :link
      t.datetime :date
      t.timestamps null: false
    end
  end
end
