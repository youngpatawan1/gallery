class CreateCaptionsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :captions do |t|
      t.string :caption
      t.references :user, null: false, foreign_key: true
      t.references :painting, null: false, foreign_key: true

      t.timestamps
    end
  end
end
