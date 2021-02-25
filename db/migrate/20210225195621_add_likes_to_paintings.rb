class AddLikesToPaintings < ActiveRecord::Migration[6.1]
  def change
    add_column :paintings, :likes, :int, :default => 0
  end
end
