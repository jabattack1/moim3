class CreateExternalEvents < ActiveRecord::Migration
  def change
    create_table :external_events do |t|
      t.string :name
      t.string :eventdate
      t.string :poster
      t.string :link
      t.timestamptz :date

      t.timestamps null: false
    end
  end
end
