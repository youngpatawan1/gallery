class AddParentCaptions < ActiveRecord::Migration[6.1]
  def change
    add_column :captions, :parent_id, :integer, null: true, foreign_key: true
  end
end
