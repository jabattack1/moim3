class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :poster
      t.string :blogdate
      t.string :link
      t.timestamptz :date

      t.timestamps null: false
    end
  end
end
