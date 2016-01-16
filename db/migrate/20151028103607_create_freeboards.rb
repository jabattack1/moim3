class CreateFreeboards < ActiveRecord::Migration
  def change
    create_table :freeboards do |t|
      t.string :title
      t.string :content
      t.string :poster
      t.datetime :date
      t.timestamps null: false
    end
  end
end
