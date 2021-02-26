class CreateLikesJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :likes_joins do |t|
      t.references :user, null: false, foreign_key: true
      t.references :painting, null: false, foreign_key: true

      t.timestamps
    end
  end
end
