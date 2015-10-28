class CreateExpressYourselves < ActiveRecord::Migration
  def change
    create_table :express_yourselves do |t|
      t.string :title
      t.string :content
      t.string :poster
      t.timestamptz :date

      t.timestamps null: false
    end
  end
end
