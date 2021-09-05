class Comments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :idea, null: false, foreign_key: true
      t.string :content, null: false

      t.timestamps
    end
  end
end
