class CreatePresses < ActiveRecord::Migration
  def change
    create_table :presses do |t|
      t.string :title
      t.string :pressdate
      t.string :poster
      t.string :link
      t.datetime :date
      t.timestamps null: false
    end
  end
end
