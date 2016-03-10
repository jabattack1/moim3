class CreateAdmins < ActiveRecord::Migration
  def change
    create_table :admins do |t|
      t.string :last_name
      t.string :first_name
      t.string :username
      t.string :password_digest
      t.string :email

      t.timestamps null: false
    end
  end
end