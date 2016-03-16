class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :last_name
      t.string :first_name
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :gender
      t.string :dob
      t.string :location
      t.string :school
      t.string :company

      t.timestamps null: false
    end
  end
end
