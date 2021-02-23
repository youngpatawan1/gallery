class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password
      t.string :password_confirmation

      t.timestamps
    end
    add_index :users, [:username, :email], unique:true
  end
end
