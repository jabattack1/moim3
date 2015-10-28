class CreateCareers < ActiveRecord::Migration
  def change
    create_table :careers do |t|
      t.string :title
      t.string :content
      t.string :poster
      t.timestamptz :date

      t.timestamps null: false
    end
  end
end
